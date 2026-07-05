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
	array('inline'=>false));
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
<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Lista de Pagos Interjugadores
					</div>
					<div class="card-body p-t-50">
						<div class="">
							<div class="pull-sm-right">
								<div class="tools pull-sm-right"></div>
							</div>
						</div>
						<table id="sample_1" class="table-striped table-bordered table-hover table m-t-15" style="width:100%">
							<thead>
								<tr>
									<th>Fecha Solicitud</th>
									<th>Jugador Paga</th>
									<th>Jugador Cobra</th>
									<th>Monto</th>
									<th>Fecha Límite</th>
									<th>Fecha Aplicación</th>
									<th>Estatus</th>
									<th style="text-align: center">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<?php
									foreach ($solicitudes as $solicitud):
								?>
									<tr>
										<td><?= date("d/M/Y H:i:s",strtotime($solicitud['Interjugador']['solicitado']))?></td>
										<td><?= $solicitud['Remitente']['usuario']." - ".$solicitud['Remitente']['nombre']?></td>
										<td><?= $solicitud['Receptor']['usuario']." - ".$solicitud['Receptor']['nombre']?></td>
										<td><?= "$".number_format($solicitud['Interjugador']['cantidad'])?></td>
										<td><?= date("d/M/Y",strtotime($solicitud['Interjugador']['fecha_limite']))?></td>
										<?php
											$fecha_aplicacion = $solicitud['Interjugador']['fecha_aplicacion'];
											if ($fecha_aplicacion) {
												$sort_val = strtotime($fecha_aplicacion);
												$display = date("d/M/Y",strtotime($fecha_aplicacion));
											} else {
												$sort_val = 9999999999;
												$display = "-";
											}
										?>
										<td data-order="<?= $sort_val ?>"><?= $display ?></td>
										<td><?= $solicitud['Interjugador']['realizado'] ? "Realizado" : "Pendiente"?></td>
										<td style="text-align: center">
											<?= !$solicitud['Interjugador']['realizado'] ? $this->Html->link('<i class="fa fa-money fa-lg" style="margin-right: 5px;"></i>', 'javascript:void(0);', array('escape'=>false, 'class' => 'btn-ajax-modal', 'title'=>'Registrar Pago', 'data-url' => $this->Html->url(array('controller'=>'interjugadors','action'=>'registrar',$solicitud['Interjugador']['id'])))) : ""?>
											<?= !$solicitud['Interjugador']['realizado'] ? $this->Html->link('<i class="fa fa-edit fa-lg" style="margin-right: 5px;"></i>', 'javascript:void(0);', array('escape'=>false, 'class' => 'btn-ajax-modal', 'title'=>'Editar Movimiento', 'data-url' => $this->Html->url(array('controller'=>'interjugadors','action'=>'edit',$solicitud['Interjugador']['id'])))) : ""?>
											<?= !$solicitud['Interjugador']['realizado'] ? $this->Html->link('<i class="fa fa-trash fa-lg"></i>',array('controller'=>'interjugadors','action'=>'delete',$solicitud['Interjugador']['id']),array('escape'=>false,'title'=>'Eliminar Movimiento', 'confirm'=>'¿Deseas eliminar esta solicitud de pago?')) : ""?>
										</td>
									</tr>
								<?php endforeach;?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal for AJAX -->
<div class="modal fade" id="ajaxModal" tabindex="-1" role="dialog" aria-hidden="true">
</div>

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
	array('inline'=>false));
?>

