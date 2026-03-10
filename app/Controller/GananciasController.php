<?php
App::uses('DateUtility', 'Lib');
class GananciasController extends AppController
{
	public $name = 'Ganancias';

	public function convertirSemana($year = null, $week = null)
	{
		$dates = DateUtility::getWeekRangeDates((int)$week, (int)$year, 'd-m-Y');
		return ($dates['monday'] . " al " . $dates['sunday']);
	}

	function add()
	{
		if ($this->request->is('post')) {
			for ($i = 0; $i < $this->request->data['Ganancia']['contador']; $i++) {
				$ganancia = array(
					'jugador_id' => $this->request->data['Ganancia']['jugador_id_' . $i],
					'semana' => $this->request->data['Ganancia']['semana'],
					'anio' => $this->request->data['Ganancia']['anio'],
					'ganancia' => $this->request->data['Ganancia']['monto_' . $i],
					'ganancia_neta' => $this->request->data['Ganancia']['monto_dd_' . $i],
					'comisionista_id' => $this->request->data['Ganancia']['comisionista_id_' . $i],
					'comision' => $this->request->data['Ganancia']['comision_' . $i],
					'fecha' => date('Y-m-d')
				);
				$this->Ganancia->create();
				$this->Ganancia->save($ganancia);

			}
			$this->Session->setFlash('El movimiento ha sido registrado exitosamente.', 'default', array('class' => 'success'));
			return $this->redirect(array('controller' => 'jugadors', 'action' => 'ganancias_semanales'));
		}
	}

