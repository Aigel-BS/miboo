<?php
class ComisionistasController extends AppController {
	public $name = 'Comisionistas';

	function index(){
		$this->set('titulo_seccion','Lista de Agencias');
		$this->Comisionista->Behaviors->load('Containable');

		$comisionistas = $this->Comisionista->find(
			'all',
			array(
				'contain'=>array(
					'Jugadors'=>array(
						'conditions'=>array(
							'estatus'=>1
						)
					),
					'Movimientos',
					'Comisiones'
				)
			)
		);
		$this->set('comisionistas',$comisionistas);


		// Obtener los saldos iniciales agrupados por comisionista
		$this->loadModel('Jugador');
		$saldos_iniciales =  $this->Jugador->find(
			'all',
			array(
				'fields'=>array(
					'comisionista_id','SUM(saldo_inicial)'
				),
				'group'=>array(
					'comisionista_id'
				)
			)
		);
		$this->set('saldos_iniciales',$saldos_iniciales);

		//Obtener las ganancias totales de todos los jugadores
		$this->loadModel('Ganancia');
		$ganancias = $this->Ganancia->find(
			'all',
			array(
				'fields'=>array(
					'comisionista_id','SUM(ganancia_neta)'
				),
				'group'=>array(
					'comisionista_id'
				)
			)
		);
		$this->set('ganancias',$ganancias);

		$this->loadModel('Movimiento');
		$this->Movimiento->Behaviors->load('Containable');
		$movimientos = $this->Movimiento->query("
			SELECT
			movimientos.jugador_id,
			SUM(
				CASE
					WHEN tipo_movimiento = 1 THEN monto  -- Tipo 1 (Suma)
					WHEN tipo_movimiento = 2 THEN -monto -- Tipo 2 (Resta)
					ELSE 0 -- En caso de otro tipo desconocido
				END
			) AS saldo_neto_movimientos,
			jugadors.comisionista_id
		FROM
			movimientos,jugadors
		WHERE
			jugador_id IS NOT NULL AND jugador_id = jugadors.id
		GROUP BY
			jugador_id;
		");
		$this->set('movimientos',$movimientos);

		$movimientos_array = array();
		foreach($movimientos as $movimiento) {
			if(!isset($movimientos_array[$movimiento['jugadors']['comisionista_id']])){
				$movimientos_array[$movimiento['jugadors']['comisionista_id']] = 0;
			}
			$movimientos_array[$movimiento['jugadors']['comisionista_id']] += $movimiento[0]['saldo_neto_movimientos'];
		}
		$this->set('movimientos_arreglo',$movimientos_array);

		$movimientos_finales_array = array();
		foreach ($comisionistas as $comisionista) {
			$movimientos_finales_array[$comisionista['Comisionista']['id']] = array(
				'saldo_movimientos' => $movimientos_array[$comisionista['Comisionista']['id']]
			);
			foreach ($ganancias as $ganancia) {
				if($ganancia['Ganancia']['comisionista_id'] == $comisionista['Comisionista']['id']){
					$movimientos_finales_array[$comisionista['Comisionista']['id']]['ganancia'] = $ganancia[0]['SUM(ganancia_neta)'];
				}
			}
			foreach ($saldos_iniciales as $saldo_inicial) {
				if($saldo_inicial['Jugador']['comisionista_id'] == $comisionista['Comisionista']['id']){
					$movimientos_finales_array[$comisionista['Comisionista']['id']]['saldo_inicial'] = $saldo_inicial[0]['SUM(saldo_inicial)'];
				}
			}
		}
		$this->set('movimientos_finales',$movimientos_finales_array);

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
		$this->set('cuentas',$cuentas);

	}

	function add(){
		if($this->request->is('post')){
			if($this->Comisionista->save($this->request->data)) {
				/*$comisionista_id = $this->Comisionista->getInsertID();
				$this->loadModel('Cuenta');
				$contador = $this->request->data['Comisionista']['contador'];
				for ($i = 0; $i < $contador; $i++) {
					$nombre = $this->request->data['Comisionista']['banco_cuentas['.$i]['banco']." - ****".substr($this->request->data['Comisionista']['banco_cuentas['.$i]['cuenta_bancaria'],-4);
					$cuenta_obj = array(
						'comisionista_id' => $comisionista_id,
						'nombre' => $nombre,
						'banco' => $this->request->data['Comisionista']['banco_cuentas['.$i]['banco'],
						'cuenta_bancaria' => $this->request->data['Comisionista']['banco_cuentas['.$i]['cuenta_bancaria'],
						'spei'=>$this->request->data['Comisionista']['banco_cuentas['.$i]['spei'],
						'beneficiario'=>$this->request->data['Comisionista']['banco_cuentas['.$i]['beneficiario'],
					);
					$this->Cuenta->create();
					$this->Cuenta->save($cuenta_obj);
				}*/
				$this->Session->setFlash('La agencia ha sido registrado exitosamente.', 'default', array('class' => 'success_flash'));
				if (isset($this->request->data['Comisionista']['return'])){
					return $this->redirect(array('action' => 'view', $this->request->data['Comisionista']['id']));
				}
				return $this->redirect(array('action' => 'index','controller'=>'comisionistas'));
			}
		}
	}

	function view($id=null){
		$comisionista = $this->Comisionista->findById($id);
		$this->set('comisionista',$comisionista);
		$this->set('titulo_seccion','Detalle de Agencia '.$comisionista['Comisionista']['nombre']);

		// Obtener los saldos iniciales agrupados por comisionista
		$this->loadModel('Jugador');
		$saldos_iniciales =  $this->Jugador->find(
			'all',
			array(
				'fields'=>array(
					'comisionista_id','SUM(saldo_inicial)'
				),
				'group'=>array(
					'id'
				),
				'conditions'=>array(
					'comisionista_id' => $id
				)
			)
		);
		$this->set('saldos_iniciales',$saldos_iniciales);

		//Obtener las ganancias totales de todos los jugadores
		$this->loadModel('Ganancia');
		$ganancias = $this->Ganancia->find(
			'all',
			array(
				'fields'=>array(
					'jugador_id','SUM(ganancia_neta)'
				),
				'group'=>array(
					'jugador_id'
				),
				'conditions'=>array(
					'Ganancia.comisionista_id' => $id
				)
			)
		);
		$this->set('ganancias',$ganancias);

		$this->loadModel('Movimiento');
		$this->Movimiento->Behaviors->load('Containable');
		$movimientos = $this->Movimiento->query("
			SELECT
			movimientos.jugador_id,
			SUM(
				CASE
					WHEN tipo_movimiento = 1 THEN monto  -- Tipo 1 (Suma)
					WHEN tipo_movimiento = 2 THEN -monto -- Tipo 2 (Resta)
					ELSE 0 -- En caso de otro tipo desconocido
				END
			) AS saldo_neto_movimientos,
			jugadors.comisionista_id
		FROM
			movimientos,jugadors
		WHERE
			jugador_id IS NOT NULL AND jugador_id = jugadors.id
		AND
			jugadors.comisionista_id = ".$id."
		GROUP BY
			jugador_id;
		");
		$this->set('movimientos',$movimientos);

		$movimientos_array = array();
		foreach($movimientos as $movimiento) {
			if(!isset($movimientos_array[$movimiento['movimientos']['jugador_id']])){
				$movimientos_array[$movimiento['movimientos']['jugador_id']] = 0;
			}
			$movimientos_array[$movimiento['movimientos']['jugador_id']] += $movimiento[0]['saldo_neto_movimientos'];
		}
		$this->set('movimientos_arreglo',$movimientos_array);

		$movimientos_finales_array = array();
			foreach ($ganancias as $ganancia) {
				$movimientos_finales_array[$ganancia['Ganancia']['jugador_id']] = array(
					'saldo_movimientos' => $movimientos_array[$ganancia['Ganancia']['jugador_id']]
				);
				$movimientos_finales_array[$ganancia['Ganancia']['jugador_id']]['ganancia'] = $ganancia[0]['SUM(ganancia_neta)'];
			}
			foreach ($saldos_iniciales as $saldo_inicial) {
				$movimientos_finales_array[$saldo_inicial['Jugador']['id']]['saldo_inicial'] = $saldo_inicial[0]['SUM(saldo_inicial)'];
			}

		$this->set('movimientos_finales',$movimientos_finales_array);

	}

	function getComisionista(){
		$comisionista = $this->Comisionista->findById($this->request->data['id']);
		header('Content-Type: application/json');
		echo json_encode($comisionista);
		exit();
	}

	function activar(){
		$comisionista = array(
			'id'=>$this->request->data['id'],
			'estado'=>$this->request->data['estado']
		);
		$mensaje = "";
		if($this->Comisionista->save($comisionista)){
			$mensaje = "Comisionista Actualizado";
		}else{
			$mensaje = "Comisionista No Actualizado";
		}
		header('Content-Type: application/json');
		echo json_encode($mensaje);
		exit();
	}

	function liquidacion($id = null) {
		if (!$id) {
			return $this->redirect(array('action' => 'index'));
		}

		$comisionista = $this->Comisionista->findById($id);
		if (!$comisionista) {
			$this->Session->setFlash('Agencia no encontrada.', 'default', array('class' => 'danger_flash'));
			return $this->redirect(array('action' => 'index'));
		}
		$this->set('comisionista', $comisionista);
		$this->set('titulo_seccion', 'Liquidación Consolidada: ' . $comisionista['Comisionista']['nombre']);

		$this->loadModel('Jugador');
		$this->loadModel('Movimiento');
		$this->loadModel('Ganancia');
		$this->loadModel('Cuenta');

		if ($this->request->is('post') || $this->request->is('put')) {
			$jugadores_ids = isset($this->request->data['jugadores']) ? $this->request->data['jugadores'] : array();
			$reflejar_banco = !empty($this->request->data['Liquidacion']['reflejar_banco']) ? 1 : 0;
			$cuenta_id = !empty($this->request->data['Liquidacion']['cuenta_id']) ? $this->request->data['Liquidacion']['cuenta_id'] : null;
			$total_jugadores = 0;
			$total_comision_bruta = 0;

			$comision_actual = 0;

			// Para cada jugador seleccionado, generar un movimiento compensatorio
			foreach($jugadores_ids as $jugador_id) {
				$jugador_data = $this->Jugador->find('first', array(
					'conditions' => array('Jugador.id' => $jugador_id)
				));
				$saldo_inicial_jug = $jugador_data['Jugador']['saldo_inicial'];
				$pct_comision = $jugador_data['Jugador']['comision_comisionista'] ?: 0;

				$movs_jug = $this->Movimiento->query("
					SELECT SUM(
						CASE WHEN tipo_movimiento = 1 THEN monto
						WHEN tipo_movimiento = 2 THEN -monto ELSE 0 END
					) as total 
					FROM movimientos WHERE jugador_id = ".$jugador_id
				);
				$gans_jug = $this->Ganancia->query("
					SELECT SUM(ganancia_neta) as total FROM ganancias WHERE jugador_id = ".$jugador_id
				);
				
				$saldo_movs = isset($movs_jug[0][0]['total']) ? $movs_jug[0][0]['total'] : 0;
				$saldo_gans = isset($gans_jug[0][0]['total']) ? $gans_jug[0][0]['total'] : 0;
				$saldo_actual = $saldo_inicial_jug + $saldo_movs + $saldo_gans;
				$total_jugadores += $saldo_actual;
				
				$comision_query = $this->Ganancia->query("
					SELECT SUM(comision) as total FROM ganancias WHERE jugador_id = ".$jugador_id
				);
				$comision_jug = isset($comision_query[0][0]['total']) ? $comision_query[0][0]['total'] : 0;
				$comision_actual += $comision_jug;
				
				if (round($saldo_actual, 2) != 0) {
					$tipo_mov = ($saldo_actual < 0) ? 1 : 2; 
					$mov_compensatorio = array(
						'jugador_id' => $jugador_id,
						'comisionista_id' => $id,
						'monto' => abs($saldo_actual),
						'tipo_movimiento' => $tipo_mov,
						'fecha_aplicacion' => date('Y-m-d'),
						'referencia' => 'Liquidación Consolidada Agencia',
						'tipo_gasto' => 'Liquidación',
						'cuenta_id' => null
					);
					$this->Movimiento->create();
					$this->Movimiento->save($mov_compensatorio);
				}
			}
			
			$pagos_comision = $this->Movimiento->query("
				SELECT SUM(
					CASE WHEN tipo_movimiento = 1 THEN -monto
					WHEN tipo_movimiento = 2 THEN monto ELSE 0 END
				) as total 
				FROM movimientos 
				WHERE comisionista_id = ".$id." AND tipo_gasto = 'Comisión' AND (jugador_id IS NULL OR jugador_id = 0)
			");
			$total_pagos_comision = isset($pagos_comision[0][0]['total']) ? $pagos_comision[0][0]['total'] : 0;
			
			$comision_neta = $comision_actual - $total_pagos_comision;

			if (round($comision_neta, 2) != 0) {
				$tipo_mov = ($comision_neta > 0) ? 2 : 1; // Si le debemos, Egreso (2). Si debe, Ingreso (1)
				$mov_comision = array(
					'comisionista_id' => $id,
					'monto' => abs($comision_neta),
					'tipo_movimiento' => $tipo_mov,
					'fecha_aplicacion' => date('Y-m-d'),
					'referencia' => 'Cierre Liquidación Consolidada',
					'tipo_gasto' => 'Comisión',
					'cuenta_id' => null
				);
				$this->Movimiento->create();
				$this->Movimiento->save($mov_comision);
			}

			if ($reflejar_banco && $cuenta_id) {
				$posicion_book_jugadores = -$total_jugadores;
				$posicion_book_comision = -$comision_neta; 
				$balance_neto = $posicion_book_jugadores + $posicion_book_comision;
				
				if (round($balance_neto, 2) != 0) {
					$mov_banco = array(
						'comisionista_id' => $id,
						'monto' => abs($balance_neto),
						'tipo_movimiento' => ($balance_neto > 0) ? 1 : 2, // 1 Ingreso, 2 Egreso
						'fecha_aplicacion' => date('Y-m-d'),
						'referencia' => 'Cierre de Agencia ' . $comisionista['Comisionista']['usuario'] . ' - ' . date('d/m/Y'),
						'tipo_gasto' => 'Liquidación Agencia',
						'cuenta_id' => $cuenta_id
					);
					$this->Movimiento->create();
					$this->Movimiento->save($mov_banco);
				}
			}

			$this->Session->setFlash('Liquidación procesada correctamente. Se han actualizado los saldos.', 'default', array('class' => 'success_flash'));
			return $this->redirect(array('action' => 'view', $id));
		}

		$jugadores = $this->Jugador->find('all', array(
			'conditions' => array('comisionista_id' => $id, 'estatus' => 1)
		));

		$datos_jugadores = array();
		$total_comision = 0;
		foreach($jugadores as $jug) {
			$jug_id = $jug['Jugador']['id'];
			$movs_jug = $this->Movimiento->query("
				SELECT SUM(
					CASE WHEN tipo_movimiento = 1 THEN monto
					WHEN tipo_movimiento = 2 THEN -monto ELSE 0 END
				) as total 
				FROM movimientos WHERE jugador_id = ".$jug_id
			);
			$gans_jug = $this->Ganancia->query("
				SELECT SUM(ganancia_neta) as total FROM ganancias WHERE jugador_id = ".$jug_id
			);
			$saldo_movs = isset($movs_jug[0][0]['total']) ? $movs_jug[0][0]['total'] : 0;
			$saldo_gans = isset($gans_jug[0][0]['total']) ? $gans_jug[0][0]['total'] : 0;
			$saldo = $jug['Jugador']['saldo_inicial'] + $saldo_movs + $saldo_gans;
			
			$comision_query = $this->Ganancia->query("
				SELECT SUM(comision) as total FROM ganancias WHERE jugador_id = ".$jug_id
			);
			$comision_jug = isset($comision_query[0][0]['total']) ? $comision_query[0][0]['total'] : 0;
			
			$total_comision += $comision_jug;
			
			$datos_jugadores[] = array(
				'id' => $jug_id,
				'usuario' => $jug['Jugador']['usuario'],
				'nombre' => $jug['Jugador']['nombre'],
				'saldo' => $saldo,
				'comision' => $comision_jug
			);
		}

		$pagos_comision = $this->Movimiento->query("
			SELECT SUM(
				CASE WHEN tipo_movimiento = 1 THEN -monto
				WHEN tipo_movimiento = 2 THEN monto ELSE 0 END
			) as total 
			FROM movimientos 
			WHERE comisionista_id = ".$id." AND tipo_gasto = 'Comisión' AND (jugador_id IS NULL OR jugador_id = 0)
		");
		$total_pagos_comision = isset($pagos_comision[0][0]['total']) ? $pagos_comision[0][0]['total'] : 0;

		$cuentas = $this->Cuenta->find('list', array(
			'conditions' => array('Cuenta.jugador_id IS NULL', 'Cuenta.comisionista_id IS NULL', 'Cuenta.estado' => 1)
		));

		$this->set('jugadores_agencia', $datos_jugadores);
		$this->set('total_comision', $total_comision);
		$this->set('total_pagos_comision', $total_pagos_comision);
		$this->set('comision_neta', $total_comision - $total_pagos_comision);
		$this->set('cuentas', $cuentas);
	}
}
