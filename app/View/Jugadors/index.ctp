<?= $this->Html->css(
	array(
		'/vendors/select2/css/select2.min',
		'/vendors/datatables/css/scroller.bootstrap.min',
		'/vendors/datatables/css/colReorder.bootstrap.min',
		'/vendors/datatables/css/dataTables.bootstrap.min',
		'pages/dataTables.bootstrap',
		'plugincss/responsive.dataTables.min',
		'pages/tables',
		'/vendors/datepicker/css/bootstrap-datepicker.min',

		'/vendors/bootstrap-switch/css/bootstrap-switch.min',
		'/vendors/switchery/css/switchery.min',
		'/vendors/radio_css/css/radiobox.min',
		'/vendors/checkbox_css/css/checkbox.min',
		'pages/radio_checkbox'
	),
	array('inline' => false)
);
?>
<style>
	/* Full Flexbox layout to strictly constrain the card to the screen height without relying on calc guessing */
	body,
	html {
		overflow-y: hidden !important;
		/* Prevent the entire page from scrolling */
	}

	.outer {
		height: calc(100vh - 60px);
		/* Subtract approximate top navbar height */
		display: flex;
		flex-direction: column;
	}

	.inner,
	.inner>.row,
	.inner>.row>.col {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	.inner>.row>.col>.card {
		/*flex: 1;
		display: flex;*/
		height: 80vh !important;
		flex-direction: column;
		min-height: 0;
		margin-bottom: 0 !important;
		/* Prevent margin from causing overflow */
	}

	.card-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	#sample_1_wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	#sample_1_wrapper>.row {
		flex-shrink: 0;
		/* Keep datatable controls (top and pagination) from shrinking */
	}

	#sample_1_wrapper .table-responsive {
		flex: 1;
		min-height: 0;
		overflow-y: scroll !important;
		height: auto !important;
		max-height: none !important;
		/* Override any max-height from custom.css */
	}
</style>
<?php
$formas_pago = array(
	'Efectivo' => 'Efectivo',
	'Transferencia' => 'Transferencia',
	'Mixto' => 'Mixto',
);
?>

