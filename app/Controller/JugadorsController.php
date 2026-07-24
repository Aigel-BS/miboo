<?php
class JugadorsController extends AppController {
	public $name = 'Jugadors';

	function index($all = null) {
		$this->set('titulo_seccion','Lista de Jugadores');

		$this->loadModel('Comisionista');
		$comisionistas = $this->Comisionista->find('list');
		if (isset($all)){
			$jugadores = $this->Jugador->find('all');
			$this->set('all', $all);
		}else{
			$jugadores = $this->Jugador->find('all',array('conditions'=>array('Jugador.estatus'=>1)));
		}
		$jugadores_raw = $this->Jugador->find('all',array('conditions'=>array('Jugador.estatus'),'fields'=>array('id','nombre','usuario')));
		$jugadores_list = array();
		foreach ($jugadores_raw as $jugador){
			$jugadores_list[$jugador['Jugador']['id']] = $jugador['Jugador']['usuario']."-".$jugador['Jugador']['nombre'];
		}
		$i=0;
		foreach ($jugadores as $jugador) {
			$saldo = $jugador['Jugador']['saldo_inicial'];
			foreach ($jugador['Movimientos'] as $movimiento) {
				switch ($movimiento['tipo_movimiento']) {
					case 1: //Depósito, se suma
						$saldo += $movimiento['monto'];
						break;
					case 2:
						$saldo -= $movimiento['monto'];
						break;
				}

			}
			foreach ($jugador['Ganancias'] as $ganancia) {
				$saldo += $ganancia['ganancia_neta'];
			}
			$jugadores[$i]['Saldo'] = $saldo;
			$i++;
		}

		$this->loadModel('Cuenta');
		$cuentas = $this->Cuenta->find(
			'list',
			array(
				'conditions'=>array(
					'Cuenta.jugador_id IS NULL',
					'Cuenta.comisionista_id IS NULL',
					'Cuenta.estado'=>1
				)
			)
		);


		$this->set('comisionistas',$comisionistas);
		$this->set('jugadores',$jugadores);
		$this->set('jugadores_list',$jugadores_list);
		$this->set('cuentas',$cuentas);
	}

	function ganancias_semanales(){
		$this->set('titulo_seccion','Lista de Jugadores');
		$this->Jugador->Behaviors->load('Containable');
		$jugadores = $this->Jugador->find(
			'all',
			array(
				'conditions'=>array(
					'Jugador.estatus'=>1
				),
				'order'=> array('Comisionista.usuario'=>'ASC','Jugador.usuario'=>'ASC')
			)
		);
		$i=0;
		foreach ($jugadores as $jugador) {
			$saldo = $jugador['Jugador']['saldo_inicial'];
			foreach ($jugador['Movimientos'] as $movimiento) {
				switch ($movimiento['tipo_movimiento']) {
					case 1: //Depósito, se suma
						$saldo += $movimiento['monto'];
						break;
					case 2:
						$saldo -= $movimiento['monto'];
						break;
				}

			}
			foreach ($jugador['Ganancias'] as $ganancia) {
				$saldo += $ganancia['ganancia_neta'];
			}
			$jugadores[$i]['Saldo'] = $saldo;
			$i++;
		}
		
		$semana_actual = date("W") - 1;
		$anio_actual = date("Y");
		$this->loadModel('Ganancia');
		$conteo_ganancias = $this->Ganancia->find('count', array(
			'conditions' => array(
				'Ganancia.semana' => $semana_actual,
				'Ganancia.anio' => $anio_actual
			)
		));
		
		$this->set('ya_cargado', $conteo_ganancias > 0);
		$this->set('jugadores',$jugadores);
	}

	function add(){
		if($this->request->is('post')){
			if($this->Jugador->save($this->request->data)) {
				//$jugador_id = $this->Jugador->getInsertID();
				//$this->loadModel('Cuenta');
				/*if (isset($this->request->data['Jugador']['contador'])){
					$contador = $this->request->data['Jugador']['contador'];
					for ($i = 0; $i < $contador; $i++) {
						$nombre = $this->request->data['Jugador']['banco_cuentas['.$i]['banco']." - ****".substr($this->request->data['Jugador']['banco_cuentas['.$i]['cuenta_bancaria'],-4);
						$cuenta_obj = array(
							'jugador_id' => $jugador_id,
							'nombre' => $nombre,
							'banco' => $this->request->data['Jugador']['banco_cuentas['.$i]['banco'],
							'cuenta_bancaria' => $this->request->data['Jugador']['banco_cuentas['.$i]['cuenta_bancaria'],
							'spei'=>$this->request->data['Jugador']['banco_cuentas['.$i]['spei'],
							'beneficiario'=>$this->request->data['Jugador']['banco_cuentas['.$i]['beneficiario'],
						);
						$this->Cuenta->create();
						$this->Cuenta->save($cuenta_obj);
					}
				}*/
				$this->Session->setFlash('El Jugador ha sido registrado exitosamente.', 'default', array('class' => 'success_flash'));
				if (isset($this->request->data['Jugador']['return'])){
					return $this->redirect(array('action' => 'view', $this->request->data['Jugador']['id']));
				}
				return $this->redirect(array('action' => 'index','controller'=>'jugadors'));
			}
		}
	}

	function getJugador(){
		$jugador = $this->Jugador->findById($this->request->data['id']);
		header('Content-Type: application/json');
		echo json_encode($jugador);
		exit();
	}

	function activar(){
		$jugador = array(
			'id'=>$this->request->data['id'],
			'estatus'=>$this->request->data['estado']
		);
		$mensaje = "";
		if($this->Jugador->save($jugador)){
			$mensaje = "Jugador Actualizado";
		}else{
			$mensaje = "Jugador No Actualizado";
		}
		header('Content-Type: application/json');
		echo json_encode($mensaje);
		exit();
	}

