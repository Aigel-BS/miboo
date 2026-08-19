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
	),
	array('inline' => false)
);
?>
<?php
$formas_pago = array(
	'Efectivo' => 'Efectivo',
	'Transferencia' => 'Transferencia',
	'Mixto' => 'Mixto',
);

$tipo_gasto = array(
	'Gasto',
	'Sueldo',
	'OR'
);
?>

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
						<h4>Cuenta: <?= $cuenta['Cuenta']['nombre'] ?></h4>
					</div>
					<?= $this->Form->input('referencia', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-8', 'required' => true, 'label' => 'Referencia', )); ?>
					<?= $this->Form->input('tipo_gasto', array('type' => 'select', 'options' => $tipo_gasto, 'class' => 'form-control', 'div' => 'col-md-4', 'required' => true, 'label' => 'Tipo de Gasto', )); ?>
					<?= $this->Form->input('monto', array('type' => 'number', 'step' => 0.01, 'class' => 'form-control', 'div' => 'col-md-4', 'required' => true, 'label' => 'Monto', )); ?>
					<?= $this->Form->input('tipo_movimiento', array('type' => 'select', 'options' => array(1 => 'Ingreso', 2 => 'Egreso'), 'empty' => 'Seleccionar Tipo Movimiento', 'required' => true, 'class' => 'form-control', 'div' => 'col-md-4', 'label' => 'Ingreso / Egreso', )); ?>
					<?= $this->Form->input('fecha_aplicacion', array('type' => 'text', 'class' => 'form-control fecha', 'div' => 'col-md-4', 'label' => 'Fecha', )); ?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('url_redirect', array('value' => 2)) ?>
				<?= $this->Form->hidden('cuenta_id', array('value' => $cuenta['Cuenta']['id'])) ?>
				<?= $this->Form->submit('Registrar movimiento', array('class' => 'btn btn-success pull-left')) ?>
			</div>
			<?= $this->Form->end() ?>
		</div>
	</div>
</div>

<div class="modal fade" id="editPago" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabelEdit" style="color:black">
					<i class="fa fa-pencil"></i>
					Editar Movimiento
				</h4>
			</div>
			<?= $this->Form->create('Movimiento', array('url' => array('action' => 'edit', 'controller' => 'movimientos'), 'class' => 'form-horizontal', 'id' => 'formEditPago')) ?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-12">
						<h4>Cuenta: <?= $cuenta['Cuenta']['nombre'] ?></h4>
					</div>
					<?= $this->Form->input('referencia', array('type' => 'text', 'class' => 'form-control', 'div' => 'col-md-8', 'required' => true, 'label' => 'Referencia', 'id' => 'edit_referencia')); ?>
					<?= $this->Form->input('tipo_gasto', array('type' => 'select', 'options' => $tipo_gasto, 'class' => 'form-control', 'div' => 'col-md-4', 'required' => true, 'label' => 'Tipo de Gasto', 'id' => 'edit_tipo_gasto')); ?>
					<?= $this->Form->input('monto', array('type' => 'number', 'step' => 0.01, 'class' => 'form-control', 'div' => 'col-md-4', 'required' => true, 'label' => 'Monto', 'id' => 'edit_monto')); ?>
					<?= $this->Form->input('tipo_movimiento', array('type' => 'select', 'options' => array(1 => 'Ingreso', 2 => 'Egreso'), 'empty' => 'Seleccionar Tipo Movimiento', 'required' => true, 'class' => 'form-control', 'div' => 'col-md-4', 'label' => 'Ingreso / Egreso', 'id' => 'edit_tipo_movimiento')); ?>
					<?= $this->Form->input('fecha_aplicacion', array('type' => 'text', 'class' => 'form-control fecha', 'div' => 'col-md-4', 'label' => 'Fecha', 'id' => 'edit_fecha_aplicacion')); ?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('id', array('id' => 'edit_id')) ?>
				<?= $this->Form->hidden('url_redirect', array('value' => 2)) ?>
				<?= $this->Form->hidden('cuenta_id', array('value' => $cuenta['Cuenta']['id'])) ?>
				<?= $this->Form->submit('Guardar Cambios', array('class' => 'btn btn-success pull-left')) ?>
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
						Lista de Movimientos
						<div style="float: right">
							<?php echo $this->Html->link('<i class="fa fa-plus" data-pack="default" data-tags=""></i> Agregar Movimiento', '#', array('escape' => false, 'data-target' => '#addPago', 'data-toggle' => 'modal', 'class' => 'btn btn-success')); ?>
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
									<th>Referencia</th>
									<th>Fecha Aplicación</th>
									<th>Ingreso</th>
									<th>Egreso</th>
									<th>Balance</th>
									<th>Editar</th>
									<th>Verificar</th>
									<th>Eliminar</th>
								</tr>
							</thead>
							<tbody>
								<?php
								// --- MODIFICACIÓN CLAVE DEL CÓDIGO PHP ---
								
								// 1. INVERTIR EL ORDEN DEL ARREGLO
								// Esto asegura que el primer elemento sea el movimiento más nuevo.
								$movimientos_inversos = array_reverse($cuenta['Movimientos']);

								// 2. CALCULAR SALDO INICIAL
								// Si recorremos del más nuevo al más viejo, necesitamos calcular el saldo actual
								// de la cuenta antes de empezar el bucle.
								// Para obtener el saldo final, simplemente lo calculamos con un bucle temporal:
								$saldo_actual = 0;
								foreach ($cuenta['Movimientos'] as $mov_temp) {
									$saldo_actual += ($mov_temp['tipo_movimiento'] == 1 ? $mov_temp['monto'] : ($mov_temp['monto'] * -1));
								}
								// Ahora $saldo_actual tiene el saldo total de la cuenta.
								$saldo = $saldo_actual;

								// 3. RECORRER EN ORDEN INVERSO (del más nuevo al más viejo)
								foreach ($movimientos_inversos as $movimiento):
									// Para mostrar el saldo acumulado *antes* de este movimiento,
									// calculamos el saldo final y luego restamos/sumamos este movimiento.
								
									// El saldo que se muestra es el saldo ACTUAL de la cuenta *antes* de este movimiento.
									// En este flujo, $saldo es el saldo acumulado hasta el momento del movimiento
									// inmediatamente anterior.
									?>
									<tr>
										<td><?= $movimiento['referencia'] ?></td>
										<td data-sort="<?= date("ymd", strtotime($movimiento['fecha_aplicacion'])) ?>">
											<?= $movimiento['fecha_aplicacion'] ?>
										</td>
										<td><?= $movimiento['tipo_movimiento'] == 1 ? "$" . number_format($movimiento['monto'], 2) : "" ?>
										</td>
										<td><?= $movimiento['tipo_movimiento'] == 2 ? "$" . number_format($movimiento['monto'], 2) : "" ?>
										</td>
										<td>$<?= number_format($saldo, 2) ?></td>

										<?php
										// Actualizamos el saldo acumulado *después* de mostrarlo,
										// de esta forma $saldo para la siguiente fila será el saldo anterior.
										$saldo = $saldo - ($movimiento['tipo_movimiento'] == 1 ? $movimiento['monto'] : ($movimiento['monto'] * -1));
										?>

										<td style="text-align: center">
											<a href="javascript:void(0);"
												onclick="editarMovimiento(<?= $movimiento['id'] ?>, '<?= addslashes($movimiento['referencia']) ?>', '<?= $movimiento['tipo_gasto'] ?>', <?= $movimiento['monto'] ?>, <?= $movimiento['tipo_movimiento'] ?>, '<?= $movimiento['fecha_aplicacion'] ?>')"
												class="btn btn-sm btn-primary">
												<i class="fa fa-pencil"></i>
											</a>
										</td>
										<td style="text-align: center" id="link_<?= $movimiento['id'] ?>">
											<?= ($movimiento['verificado']) ? "<i class='fa fa-check'></i>" : $this->Html->link('<i class="fa fa-check-circle-o"></i>', 'javascript:verificarMovimiento(' . $movimiento['id'] . ')', array('escape' => false)) ?>
										</td>
										<td style="text-align: center">
											<?= $this->Html->link('<i class="fa fa-trash"></i>', array('action' => 'delete', 'controller' => 'movimientos', $movimiento['id'], $movimiento['cuenta_id']), array('confirm' => '¿Deseas eliminar este movimiento?', 'escape' => false)) ?>
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
	function registrarPago() {
		$('#addPago').modal('show');
	}

	function editarMovimiento(id, referencia, tipoGasto, monto, tipoMovimiento, fecha) {
		$('#edit_id').val(id);
		$('#edit_referencia').val(referencia);
		$('#edit_tipo_gasto').val(tipoGasto).trigger('change');
		$('#edit_monto').val(monto);
		$('#edit_tipo_movimiento').val(tipoMovimiento).trigger('change');
		$('#edit_fecha_aplicacion').val(fecha);
		$('#editPago').modal('show');
	}

	function verificarMovimiento(id) {
		var dataString = 'id=' + id;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "movimientos", "action" => "verificar"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				document.getElementById('link_' + id).innerHTML = "<i class='fa fa-check'></i>";
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

	});
	var TableAdvanced = function () {
		// ===============table 1====================
		var initTable1 = function () {
			var table = $('#sample_1');

			table.DataTable({
				dom: "Bflr<'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
				buttons: [
					'copy', 'csv', 'print'
				],
				// CAMBIO AQUÍ: Ordenar por la columna de fecha (2) en DESCENDENTE
				order: [[1, "desc"]],
				lengthMenu: [
					[100, 300, 500, -1], // Values for the dropdown: 10, 25, 50, All
					[100, 300, 500, "Todos"] // Display text for the dropdown
				],
				pageLength: 500,
				ordering: false
			});
			var tableWrapper = $('#sample_1_wrapper');
			tableWrapper.find('.dataTables_length select').select2();
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