<div class="modal fade" id="addJugador" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="tituloModalAddJugador" style="color:black">

				</h4>
			</div>
			<?= $this->Form->create('Jugador', array('url' => array('action' => 'add'), 'class' => 'form-horizontal')) ?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-sm-12">
						<h4>Datos Jugador</h4>
					</div>
					<?= $this->Form->input('id') ?>
					<?= $this->Form->input('nombre', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Jugador', )); ?>
					<?= $this->Form->input('usuario', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Usuario', )); ?>
					<?= $this->Form->input('registro', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Registro', )); ?>
					<?= $this->Form->input('password', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Contraseña', )); ?>
					<?= $this->Form->input('email', array('onchange' => 'javascript:validarDuplicado(this,1)', 'type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => array('text' => 'Email', 'id' => 'emailLabel'))); ?>
					<?= $this->Form->input('celular', array('onchange' => 'javascript:validarDuplicado(this,2)', 'type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => array('text' => 'Celular', 'id' => 'celularLabel'))); ?>
					<?= $this->Form->input('credito', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Crédito', )); ?>
					<?= $this->Form->input('maxima', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Máxima', 'min' => '0', )); ?>
					<?= $this->Form->input('minima', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Mínima', 'min' => '0', )); ?>
					<?= $this->Form->input('descuento_1', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Descuento Adicional Pronto Pago', 'max' => '100', 'min' => '0', )); ?>
					<?= $this->Form->input('descuento_2', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Descuento Pago Regular', 'max' => '100', 'min' => '0', )); ?>
					<?= $this->Form->input('forma_pago', array('type' => 'select', 'options' => $formas_pago, 'empty' => 'Seleccionar Forma de Pago', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Forma de Pago', )); ?>
					<?= $this->Form->input('corridas', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Corridas', )); ?>
					<?= $this->Form->input('saldo_inicial', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Balance Inicial', )); ?>
					<div class="col-sm-12 m-t-15">
						<h4>Datos Agencia</h4>
					</div>
					<?= $this->Form->input('comisionista_id', array('type' => 'select', 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Agencia', 'options' => $comisionistas, )); ?>
					<?= $this->Form->input('comision_comisionista', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'step' => 0.1, 'min' => 0, 'max' => 100, 'label' => 'Comisión', )); ?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('contador', array('value' => 1)) ?>
				<?= $this->Form->submit('Agregar Jugador', array('class' => 'btn btn-success pull-left', 'id' => 'botonSubmitJugador')) ?>
			</div>
			<?= $this->Form->end() ?>
		</div>
	</div>
</div>

<div class="modal fade" id="addPago" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel1" style="color:black">
					<i class="fa fa-plus"></i>
					Registrar Movimiento
				</h4>
			</div>
			<?= $this->Form->create('Movimiento', array('url' => array('action' => 'add', 'controller' => 'movimientos'), 'class' => 'form-horizontal')) ?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-12">
						<h4>Jugador: <span id='jugador_name'></span></h4>
					</div>
					<?= $this->Form->input('referencia', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Referencia', )); ?>
					<?= $this->Form->input('monto', array('type' => 'number', 'class' => 'form-control', 'step' => 0.01, 'div' => 'col-md-6', 'required' => true, 'label' => 'Monto', )); ?>
					<?= $this->Form->input('cuenta_id', array('type' => 'select', 'options' => $cuentas, 'empty' => 'Seleccionar Cuenta', 'required' => true, 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Cuenta', )); ?>
					<?= $this->Form->input('tipo_movimiento', array('type' => 'select', 'options' => array(1 => 'Ingreso', 2 => 'Egreso'), 'empty' => 'Seleccionar Tipo Movimiento', 'required' => true, 'class' => 'form-control', 'div' => 'col-md-6', 'label' => 'Ingreso / Egreso', )); ?>
					<?= $this->Form->input('fecha_aplicacion', array('type' => 'text', 'class' => 'form-control fecha', 'div' => 'col-md-6', 'label' => 'Fecha', 'value' => date('Y-m-d'))); ?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('url_redirect', array('value' => 1)) ?>
				<?= $this->Form->hidden('jugador_id', array('id' => 'jugador_id_edit')) ?>
				<?= $this->Form->submit('Registrar movimiento', array('class' => 'btn btn-success pull-left')) ?>
			</div>
			<?= $this->Form->end() ?>
		</div>
	</div>
</div>

<div class="modal fade" id="addInterjugador" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel1" style="color:black">
					<i class="fa fa-plus"></i>
					Solicitar pago Interjugador
				</h4>
			</div>
			<?= $this->Form->create('Interjugador', array('url' => array('action' => 'add', 'controller' => 'interjugadors'), 'class' => 'form-horizontal')) ?>
			<div class="modal-body">
				<div class="form-group row">
					<?= $this->Form->input('remitente_id', array('type' => 'select', 'readonly' => true, 'options' => $jugadores_list, 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Jugador que paga', )); ?>
					<?= $this->Form->input('receptor_id', array('type' => 'select', 'options' => $jugadores_list, 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Jugador que recibe pago', )); ?>
					<?= $this->Form->input('cantidad', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Monto', )); ?>
					<?= $this->Form->input('fecha_limite', array('type' => 'text', 'class' => 'form-control fecha', 'div' => 'col-md-6', 'label' => 'Fecha Límite', )); ?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->submit('Registrar Solicitud', array('class' => 'btn btn-success pull-left')) ?>
			</div>
			<?= $this->Form->end() ?>
		</div>
	</div>
</div>

<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Lista de Jugadores
						<div style="float: right">
							<?php
							if (isset($all)) {
								echo $this->Html->link('<i class="fa fa-users" data-pack="default" data-tags=""></i> Ver Solo Activos', array('controller' => 'jugadors', 'action' => 'index'), array('escape' => false, 'class' => 'btn btn-primary'));
							} else {
								echo $this->Html->link('<i class="fa fa-users" data-pack="default" data-tags=""></i> Ver Todos', array('controller' => 'jugadors', 'action' => 'index', 1), array('escape' => false, 'class' => 'btn btn-primary'));
							}

							?>

							<?php echo $this->Html->link('<i class="fa fa-plus" data-pack="default" data-tags=""></i> Agregar Jugador', 'javascript:addJugador()', array('escape' => false, 'class' => 'btn btn-success')); ?>
						</div>
					</div>
					<div class="card-body p-t-50">
						<div class="">
							<div class="pull-sm-right">
								<div class="tools pull-sm-right"></div>
							</div>
						</div>
						<table id="sample_1" class="table-striped table-bordered table-hover table m-t-15"
							style="width:100%">
							<thead>
								<tr>
									<th>Usuario</th>
									<th>Agencia</th>
									<th>Contraseña</th>
									<th>Jugador</th>
									<th>Balance</th>
									<th>Corridas</th>
									<th>Celular</th>
									<th>Estado</th>
									<th style="text-align: center">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<?php
								foreach ($jugadores as $jugador):
									?>
									<tr>
										<td><?= $this->Html->link($jugador['Jugador']['usuario'], array('action' => 'view', 'controller' => 'jugadors', $jugador['Jugador']['id'])) ?>
										</td>
										<td><?= $this->Html->link($jugador['Comisionista']['usuario'], array('action' => 'view', 'controller' => 'jugadors', $jugador['Jugador']['id'])) ?>
										</td>
										<td><?= $jugador['Jugador']['password'] ?></td>
										<td><?= $jugador['Jugador']['nombre'] ?></td>
										<td data-filter="<?= $jugador['Saldo'] < 0 ? "Ganador" : "Deudor" ?>"
											style="<?= $jugador['Saldo'] == 0 ? "color:black" : ($jugador['Saldo'] > 0 ? "color:red;font-weight:bold;" : "color:green;font-weight:bold;") ?>">
											$<?= number_format($jugador['Saldo'], 2) ?></td>
										<td><?= $jugador['Jugador']['corridas'] ?></td>
										<td><?= $jugador['Jugador']['celular'] ?></td>
										<td>
											<div class="form-group radio_basic_swithes_padbott">
												<input
													onchange="javascript:activarJugador('<?= $jugador['Jugador']['id'] ?>',this)"
													class="make-switch-radio" type="checkbox" data-on-color="success"
													data-off-color="danger" <?= $jugador['Jugador']['estatus'] ? "checked" : "" ?>>
											</div>
										</td>
										<td style="text-align: center">
											<?= $this->Html->link('<i class="fa fa-edit fa-lg"></i>', "javascript:editJugador(" . $jugador['Jugador']['id'] . ")", array('escape' => false, 'data-toggle' => 'tooltip', 'data-placement' => 'top', 'title' => 'Editar Jugador')) ?>
											<?= $this->Html->link('<i class="fa fa-money fa-lg"></i>', "javascript:registrarPago(" . $jugador['Jugador']['id'] . ", " . $jugador['Saldo'] . ")", array('escape' => false, 'data-toggle' => 'tooltip', 'data-placement' => 'top', 'title' => 'Registrar Pago / Depósito')) ?>
											<?= $this->Html->link('<i class="fa fa-exchange fa-lg"></i>', "javascript:registrarInterjugador(" . $jugador['Jugador']['id'] . ")", array('escape' => false, 'data-toggle' => 'tooltip', 'data-placement' => 'top', 'title' => 'Solicitar Pago a otro jugador')) ?>
										</td>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>

	function validarDuplicado(input, numero) {
		var dataString = 'str=' + input.value;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "jugadors", "action" => "getDuplicado"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				if (html == 1) {
					switch (numero) {
						case 1: //Email
							document.getElementById('emailLabel').style = "color:red";
							document.getElementById('emailLabel').innerHTML = "Email Duplicado";
							break;
						case 2:
							document.getElementById('celularLabel').style = "color:red";
							document.getElementById('celularLabel').innerHTML = "Celular Duplicado";
							break;
					}
				} else {
					switch (numero) {
						case 1: //Email
							document.getElementById('emailLabel').style = "";
							document.getElementById('emailLabel').innerHTML = "Email";
							break;
						case 2:
							document.getElementById('celularLabel').style = "";
							document.getElementById('celularLabel').innerHTML = "Celular";
							break;
					}
				}
			}
		});
	}

	function activarJugador(id, input) {
		var estado = input.checked ? 1 : 0
		var dataString = 'id=' + id + '&estado=' + estado;
		console.log(dataString);
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "jugadors", "action" => "activar"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				console.log(html);
			}
		});

	}

	function addJugador() {
		$('#addJugador').modal('show');
		document.getElementById('tituloModalAddJugador').innerHTML = "<i class='fa fa-plus'></i>Nuevo Jugador";
		document.getElementById('JugadorId').value = '';
		document.getElementById('botonSubmitJugador').value = "Guardar Jugador";
	}

	function registrarInterjugador(jugador_id) {
		$('#addInterjugador').modal('show');
		document.getElementById('InterjugadorRemitenteId').value = jugador_id;
	}

	function registrarPago(id_jugador, saldo) {
		$('#addPago').modal('show');
		document.getElementById('jugador_id_edit').value = id_jugador;

		var monto = Math.abs(saldo);
		document.getElementById('MovimientoMonto').value = monto.toFixed(2);

		if (saldo < 0) {
			document.getElementById('MovimientoTipoMovimiento').value = 1; // Ingreso
		} else if (saldo > 0) {
			document.getElementById('MovimientoTipoMovimiento').value = 2; // Egreso
		} else {
			document.getElementById('MovimientoTipoMovimiento').value = "";
		}

		var dataString = 'id=' + id_jugador;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "jugadors", "action" => "getJugador"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				document.getElementById('jugador_name').innerHTML = html.Jugador.nombre;
				document.getElementById('MovimientoReferencia').value = html.Jugador.usuario + " - " + html.Jugador.nombre;
			}
		});
	}

	function editJugador(id) {
		$('#addJugador').modal('show');

		document.getElementById('tituloModalAddJugador').innerHTML = "<i class='fa fa-edit'></i>Editar Jugador";
		document.getElementById('botonSubmitJugador').value = "Guardar Cambios";
		document.getElementById('JugadorId').value = id;
		var dataString = 'id=' + id;

		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "jugadors", "action" => "getJugador"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				document.getElementById('JugadorNombre').value = html.Jugador.nombre;
				document.getElementById('JugadorRegistro').value = html.Jugador.registro;
				document.getElementById('JugadorUsuario').value = html.Jugador.usuario;
				document.getElementById('JugadorPassword').value = html.Jugador.password;
				document.getElementById('JugadorEmail').value = html.Jugador.email;
				document.getElementById('JugadorCelular').value = html.Jugador.celular;
				document.getElementById('JugadorCredito').value = html.Jugador.credito;
				document.getElementById('JugadorMaxima').value = html.Jugador.maxima;
				document.getElementById('JugadorMinima').value = html.Jugador.minima;
				document.getElementById('JugadorDescuento1').value = html.Jugador.descuento_1;
				document.getElementById('JugadorDescuento2').value = html.Jugador.descuento_2;
				document.getElementById('JugadorFormaPago').value = html.Jugador.forma_pago;
				document.getElementById('JugadorCorridas').value = html.Jugador.corridas;
				document.getElementById('JugadorSaldoInicial').value = html.Jugador.saldo_inicial;
				document.getElementById('JugadorComisionistaId').value = html.Jugador.comisionista_id;
				document.getElementById('JugadorComisionComisionista').value = html.Jugador.comision_comisionista;
			}
		});
	}
</script>

<?php
echo $this->Html->script(
	array(
		'/vendors/select2/js/select2',
		'/vendors/datatables/js/jquery.dataTables.min',
		'pluginjs/dataTables.tableTools',
		'/vendors/datatables/js/dataTables.colReorder',
		'/vendors/datatables/js/dataTables.bootstrap.min',
		'/vendors/datatables/js/dataTables.buttons.min',
		'pluginjs/jquery.dataTables.min',
		'/vendors/datatables/js/dataTables.responsive.min',
		'/vendors/datatables/js/dataTables.rowReorder.min',
		'/vendors/datatables/js/buttons.colVis.min',
		'/vendors/datatables/js/buttons.html5.min',
		'/vendors/datatables/js/buttons.bootstrap.min',
		'/vendors/datatables/js/buttons.print.min',
		'/vendors/datatables/js/dataTables.scroller.min',
		'/vendors/moment/js/moment.min',
		'/vendors/datepicker/js/bootstrap-datepicker.min',

		'/vendors/bootstrap-switch/js/bootstrap-switch.min',
		'/vendors/switchery/js/switchery.min',
		'pages/radio_checkbox'
	),
	array('inline' => false)
);
?>

<script>
	'use strict';
	$(document).ready(function () {
		TableAdvanced.init();
		$(".dataTables_scrollHeadInner .table").addClass("table-responsive");
		$("#sample_5_wrapper table").removeClass("table-responsive");
		$(".dataTables_wrapper .dt-buttons .btn").addClass('btn-secondary').removeClass('btn-default');
		$(".dataTables_wrapper").removeClass("form-inline");
		$('.fecha').datepicker({
			format: 'yyyy-mm-dd',
			todayHighlight: true,
			autoclose: true,
			orientation: "bottom"
		});

		$(document).on('click', '.add-row', function (e) {
			e.preventDefault();

			//Agregar número a contador
			let contador = document.getElementById('JugadorContador').value;
			document.getElementById('JugadorContador').value = Number(contador) + 1;
			// Obtener la fila actual para clonarla
			let currentRow = $(this).closest('.cuenta-row');
			let newRow = currentRow.clone();

			// Obtener el índice de la nueva fila
			let newIndex = $('#cuentas-container .cuenta-row').length;

			// Actualizar los nombres de los campos en la nueva fila
			newRow.find('input').each(function () {
				let oldName = $(this).attr('name');
				let newName = oldName.replace(/\[\d+\]/, '[' + newIndex + ']');
				$(this).attr('name', newName);
				// Limpiar los valores de los nuevos campos
				$(this).val('');
			});

			// Reemplazar el botón 'agregar' de la fila anterior por un botón 'quitar'
			let previousAddBtn = currentRow.find('.add-row');
			if (previousAddBtn.length) {
				previousAddBtn.removeClass('add-row btn-success').addClass('remove-row btn-danger')
					.html('<i class="fa fa-minus"></i>');
			}

			// Agregar la nueva fila al contenedor
			$('#cuentas-container').append(newRow);
		});

		// Función para quitar una fila
		$(document).on('click', '.remove-row', function (e) {
			e.preventDefault();

			let contador = document.getElementById('JugadorContador').value;
			document.getElementById('JugadorContador').value = Number(contador) - 1;

			// Obtener la fila a eliminar
			let rowToRemove = $(this).closest('.cuenta-row');

			// Eliminar la fila
			rowToRemove.remove();

			// Re-indexar los campos restantes
			$('#cuentas-container .cuenta-row').each(function (index) {
				$(this).find('input').each(function () {
					let oldName = $(this).attr('name');
					let newName = oldName.replace(/\[\d+\]/, '[' + index + ']');
					$(this).attr('name', newName);
				});
			});
		});

	});
	var TableAdvanced = function () {
		// ===============table 1====================
		var initTable1 = function () {
			var table = $('#sample_1');
			/* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
			/* Set tabletools buttons and button container */
			table.DataTable({
				dom: "Bflr<'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
				buttons: [
					'copy', 'csv', 'print'
				],
				order: [[0, 'asc']],
				lengthMenu: [
					[100, 300, 500, -1], // Values for the dropdown: 10, 25, 50, All
					[100, 300, 500, "Todos"] // Display text for the dropdown
				],
				pageLength: 500


			});
			var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
			tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
		}
		// ===============table 1===============

		return {
			//main function to initiate the module
			init: function () {
				if (!jQuery().dataTable) {
					return;
				}
				initTable1();
			}
		};
	}();

</script>