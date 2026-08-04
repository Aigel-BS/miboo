<?php
class MovimientosController extends AppController {
	public $name = 'Movimientos';

	function add(){
		$this->loadModel('Movimiento');
		if($this->request->is('post')){
			$this->request->data['Movimiento']['fecha_registro']=date("Y-m-d H:i:s");
			if($this->Movimiento->save($this->request->data)){
				$this->Session->setFlash('El movimiento ha sido registrado exitosamente.', 'default', array('class' => 'success_flash'));
			}
			switch ($this->request->data['Movimiento']['url_redirect']):
				case 1: //Proviene de Jugadores Index
					return $this->redirect(array('controller' => 'jugadors', 'action' => 'index'));
					break;
				case 2: // Proviene de Cuenta Bancaria View
					return $this->redirect(array('controller' => 'cuentas', 'action' => 'view',$this->request->data['Movimiento']['cuenta_id']));
					break;
				case 3: // Proviene de Comisionistas Index
					return $this->redirect(array('controller' => 'comisionistas', 'action' => 'index'));
					break;
			endswitch;

		}
	}

	public function edit() {
		$this->loadModel('Movimiento');
		if ($this->request->is('post') || $this->request->is('put')) {
			$this->Movimiento->id = $this->request->data['Movimiento']['id'];
			
			// We only want to update specific fields
			$fieldsToUpdate = array('referencia', 'tipo_gasto', 'monto', 'tipo_movimiento', 'fecha_aplicacion');
			
			if ($this->Movimiento->save($this->request->data, true, $fieldsToUpdate)) {
				$this->Session->setFlash('El movimiento ha sido actualizado exitosamente.', 'default', array('class' => 'success_flash'));
			} else {
				$this->Session->setFlash('El movimiento no pudo ser actualizado.', 'default', array('class' => 'alert alert-danger'));
			}
			
			switch ($this->request->data['Movimiento']['url_redirect']):
				case 1: //Proviene de Jugadores Index
					return $this->redirect(array('controller' => 'jugadors', 'action' => 'index'));
					break;
				case 2: // Proviene de Cuenta Bancaria View
					return $this->redirect(array('controller' => 'cuentas', 'action' => 'view', $this->request->data['Movimiento']['cuenta_id']));
					break;
				case 3: // Proviene de Comisionistas Index
					return $this->redirect(array('controller' => 'comisionistas', 'action' => 'index'));
					break;
				default:
					return $this->redirect(array('controller' => 'cuentas', 'action' => 'index'));
			endswitch;
		}
	}

	public function transferencia() {
		if ($this->request->is('post')) {
			$data = $this->request->data['Movimiento'];

			// 1. Validar que la cuenta origen no sea la misma que la cuenta destino
			if ($data['cuenta_origen'] === $data['cuenta_destino']) {
				$this->Session->setFlash('La cuenta de origen no puede ser la misma que la cuenta de destino.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			// 2. Validar que el monto sea positivo
			if ($data['monto'] <= 0) {
				$this->Session->setFlash('El monto debe ser un valor positivo.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			// 3. Obtener el saldo actual de la cuenta de origen mediante una sumatoria
			$saldoOrigen = $this->Movimiento->find('first', array(
				'fields' => array('SUM(Movimiento.monto) as total_saldo'),
				'conditions' => array('Movimiento.cuenta_id' => $data['cuenta_origen'])
			));
			$saldoActualOrigen = $saldoOrigen[0]['total_saldo'] ?: 0; // Si no hay movimientos, el saldo es 0

			// 4. Validar que haya saldo suficiente
			if ($saldoActualOrigen < $data['monto']) {
				$this->Session->setFlash('La cuenta de origen no tiene saldo suficiente.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			// 5. Iniciar la transacción de la base de datos
			$dataSource = $this->Movimiento->getDataSource();
			$dataSource->begin();

			try {
				// 6. Crear los registros de movimiento (débito y crédito)
				$movimientoOrigen = array(
					'referencia' => $data['referencia'],
					'cuenta_id' => $data['cuenta_origen'],
					'monto' => $data['monto'], // Monto negativo para la salida
					'fecha_aplicacion' => $data['fecha_aplicacion'],
					'tipo' => 'Transferencia Salida',
					'fecha_registro'=>date('Y-m-d H:i:s'),
					'tipo_movimiento'=>2
				);

				$movimientoDestino = array(
					'referencia' => $data['referencia'],
					'cuenta_id' => $data['cuenta_destino'],
					'monto' => $data['monto'], // Monto positivo para la entrada
					'fecha_aplicacion' => $data['fecha_aplicacion'],
					'tipo' => 'Transferencia Entrada',
					'fecha_registro'=>date('Y-m-d H:i:s'),
					'tipo_movimiento'=>1
				);

				// 7. Guardar los movimientos
				$this->Movimiento->create();
				$this->Movimiento->save($movimientoOrigen);

				$this->Movimiento->create();
				$this->Movimiento->save($movimientoDestino);

				// 8. Si todo fue exitoso, confirmar la transacción
				$dataSource->commit();
				$this->Session->setFlash('Transferencia realizada con éxito.', 'default', array('class' => 'alert alert-success'));

			} catch (Exception $e) {
				// 9. Si algo falla, revertir la transacción y mostrar un error
				$dataSource->rollback();
				$this->Session->setFlash('Ha ocurrido un error al procesar la transferencia.', 'default', array('class' => 'alert alert-danger'));
			}

			return $this->redirect(array('action' => 'index','controller'=>'cuentas'));
		}
	}

	function verificar(){
		$movimiento = array(
			'id'=>$this->request->data['id'],
			'verificado'=>1
		);
		$mensaje = "";
		if($this->Movimiento->save($movimiento)){
			$mensaje = "El movimiento ha sido verificado exitosamente.";
		}else{
			$mensaje = "El movimiento no pudo ser verificado.";
		}
		header('Content-Type: application/json');
		echo json_encode($mensaje);
		exit();
	}

	function delete($id = null, $cuenta_id = null) {
		if($this->Movimiento->delete($id)){
			$this->Session->setFlash('El movimiento ha sido eliminado exitosamente.', 'default', array('class' => 'success_flash'));
		}else{
			$this->Session->setFlash('El movimiento no pudo ser eliminado.', 'default', array('class' => 'success_flash'));
		}
		return $this->redirect(array('controller' => 'cuentas', 'action' => 'view',$cuenta_id));
	}
}
