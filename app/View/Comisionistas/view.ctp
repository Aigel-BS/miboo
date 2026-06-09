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
<?php
	$formas_pago=array(
		'Efectivo'=>'Efectivo',
		'Transferencia'=>'Transferencia',
		'Mixto'=>'Mixto',
	);
?>

<div class="modal fade" id="addJugador" tabindex="-1" role="dialog" aria-hidden="true" >
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
					<div class="col-sm-12"><h4>Datos Comisionista</h4></div>
					<?= $this->Form->input('id',array('value'=>$comisionista['Comisionista']['id']))?>
					<?= $this->Form->input('nombre',array('value'=>$comisionista['Comisionista']['nombre'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Nombre Jugador',));?>
					<?= $this->Form->input('clave',array('value'=>$comisionista['Comisionista']['usuario'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Usuario',));?>
					<?= $this->Form->input('password',array('value'=>$comisionista['Comisionista']['password'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Contraseña',));?>
					<?= $this->Form->input('email',array('value'=>$comisionista['Comisionista']['email'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Email',));?>
					<?= $this->Form->input('celular',array('value'=>$comisionista['Comisionista']['celular'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Celular',));?>
					<?= $this->Form->input('forma_pago',array('value'=>$comisionista['Comisionista']['forma_pago'],'type'=>'select','options'=>$formas_pago,'empty'=>'Seleccionar Forma de Pago','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Forma de Pago',));?>
					<?= $this->Form->input('esquema',array('value'=>$comisionista['Comisionista']['esquema'],'type'=>'text','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Esquema',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('return',array('value'=>1))?>
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
					Registrar Movimiento para Jugador
				</h4>
			</div>
			<?= $this->Form->create('Jugador',array('url'=>array('action'=>'addPago'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-12">
						<h4>Jugador: Juan 11</h4>
					</div>
					<?= $this->Form->input('monto',array('type'=>'number','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Monto',));?>
					<?= $this->Form->input('cuenta_id',array('type'=>'select','options'=>$cuentas,'empty'=>'Seleccionar Cuenta','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Cuenta',));?>
					<?= $this->Form->input('tipo_movimiento',array('type'=>'select','options'=>array(1=>'Ingreso',2=>'Egreso'),'empty'=>'Seleccionar Tipo Movimiento','required'=>true,'class'=>'form-control','div'=>'col-md-6','label'=>'Ingreso / Egreso',));?>
					<?= $this->Form->input('fecha_aplicacion',array('type'=>'text','class'=>'form-control fecha','div'=>'col-md-6','label'=>'Fecha',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->submit('Registrar movimiento',array('class'=>'btn btn-success pull-left'))?>
			</div>
			<?= $this->Form->end()?>
		</div>
	</div>
</div>

<div class="modal fade" id="addCuenta" tabindex="-1" role="dialog" aria-hidden="true" >
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" style="color:black">
					Agregar Cuenta Bancaria
				</h4>
			</div>
			<?= $this->Form->create('Cuenta',array('url'=>array('action'=>'add'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-sm-12"><h4>Datos Cuenta Bancaria</h4></div>
					<?= $this->Form->hidden('id')?>
					<?= $this->Form->input('comisionista_id',array('value'=>$comisionista['Comisionista']['id'],'type'=>'hidden'))?>
					<?= $this->Form->input('banco',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Banco',));?>
					<?= $this->Form->input('beneficiario',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Beneficiario',));?>
					<?= $this->Form->input('cuenta_bancaria',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'Cuenta',));?>
					<?= $this->Form->input('spei',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','required'=>true,'label'=>'CLABE',));?>
					<?= $this->Form->input('debito',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Tarjeta de Débito',));?>
					<?= $this->Form->input('credito',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Tarjeta de Crédito',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->submit('Agregar Cuenta',array('class'=>'btn btn-success pull-left','id'=>'botonSubmitJugador'))?>
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
						Información General
						<div style="float: right">
							<?php echo $this->Html->link('<i class="fa fa-balance-scale" data-pack="default" data-tags=""></i> Liquidar Agencia',array('controller' => 'comisionistas', 'action' => 'liquidacion', $comisionista['Comisionista']['id']),array('escape'=>false,'class'=>'btn btn-warning m-r-10')); ?>
							<?php echo $this->Html->link('<i class="fa fa-edit" data-pack="default" data-tags=""></i> Editar Información','#',array('data-toggle'=>'modal','data-target'=>'#addJugador','escape'=>false,'class'=>'btn btn-success')); ?>
						</div>
					</div>
					<div class="card-body p-t-15">
						<div class="row">
							<div class="col-3">
								<dl>
									<dt>Nombre:</dt>
									<dd><?= $comisionista['Comisionista']['nombre']?></dd>

									<dt>Celular:</dt>
									<dd><?= $comisionista['Comisionista']['celular']?>&nbsp;<?= $this->Html->link($this->Html->image('WhatsApp.svg',array('style'=>'width:20px')),'https://wa.me/'.$comisionista['Comisionista']['celular'],array('escape'=>false,'target'=>'_blank'))?></dd>

								</dl>
							</div>
							<div class="col-3">
								<dl>

									<dt>Email</dt>
									<dd><?= $comisionista['Comisionista']['email']?></dd>

									<dt>Forma de Pago:</dt>
									<dd><?= $comisionista['Comisionista']['forma_pago']?></dd>

								</dl>
							</div>
							<div class="col-3">
								<dl>
									<dt>Usuario:</dt>
									<dd><?=$comisionista['Comisionista']['usuario']?></dd>

									<dt>Esquema:</dt>
									<dd><?= $comisionista['Comisionista']['esquema']?></dd>

								</dl>
							</div>
							<div class="col-3">
								<dl>
									<dt>Password:</dt>
									<dd><?= $comisionista['Comisionista']['password']?></dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row m-t-15">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Cuentas Bancarias
						<div style="float: right">
							<?= $this->Html->link('<i class="fa fa-plus"></i>','javascript:addCuenta()',array('class'=>'btn btn-success','escape'=>false))?>
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
								<th>Beneficiario</th>
								<th>Banco</th>
								<th>Cuenta</th>
								<th>CLABE</th>
								<th>Tarjeta de Débito</th>
								<th>Tarjeta de Crédito</th>
								<th>Estado</th>
								<th>Editar</th>
							</tr>
							</thead>
							<tbody>
							<?php
							foreach ($comisionista['Cuentas'] as $cuenta):
								?>
								<tr>
									<td><?= $cuenta['beneficiario']?></td>
									<td><?= $cuenta['banco']?></td>
									<td><?= $cuenta['cuenta_bancaria']?></td>
									<td><?= $cuenta['spei']?></td>
									<td><?= $cuenta['debito']?></td>
									<td><?= $cuenta['credito']?></td>
									<td>
										<div class="form-group radio_basic_swithes_padbott">
											<input onchange="javascript:activarCuenta('<?= $cuenta['id']?>',this)" class="make-switch-radio" type="checkbox" data-on-color="success" data-off-color="danger" <?= $cuenta['estado'] ? "checked" : ""?>>
										</div>
									</td>
									<td style="text-align: center">
										<?= $this->Html->link('<i class="fa fa-edit fa-lg"></i>',"javascript:editCuenta(".$cuenta['id'].")",array('escape'=>false,'data-toggle'=>'tooltip', 'data-placement'=>'top' ,'title'=>'Editar Cuenta'))?>

									</td>
								</tr>
							<?php endforeach;?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="row m-t-15">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Jugadores
					</div>
					<div class="card-body p-t-50">
						<div class="">
							<div class="pull-sm-right">
								<div class="tools pull-sm-right"></div>
							</div>
						</div>
						<table id="sample_2" class="table-striped table-bordered table-hover table m-t-15" style="width:100%">
							<thead>
							<tr>
								<th>Usuario</th>
								<th>Jugador</th>
								<th>Contraseña</th>
								<th>Celular</th>
								<th>Balance</th>
								<th>Estado</th>
							</tr>
							</thead>
							<tbody>
							<?php
							foreach ($comisionista['Jugadors'] as $jugador):
								?>
								<tr>
									<td><?= $this->Html->link($jugador['usuario'],array('action'=>'view','controller'=>'jugadors',$jugador['id']))?></td>
									<td><?= $jugador['nombre']?></td>
									<td><?= $jugador['password']?></td>
									<td><?= $jugador['celular']?></td>
									<?php
										$saldo = $movimientos_finales[$jugador['id']]['saldo_movimientos'] + $movimientos_finales[$jugador['id']]['ganancia'] + $movimientos_finales[$jugador['id']]['saldo_inicial'];
									?>
									<td style="<?=  $saldo==0 ? "color:black" : ($saldo>0 ? "color:red;font-weight:bold;": "color:green;font-weight:bold;") ?>">$<?= number_format($saldo ,2)?></td>
									<td><?= $jugador['estatus']==1 ? "Activo": "Inactivo"?></td>
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
<script>

	function registrarPago(){
		$('#addPago').modal('show');
	}

	function addCuenta(){
		$("#addCuenta").modal('show');
		document.getElementById('CuentaId').value = "";
		document.getElementById('CuentaBeneficiario').value = "";
		document.getElementById('CuentaBanco').value = "";
		document.getElementById('CuentaCuentaBancaria').value = "";
		document.getElementById('CuentaSpei').value = "";
		document.getElementById('CuentaDebito').value = "";
		document.getElementById('CuentaCredito').value = "";
	}

	function editCuenta(id){
		$("#addCuenta").modal('show');
		document.getElementById('CuentaId').value = id;
		var dataString = 'id='+ id;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "cuentas", "action" => "getCuenta"), TRUE); ?>' ,
			data: dataString,
			cache: false,
			success: function(html) {
				document.getElementById('CuentaBanco').value = html.Cuenta.banco;
				document.getElementById('CuentaBeneficiario').value = html.Cuenta.beneficiario;
				document.getElementById('CuentaCuentaBancaria').value = html.Cuenta.cuenta_bancaria;
				document.getElementById('CuentaSpei').value = html.Cuenta.spei;
				document.getElementById('CuentaDebito').value = html.Cuenta.debito;
				document.getElementById('CuentaCredito').value = html.Cuenta.credito;
			}
		});
	}


	function activarCuenta(id,input){
		var estado = input.checked ? 1 : 0
		var dataString = 'id='+ id + '&estado='+estado;
		console.log(dataString);
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "cuentas", "action" => "activar"), TRUE); ?>' ,
			data: dataString,
			cache: false,
			success: function(html) {
				console.log(html);
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
			format: 'dd-mm-yyyy',
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
		var initTable2 = function() {
			var table = $('#sample_2');
			/* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
			/* Set tabletools buttons and button container */
			table.DataTable({
				dom: "Bflr<'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
				buttons: [
					'copy', 'csv', 'print'
				]
			});
			var tableWrapper = $('#sample_2_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
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
				initTable2();
			}
		};
	}();

</script>