<script>
	'use strict';
	$(document).ready(function() {
		TableAdvanced.init();
		$(".dataTables_scrollHeadInner .table").addClass("table-responsive");
		$("#sample_5_wrapper table").removeClass("table-responsive");
		$(".dataTables_wrapper .dt-buttons .btn").addClass('btn-secondary').removeClass('btn-default');
		$(".dataTables_wrapper").removeClass("form-inline");
		$('.fecha').datepicker({
			format: 'yyyy-mm-dd',
			todayHighlight: true,
			autoclose: true,
			orientation:"bottom"
		});

		$(document).on('click', '.add-row', function(e) {
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
			newRow.find('input').each(function() {
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
		$(document).on('click', '.remove-row', function(e) {
			e.preventDefault();

			let contador = document.getElementById('JugadorContador').value;
			document.getElementById('JugadorContador').value = Number(contador) - 1;

			// Obtener la fila a eliminar
			let rowToRemove = $(this).closest('.cuenta-row');

			// Eliminar la fila
			rowToRemove.remove();

			// Re-indexar los campos restantes
			$('#cuentas-container .cuenta-row').each(function(index) {
				$(this).find('input').each(function() {
					let oldName = $(this).attr('name');
					let newName = oldName.replace(/\[\d+\]/, '[' + index + ']');
					$(this).attr('name', newName);
				});
			});
		});

		// Modal AJAX logic
		$(document).on('click', '.btn-ajax-modal', function(e) {
			e.preventDefault();
			var url = $(this).data('url');
			$.ajax({
				url: url,
				type: 'GET',
				success: function(response) {
					$('#ajaxModal').html(response);
					$('#ajaxModal').modal('show');
				},
				error: function() {
					alert('Ocurrió un error al cargar el formulario.');
				}
			});
		});

	});
	var TableAdvanced = function() {
		// ===============table 1====================
		var initTable1 = function() {
			var table = $('#sample_1');
			/* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
			/* Set tabletools buttons and button container */
			table.DataTable({
				dom: "Bflr<'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
				order: [[5, 'desc']],
				buttons: [
					'copy', 'csv', 'print'
				],
				lengthMenu: [
					[100, 300, 500, -1], // Values for the dropdown: 10, 25, 50, All
					[100, 300, 500, "Todos"] // Display text for the dropdown
				],
				pageLength: 500
			});
			var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
			tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown

			// Calculate widths and dynamically inject CSS for sticky Jugador Paga & Jugador Cobra
			function setStickyColumns() {
				var w2 = $('#sample_1 th:nth-child(2)').outerWidth();
				
				var style = '<style id="dynamic-sticky">' +
				// Desactivar el sticky de la primera columna que viene heredado de custom.css solo para los TD, para que el TH pueda ser sticky en Y
				'#sample_1 tbody td:first-child { position: static !important; }' +
				'#sample_1 thead th:first-child { position: -webkit-sticky !important; position: sticky !important; top: 0 !important; z-index: 8 !important; background-color: #c61223 !important; color: white !important; background-clip: padding-box !important; }' +
				
				// Hacer sticky la columna 2 y 3 (ancladas a la izquierda una vez que la columna 1 se esconde)
				'#sample_1 th:nth-child(2), #sample_1 td:nth-child(2) { position: -webkit-sticky !important; position: sticky !important; left: 0 !important; z-index: 4 !important; background-color: #fff !important; background-clip: padding-box !important; }' +
				'#sample_1 th:nth-child(3), #sample_1 td:nth-child(3) { position: -webkit-sticky !important; position: sticky !important; left: '+w2+'px !important; z-index: 4 !important; background-color: #fff !important; background-clip: padding-box !important; }' +
				
				// Z-index y fondo rojo para los headers 2 y 3
				'#sample_1 thead th:nth-child(2), #sample_1 thead th:nth-child(3) { z-index: 9 !important; background-color: #c61223 !important; color: white !important; top: 0 !important; }' +
				'</style>';
				
				$('#dynamic-sticky').remove();
				$('head').append(style);
			}
			
			// Wait slightly for DataTables to finish rendering widths
			setTimeout(setStickyColumns, 500);
			$(window).on('resize', setStickyColumns);
		}
		// ===============table 1===============

		return {
			//main function to initiate the module
			init: function() {
				if (!jQuery().dataTable) {
					return;
				}
				initTable1();
			}
		};
	}();

</script>
