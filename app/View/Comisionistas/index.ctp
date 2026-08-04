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


$formas_pago = array(
	'Efectivo' => 'Efectivo',
	'Transferencia' => 'Transferencia',
	'Mixto' => 'Mixto',
);

?>

<style>
	.hide {
		display: none;
	}
</style>

<div class="modal fade" id="addJugador" tabindex="-1" role="dialog" aria-hidden="true" >
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel1" style="color:black">
					<i class="fa fa-plus"></i>
					Nueva Agencia
				</h4>
			</div>
			<?= $this->Form->create('Comisionista',array('url'=>array('action'=>'add'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-sm-12 m-t-15"><h4>Datos Agencia</h4></div>
					<?= $this->Form->input('nombre',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Agencia',));?>
					<?= $this->Form->input('usuario',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Usuario',));?>
					<?= $this->Form->input('password',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Contraseña',));?>
					<?= $this->Form->input('celular',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Celular',));?>
					<?= $this->Form->input('esquema',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Esquema',));?>
					<?= $this->Form->input('forma_pago',array('type'=>'select','options'=>$formas_pago,'class'=>'form-control','div'=>'col-md-6','label'=>'Forma de Pago',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('contador',array('value'=>1))?>
				<?= $this->Form->submit('Agregar Agencia',array('class'=>'btn btn-success pull-left'))?>
			</div>
			<?= $this->Form->end()?>
		</div>
	</div>
</div>

<div class="modal fade" id="editComisionista" tabindex="-1" role="dialog" aria-hidden="true" >
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" style="color:black">
					Modificar Información
				</h4>
			</div>
			<?= $this->Form->create('Comisionista',array('url'=>array('action'=>'add'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-sm-12"><h4>Datos Agencia</h4></div>
					<?= $this->Form->input('id',array('id'=>'edit_id'))?>
					<?= $this->Form->input('nombre',array('id'=>'edit_nombre','type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Agencia',));?>
					<?= $this->Form->input('usuario',array('id'=>'edit_usuario','type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Usuario',));?>
					<?= $this->Form->input('password',array('id'=>'edit_password','type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Contraseña',));?>
					<?= $this->Form->input('celular',array('id'=>'edit_celular','type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Celular',));?>
					<?= $this->Form->input('forma_pago',array('id'=>'edit_forma_pago','type'=>'select','options'=>$formas_pago,'empty'=>'Seleccionar Forma de Pago','class'=>'form-control','div'=>'col-md-6','label'=>'Forma de Pago',));?>
					<?= $this->Form->input('esquema',array('id'=>'edit_esquema','type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Esquema',));?>
				</div>

			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->submit('Modificar Información Agencia',array('class'=>'btn btn-success pull-left'))?>
			</div>
			<?= $this->Form->end()?>
		</div>
	</div>
</div>

<div class="modal fade" id="addPago" tabindex="-1" role="dialog" aria-hidden="true" >
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel1" style="color:black">
					<i class="fa fa-plus"></i>
					Registrar Movimiento
				</h4>
			</div>
			<?= $this->Form->create('Movimiento',array('url'=>array('action'=>'add','controller'=>'movimientos'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-12">
						<h4>Agencia: <span id='comisionista_name'></span></h4>
					</div>
					<?= $this->Form->input('referencia',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Referencia',));?>
					<?= $this->Form->input('monto',array('type'=>'number','class'=>'form-control','div'=>'col-md-6','step'=>0.01,'required'=>true,'label'=>'Monto',));?>
					<?= $this->Form->input('cuenta_id',array('type'=>'select','options'=>$cuentas,'empty'=>'Seleccionar Cuenta','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Cuenta',));?>
					<?= $this->Form->input('tipo_movimiento',array('type'=>'select','options'=>array(1=>'Ingreso',2=>'Egreso'),'empty'=>'Seleccionar Tipo Movimiento','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Ingreso / Egreso',));?>
					<?= $this->Form->input('fecha_aplicacion',array('type'=>'text','class'=>'form-control fecha','div'=>'col-md-6','label'=>'Fecha',));?>
					<?= $this->Form->input('tipo_gasto',array('value'=>'Comisión','readonly'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Tipo de Gasto',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('url_redirect',array('value'=>2))?>
				<?= $this->Form->hidden('comisionista_id',array('id'=>'comisionista_id_edit'))?>
				<?= $this->Form->submit('Registrar movimiento',array('class'=>'btn btn-success pull-left'))?>
			</div>
			<?= $this->Form->end()?>
		</div>
	</div>
</div>


<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Lista de Agencias
						<div style="float: right">
							<?= $this->Html->link('<i class="fa fa-eye"></i> Ver Todos','javascript:verTodas()',array('class'=>'btn btn-primary','escape'=>false))?>
							<?php echo $this->Html->link('<i class="fa fa-plus" data-pack="default" data-tags=""></i> Agregar Agencia','#',array('escape'=>false,'data-target'=>'#addJugador','data-toggle'=>'modal','class'=>'btn btn-success')); ?>
						</div>
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
									<th>Usuario</th>
									<th>Jugadores</th>
									<th>Balance Jugadores</th>
									<th>Comisiones Pendientes</th>
									<th>Status</th>
									<th style="text-align: center">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<?php
									$i = 0;
									foreach ($comisionistas as $comisionista):
								?>
									<tr id='tr_<?= $i?>' class="<?= isset($comisionista['Comisionista']['estado']) && $comisionista['Comisionista']['estado'] == 0 ? 'hide' : '' ?>">
										<td><?= $this->Html->link($comisionista['Comisionista']['usuario'],array('controller'=>'comisionistas','action'=>'view',$comisionista['Comisionista']['id']))?></td>
										<td><?= sizeof($comisionista['Jugadors'])?></td>
										<td>$<?= number_format($movimientos_finales[$comisionista['Comisionista']['id']]['saldo_movimientos'] + $movimientos_finales[$comisionista['Comisionista']['id']]['ganancia'] + $movimientos_finales[$comisionista['Comisionista']['id']]['saldo_inicial'] ,2)?></td>
										<td>
											<?php
											$saldo = 0;
											foreach ($comisionista['Movimientos'] as $movimiento){
												if (strpos($movimiento['tipo_gasto'], 'Comisi') !== false && empty($movimiento['jugador_id'])) {
													if ($movimiento['tipo_movimiento'] == 2) {
														$saldo -= $movimiento['monto'];
													} else if ($movimiento['tipo_movimiento'] == 1) {
														$saldo += $movimiento['monto'];
													}
												}
											}
											foreach ($comisionista['Comisiones'] as $comision){
												$saldo += $comision['comision'];
											}
											echo "$".number_format($saldo,2);
											?>
										</td>
										<td>
											<div class="form-group radio_basic_swithes_padbott">
												<input onchange="javascript:activarComisionista('<?= $comisionista['Comisionista']['id']?>',this)" class="make-switch-radio" type="checkbox" data-on-color="success" data-off-color="danger" <?= !isset($comisionista['Comisionista']['estado']) || $comisionista['Comisionista']['estado'] ? "checked" : ""?>>
											</div>
										</td>
										<td style="text-align: center">
											<?= $this->Html->link('<i class="fa fa-edit fa-lg"></i>',"javascript:editComisionista(".$comisionista['Comisionista']['id'].")",array('escape'=>false,'data-toggle'=>'tooltip', 'data-placement'=>'top' ,'title'=>'Editar Agenca'))?>
											<?= $this->Html->link('<i class="fa fa-money fa-lg"></i>',"javascript:registrarPago(".$comisionista['Comisionista']['id'].")",array('escape'=>false,'data-toggle'=>'tooltip','data-placement'=>'top' ,'title'=>'Registrar Pago / Depósito'))?>
											<?= $this->Html->link('<i class="fa fa-balance-scale fa-lg"></i>', array('controller' => 'comisionistas', 'action' => 'liquidacion', $comisionista['Comisionista']['id']), array('escape' => false, 'data-toggle' => 'tooltip', 'data-placement' => 'top', 'title' => 'Liquidar Agencia')) ?>
										</td>
									</tr>
								<?php $i++; endforeach;?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
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

	function registrarPago(id_comisionista){
		$('#addPago').modal('show');
		document.getElementById('comisionista_id_edit').value = id_comisionista;
		var dataString = 'id='+ id_comisionista;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "comisionistas", "action" => "getComisionista"), TRUE); ?>' ,
			data: dataString,
			cache: false,
			success: function(html) {
				document.getElementById('comisionista_name').innerHTML = html.Comisionista.nombre;
				document.getElementById('MovimientoReferencia').value = "Comisión "+html.Comisionista.usuario;
			}
		});
	}

	function editComisionista(id_comisionista){
		$('#editComisionista').modal('show');
		document.getElementById('edit_id').value = id_comisionista;
		var dataString = 'id='+ id_comisionista;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "comisionistas", "action" => "getComisionista"), TRUE); ?>' ,
			data: dataString,
			cache: false,
			success: function(html) {
				document.getElementById('edit_nombre').value = html.Comisionista.nombre;
				document.getElementById('edit_usuario').value = html.Comisionista.usuario;
				document.getElementById('edit_password').value = html.Comisionista.password;

				document.getElementById('edit_celular').value = html.Comisionista.celular;
				document.getElementById('edit_forma_pago').value = html.Comisionista.forma_pago;
				document.getElementById('edit_esquema').value = html.Comisionista.esquema;
			}
		});
	}

	function activarComisionista(id, input) {
		var estado = input.checked ? 1 : 0;
		var dataString = 'id=' + id + '&estado=' + estado;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "comisionistas", "action" => "activar"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				console.log(html);
			}
		});
	}

	function verTodas(){
		for(var j=0; j<=<?= $i?>; j++){
			if(document.getElementById('tr_'+j)) {
				document.getElementById('tr_'+j).classList.remove('hide');
			}
		}
	}

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
			let contador = document.getElementById('ComisionistaContador').value;
			document.getElementById('ComisionistaContador').value = Number(contador) + 1;
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

			let contador = document.getElementById('ComisionistaContador').value;
			document.getElementById('ComisionistaContador').value = Number(contador) - 1;

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

	});
	var TableAdvanced = function() {
		// ===============table 1====================
		var initTable1 = function() {
			var table = $('#sample_1');
			/* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
			/* Set tabletools buttons and button container */
			table.DataTable({
				dom: "Bflr<'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
				buttons: [
					'copy', 'csv', 'print'
				]
			});
			var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
			tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
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
