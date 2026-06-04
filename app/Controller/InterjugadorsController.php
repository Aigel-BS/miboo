<?php
class InterjugadorsController extends AppController {
	public $name = 'Interjugadors';


	function index(){
		$this->set('titulo_seccion','Lista de Pagos Interjugadores');
		$this->set('solicitudes',$this->Interjugador->find('all', array(
			'order' => array(
				'Interjugador.realizado' => 'ASC',
				'Interjugador.fecha_aplicacion' => 'DESC',
				'Interjugador.solicitado' => 'DESC'
			)
		)));
	}

	function add(){
		if($this->request->is('post')){
			$this->request->data['Interjugador']['solicitado'] = date('Y-m-d H:i:s');
			$this->request->data['Interjugador']['realizado'] = 0;
			if($this->Interjugador->save($this->request->data)){
				$this->Session->setFlash('La Solicitud de pago interjugador ha sido registrada exitosamente.', 'default', array('class' => 'success_flash'));
				return $this->redirect(array('controller'=>'jugadors','action'=>'index'));
			}else{
				$this->Session->setFlash('La Solicitud de pago interjugador no pudo ser registrada.', 'default', array('class' => 'error_flash'));
			}
		}
	}

	function registrar($id = null){
		$solicitud = $this->Interjugador->find('first',array('recursive'=>2,'conditions'=>array('Interjugador.id'=>$id)));
		
		if ($this->request->is(array('post', 'put'))) {
			$fecha_aplicacion = $this->request->data['Interjugador']['fecha_aplicacion'];
			if (empty($fecha_aplicacion)) {
				$fecha_aplicacion = date('Y-m-d');
			}

			//Registrar "pago" del remitente
			$this->loadModel('Movimiento');
			$movimiento = array(
				'fecha_registro'=>date('Y-m-d H:i:s'),
				'fecha_aplicacion'=>$fecha_aplicacion,
				'cuenta_id'=>3,
				'jugador_id'=>$solicitud['Interjugador']['remitente_id'],
				'tipo_movimiento'=>1,
				'monto'=>$solicitud['Interjugador']['cantidad'],
				'referencia'=>'Pago Interjugador '.$solicitud['Interjugador']['id']. " de ".$solicitud['Remitente']['nombre']. " a ".$solicitud['Receptor']['nombre'],
				'verificado'=>0,
				'tipo_gasto'=>'Interjugador'
			);
			$this->Movimiento->create();
			$this->Movimiento->save($movimiento);

			//Registrar pago recibido al receptor
			$movimiento['jugador_id'] = $solicitud['Interjugador']['receptor_id'];
			$movimiento['tipo_movimiento'] = 2;
			unset($movimiento['id']);
			$this->Movimiento->create();
			$this->Movimiento->save($movimiento);

			$solicitud_update = array(
				'id'=>$solicitud['Interjugador']['id'],
				'realizado'=>1,
				'fecha_aplicacion'=>$fecha_aplicacion
			);
			$this->Interjugador->save($solicitud_update);
			$this->Session->setFlash('La Solicitud de pago interjugador ha sido confirmada.', 'default', array('class' => 'success_flash'));
			return $this->redirect(array('controller'=>'interjugadors','action'=>'index'));
		}

		if ($this->request->is('ajax')) {
			$this->layout = 'ajax';
		}
		
		$this->set('solicitud',$solicitud);
		$this->set('titulo_seccion','Confirmar Pago Interjugador');
	}

	function delete($id = null){
		if($this->Interjugador->delete($id)){
			$this->Session->setFlash('La Solicitud de pago interjugador ha sido eliminada.', 'default', array('class' => 'success_flash'));
			return $this->redirect(array('controller'=>'interjugadors','action'=>'index'));
		}else{
			$this->Session->setFlash('La Solicitud de pago interjugador no pudo ser eliminada.', 'default', array('class' => 'error_flash'));
		}


	}
}