	function view($id=null){
		$jugador = $this->Jugador->findById($id);
		$this->set('jugador',$jugador);
		$this->loadModel('Comisionista');
		$comisionistas = $this->Comisionista->find('list');
		$this->set('comisionistas',$comisionistas);
		$this->set('titulo_seccion',"Jugador: ".$jugador['Jugador']['nombre']);
		
		$saldo_acumulado = $jugador['Jugador']['saldo_inicial'];

		$cond_ganancias = array('Ganancia.jugador_id' => $id);
		$cond_movimientos = array('Movimiento.jugador_id' => $id);

		$this->loadModel('Ganancia');
		$this->loadModel('Movimiento');

		$f_inicio = null;
		$f_fin = null;
		if (!empty($this->request->query['fecha_inicio']) && !empty($this->request->query['fecha_fin'])) {
			$f_inicio = date('Y-m-d', strtotime($this->request->query['fecha_inicio']));
			$f_fin = date('Y-m-d', strtotime($this->request->query['fecha_fin']));
			
			// Calcular saldo acumulado previo a la fecha de inicio
			$ganancias_previas = $this->Ganancia->find('all', array(
				'conditions' => array('Ganancia.jugador_id' => $id, 'Ganancia.fecha <' => $f_inicio),
				'fields' => array('SUM(Ganancia.ganancia_neta) as total')
			));
			$mov_ingresos_previos = $this->Movimiento->find('all', array(
				'conditions' => array('Movimiento.jugador_id' => $id, 'Movimiento.fecha_aplicacion <' => $f_inicio, 'Movimiento.tipo_movimiento' => 1),
				'fields' => array('SUM(Movimiento.monto) as total')
			));
			$mov_egresos_previos = $this->Movimiento->find('all', array(
				'conditions' => array('Movimiento.jugador_id' => $id, 'Movimiento.fecha_aplicacion <' => $f_inicio, 'Movimiento.tipo_movimiento' => 2),
				'fields' => array('SUM(Movimiento.monto) as total')
			));
			
			$saldo_acumulado += isset($ganancias_previas[0][0]['total']) ? $ganancias_previas[0][0]['total'] : 0;
			$saldo_acumulado += isset($mov_ingresos_previos[0][0]['total']) ? $mov_ingresos_previos[0][0]['total'] : 0;
			$saldo_acumulado -= isset($mov_egresos_previos[0][0]['total']) ? $mov_egresos_previos[0][0]['total'] : 0;
			
			// Aplicar filtros para el desglose actual
			$cond_ganancias['Ganancia.fecha >='] = $f_inicio;
			$cond_ganancias['Ganancia.fecha <='] = $f_fin . ' 23:59:59';
			$cond_movimientos['Movimiento.fecha_aplicacion >='] = $f_inicio;
			$cond_movimientos['Movimiento.fecha_aplicacion <='] = $f_fin . ' 23:59:59';
		}

		$ganancias = $this->Ganancia->find('all', array('conditions' => $cond_ganancias));
		$movimientos = $this->Movimiento->find('all', array('conditions' => $cond_movimientos));

		$desglose_semanal = array();

		// Agrupar ganancias
		foreach ($ganancias as $g) {
			$g = $g['Ganancia'];
			$key = $g['anio'] . '-' . str_pad($g['semana'], 2, '0', STR_PAD_LEFT);
			if (!isset($desglose_semanal[$key])) {
				$desglose_semanal[$key] = array('semana' => $g['semana'], 'anio' => $g['anio'], 'ganancia_neta' => 0, 'depositos' => 0, 'retiros' => 0, 'saldo_neto' => 0);
			}
			$desglose_semanal[$key]['ganancia_neta'] += $g['ganancia_neta'];
		}

		// Agrupar movimientos
		foreach ($movimientos as $m) {
			$m = $m['Movimiento'];
			$timestamp = strtotime($m['fecha_aplicacion']);
			$semana = date('W', $timestamp);
			$anio = date('o', $timestamp); // ISO-8601 year
			$key = $anio . '-' . $semana;
			if (!isset($desglose_semanal[$key])) {
				$desglose_semanal[$key] = array('semana' => $semana, 'anio' => $anio, 'ganancia_neta' => 0, 'depositos' => 0, 'retiros' => 0, 'saldo_neto' => 0);
			}
			if ($m['tipo_movimiento'] == 1) {
				$desglose_semanal[$key]['depositos'] += $m['monto'];
			} elseif ($m['tipo_movimiento'] == 2) {
				$desglose_semanal[$key]['retiros'] += $m['monto'];
			}
		}

		ksort($desglose_semanal);

		$saldo_total = $saldo_acumulado;
		foreach ($desglose_semanal as $key => &$data) {
			$data['saldo_neto'] = $data['ganancia_neta'] + $data['depositos'] - $data['retiros'];
			$saldo_total += $data['saldo_neto'];
			$data['saldo_acumulado'] = $saldo_total;
		}

		$this->set('desglose_semanal', $desglose_semanal);
		$this->set('ganancias_list', $ganancias);
		$this->set('saldo_total', $saldo_total);
		$this->set('f_inicio', $f_inicio);
		$this->set('f_fin', $f_fin);
	}

	function getDuplicado(){
		$valor = $this->request->data['str'];
		$mensaje = 0;
		$duplicados = $this->Jugador->find('count',array('conditions'=>array('OR'=>array('Jugador.celular'=>$valor, 'Jugador.email'=>$valor))));
		if($duplicados > 0){
			$mensaje = 1;
		}
		header('Content-Type: application/json');
		echo json_encode($mensaje);
		exit();
	}


}