	public function transferencia()
	{
		if ($this->request->is('post')) {
			$data = $this->request->data['Ganancia'];

			if ($data['cuenta_origen'] === $data['cuenta_destino']) {
				$this->Session->setFlash('La cuenta de origen no puede ser la misma que la cuenta de destino.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			if ($data['monto'] <= 0) {
				$this->Session->setFlash('El monto debe ser un valor positivo.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			$saldoOrigen = $this->Ganancia->find('first', array(
				'fields' => array('SUM(Ganancia.monto) as total_saldo'),
				'conditions' => array('Ganancia.cuenta_id' => $data['cuenta_origen'])
			));
			$saldoActualOrigen = $saldoOrigen[0]['total_saldo'] ?: 0;

			if ($saldoActualOrigen < $data['monto']) {
				$this->Session->setFlash('La cuenta de origen no tiene saldo suficiente.', 'default', array('class' => 'alert alert-danger'));
				return $this->redirect(array('action' => 'index'));
			}

			$dataSource = $this->Ganancia->getDataSource();
			$dataSource->begin();

			try {
				$movimientoOrigen = array(
					'referencia' => $data['referencia'],
					'cuenta_id' => $data['cuenta_origen'],
					'monto' => $data['monto'],
					'fecha_aplicacion' => $data['fecha_aplicacion'],
					'tipo' => 'Transferencia Salida',
					'fecha_registro' => date('Y-m-d H:i:s'),
					'tipo_movimiento' => 2
				);

				$movimientoDestino = array(
					'referencia' => $data['referencia'],
					'cuenta_id' => $data['cuenta_destino'],
					'monto' => $data['monto'],
					'fecha_aplicacion' => $data['fecha_aplicacion'],
					'tipo' => 'Transferencia Entrada',
					'fecha_registro' => date('Y-m-d H:i:s'),
					'tipo_movimiento' => 1
				);

				$this->Ganancia->create();
				$this->Ganancia->save($movimientoOrigen);

				$this->Ganancia->create();
				$this->Ganancia->save($movimientoDestino);

				$dataSource->commit();
				$this->Session->setFlash('Transferencia realizada con éxito.', 'default', array('class' => 'alert alert-success'));

			}
			catch (Exception $e) {
				$dataSource->rollback();
				$this->Session->setFlash('Ha ocurrido un error al procesar la transferencia.', 'default', array('class' => 'alert alert-danger'));
			}

			return $this->redirect(array('action' => 'index', 'controller' => 'cuentas'));
		}
	}

	function verificar()
	{
		$movimiento = array(
			'id' => $this->request->data['id'],
			'verificado' => 1
		);
		$mensaje = "";
		if ($this->Ganancia->save($movimiento)) {
			$mensaje = "El movimiento ha sido verificado exitosamente.";
		}
		else {
			$mensaje = "El movimiento no pudo ser verificado.";
		}
		header('Content-Type: application/json');
		echo json_encode($mensaje);
		exit();
	}

	function delete($id = null, $cuenta_id = null)
	{
		if ($this->Ganancia->delete($id)) {
			$this->Session->setFlash('El movimiento ha sido eliminado exitosamente.', 'default', array('class' => 'success_flash'));
		}
		else {
			$this->Session->setFlash('El movimiento no pudo ser eliminado.', 'default', array('class' => 'success_flash'));
		}
		return $this->redirect(array('controller' => 'cuentas', 'action' => 'view', $cuenta_id));
	}

	function reporte_jugadores()
	{
		$this->set('titulo_seccion', 'Reporte de Semanas (Jugadores)');

		$conditions = array('Ganancia.jugador_id IS NOT NULL');
		$fecha_inicio = null;
		$fecha_fin = null;
		$selected_jugador = null;
		$mostrar_todos = false;

		if ($this->request->is('post') || !empty($this->request->data)) {
			if (!empty($this->request->data['fecha_inicio'])) {
				$fecha_inicio = $this->request->data['fecha_inicio'];
				$conditions['Ganancia.fecha >='] = $fecha_inicio;
			}
			if (!empty($this->request->data['fecha_fin'])) {
				$fecha_fin = $this->request->data['fecha_fin'];
				$conditions['Ganancia.fecha <='] = $fecha_fin;
			}
			if (!empty($this->request->data['Filtro']['jugador_id'])) {
				$selected_jugador = $this->request->data['Filtro']['jugador_id'];
				$conditions['Ganancia.jugador_id'] = $selected_jugador;
			}

			if (isset($this->request->data['Filtro']['mostrar_todos'])) {
				$mostrar_todos = ($this->request->data['Filtro']['mostrar_todos'] == '1');
			}
		}

		if (!$mostrar_todos) {
			$conditions['Jugador.estatus'] = 1;
		}

		$this->set(compact('fecha_inicio', 'fecha_fin', 'selected_jugador', 'mostrar_todos'));

		$ganancias = $this->Ganancia->find('all', array(
			'conditions' => $conditions,
			'contain' => array('Jugador'),
			'order' => array('Ganancia.anio' => 'ASC', 'Ganancia.semana' => 'ASC')
		));

		$this->Ganancia->recursive = 0;
		$semanas = $this->Ganancia->find(
			'all',
			array(
			'fields' => array(
				'DISTINCT (CONCAT(Ganancia.semana,"-",Ganancia.anio)) AS semana_alias',
				'Ganancia.semana', 'Ganancia.anio'
			),
			'conditions' => $conditions,
			'order' => array('Ganancia.anio' => 'ASC', 'Ganancia.semana' => 'ASC')
		)
		);

		$semanas_array = array();
		$semanas_periodos = array();
		foreach ($semanas as $semana) {
			array_push($semanas_array, $semana[0]['semana_alias']);
			array_push($semanas_periodos, $this->convertirSemana($semana['Ganancia']['anio'], $semana['Ganancia']['semana']));
		}
		$this->set('semanas', $semanas_array);
		$this->set('semanas_periodos', $semanas_periodos);

		$jugadores_temp = array();
		foreach ($ganancias as $item) {
			$jugador_id = $item['Jugador']['id'];
			$nombre = $item['Jugador']['usuario'];
			$saldo_inicial = $item['Jugador']['saldo_inicial'];
			$ganancia = $item['Ganancia']['ganancia_neta'];
			$id = $item['Ganancia']['id'];

			if (!isset($jugadores_temp[$jugador_id])) {
				$jugadores_temp[$jugador_id] = array(
					'nombre' => $nombre,
					'saldo_inicial' => $saldo_inicial,
					'semanas' => array(),
				);
			}

			$jugadores_temp[$jugador_id]['semanas'][$item['Ganancia']['semana'] . "-" . $item['Ganancia']['anio']] = $ganancia;
			$jugadores_temp[$jugador_id]['semanas'][$item['Ganancia']['semana'] . "-" . $item['Ganancia']['anio'] . "_id"] = $id;
		}

		$jugadores = array_values($jugadores_temp);
		$this->set('jugadores', $jugadores);

		$this->loadModel('Jugador');
		$players_conditions = array();
		if (!$mostrar_todos) {
			$players_conditions['Jugador.estatus'] = 1;
		}
		$players_list = $this->Jugador->find('list', array('conditions' => $players_conditions));
		$this->set('players_list', $players_list);
	}

	function reporte_comisionistas()
	{
		$this->set('titulo_seccion', 'Reporte de Semanas (Agencias)');
		$options = array(
			'fields' => array(
				'Ganancia.comisionista_id',
				'CONCAT(Ganancia.anio, "-", Ganancia.semana) AS semana_anio',
				'SUM(Ganancia.comision) AS total_comision',
				'Ganancia.semana', 'Ganancia.anio'
			),
			'group' => array(
				'Ganancia.comisionista_id',
				'Ganancia.semana',
				'Ganancia.anio'
			),
			'order' => array(
				'Ganancia.comisionista_id',
				'Ganancia.anio',
				'Ganancia.semana'
			)
		);
		$ganancias_raw = $this->Ganancia->find('all', $options);

		$tabla_pivoteada = [];
		$semanas_unicas = [];
		$totales_comisionista = [];
		$semanas_periodos = array();

		foreach ($ganancias_raw as $fila) {
			$id = $fila['Ganancia']['comisionista_id'];
			$semana_anio = $fila[0]['semana_anio'];
			$comision = (float)$fila[0]['total_comision'];

			if (!isset($tabla_pivoteada[$id])) {
				$tabla_pivoteada[$id] = ['comisionista_id' => $id];
				$totales_comisionista[$id] = 0;
			}

			$tabla_pivoteada[$id][$semana_anio] = $comision;
			$totales_comisionista[$id] += $comision;

			if (!in_array($semana_anio, $semanas_unicas)) {
				$semanas_unicas[] = $semana_anio;
				$semanas_periodos[$semana_anio] = $this->convertirSemana($fila['Ganancia']['anio'], $fila['Ganancia']['semana']);
			}
		}

		natsort($semanas_unicas);
		$semanas_unicas = array_values($semanas_unicas);

		$tabla_final = [];
		foreach ($tabla_pivoteada as $id => $datos_comisionista) {
			$fila_final = ['comisionista_id' => $id];

			foreach ($semanas_unicas as $semana_anio) {
				$fila_final[$semana_anio] = isset($datos_comisionista[$semana_anio]) ? $datos_comisionista[$semana_anio] : 0;
			}

			$fila_final['Total'] = $totales_comisionista[$id];
			$tabla_final[] = $fila_final;
		}

		$this->set(compact('tabla_final', 'semanas_unicas'));
		$this->set('semanas_periodos', $semanas_periodos);

		$this->loadModel('Comisionista');
		$this->set('comisionistas', $this->Comisionista->find('list'));
	}

	public function reporte_detalle($comisionita_id = null, $semana = null)
	{
		$parts = explode('-', $semana);
		$anio_raw = $parts[0];
		$semana_raw = $parts[1];

		$ganancias = $this->Ganancia->find(
			'all',
			array(
			'conditions' => array(
				'Ganancia.comisionista_id' => $comisionita_id,
				'Ganancia.semana' => $semana_raw,
				'Ganancia.anio' => $anio_raw
			)
		)
		);
		$this->set('ganancias', $ganancias);
		$this->set('periodo', $this->convertirSemana($anio_raw, $semana_raw));
		$this->set('titulo_seccion', 'Reporte de Semana ' . $semana);
	}

	public function getGanancia()
	{
		$ganancia = $this->Ganancia->find('first', array('conditions' => array('Ganancia.id' => $this->request->data['id'])));
		header('Content-Type: application/json');
		echo json_encode($ganancia);
		exit();
	}

	public function edit()
	{
		if ($this->request->is('post')) {
			if ($this->Ganancia->save($this->request->data)) {
				$this->Session->setFlash('Se ha realizado el cambio', 'default', array('class' => 'success'));
			}
			else {
				$this->Session->setFlash('Ha ocurrido un error al procesar el cambio.', 'default', array('class' => 'error'));
			}
			return $this->redirect(array('controller' => 'ganancias', 'action' => 'reporte_jugadores'));
		}
	}
}