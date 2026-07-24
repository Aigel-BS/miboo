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
				<h4 class="modal-title" style="color:black">
					Modificar Información
				</h4>
			</div>
			<?= $this->Form->create('Jugador',array('url'=>array('action'=>'add'),'class'=>'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-sm-12"><h4>Datos Jugador</h4></div>
					<?= $this->Form->input('id',array('value'=>$jugador['Jugador']['id']))?>
					<?= $this->Form->input('nombre',array('value'=>$jugador['Jugador']['nombre'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Jugador',));?>
					<?= $this->Form->input('registro',array('value'=>$jugador['Jugador']['usuario'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Usuario',));?>
					<?= $this->Form->input('registro',array('value'=>$jugador['Jugador']['registro'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Registro',));?>
					<?= $this->Form->input('password',array('value'=>$jugador['Jugador']['password'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Password',));?>
					<?= $this->Form->input('email',array('value'=>$jugador['Jugador']['email'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Email',));?>
					<?= $this->Form->input('celular',array('value'=>$jugador['Jugador']['celular'],'type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Celular',));?>
					<?= $this->Form->input('credito',array('value'=>$jugador['Jugador']['credito'],'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Crédito',));?>
					<?= $this->Form->input('maxima',array('value'=>$jugador['Jugador']['maxima'],'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Máxima','min'=>'0',));?>
					<?= $this->Form->input('minima',array('value'=>$jugador['Jugador']['minima'],'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Mínima','min'=>'0',));?>
					<?= $this->Form->input('descuento_1',array('value'=>$jugador['Jugador']['descuento_1'],'step'=>0.01,'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Descuento Pronto Pago','max'=>'100','min'=>'0',));?>
					<?= $this->Form->input('descuento_2',array('value'=>$jugador['Jugador']['descuento_2'],'step'=>0.01,'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Descuento Pago Regular','max'=>'100','min'=>'0',));?>
					<?= $this->Form->input('forma_pago',array('value'=>$jugador['Jugador']['forma_pago'],'type'=>'select','options'=>$formas_pago,'empty'=>'Seleccionar Forma de Pago','class'=>'form-control','div'=>'col-md-6','label'=>'Forma de Pago',));?>
					<?= $this->Form->input('corridas',array('value'=>$jugador['Jugador']['corridas'],'type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Corridas',));?>
					<div class="col-sm-12 m-t-15"><h4>Datos Agencia</h4></div>
					<?= $this->Form->input('comisionista_id',array('value'=>$jugador['Jugador']['comisionista_id'],'type'=>'select','empty'=>'Jugador Independiente','class'=>'form-control','div'=>'col-md-6','label'=>'Agencia','options'=>$comisionistas,));?>
					<?= $this->Form->input('comision_comisionista',array('value'=>$jugador['Jugador']['comision_comisionista'],'type'=>'number','class'=>'form-control','div'=>'col-md-6','step'=>'.01','min'=>0,'max'=>100,'label'=>'Comision',));?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->hidden('return',array('value'=>1))?>
				<?= $this->Form->submit('Modificar Información Jugador',array('class'=>'btn btn-success pull-left'))?>
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
					<?= $this->Form->input('monto',array('type'=>'number','class'=>'form-control','div'=>'col-md-6','label'=>'Monto',));?>
					<?= $this->Form->input('cuenta_id',array('type'=>'select','options'=>$cuentas,'empty'=>'Seleccionar Cuenta','class'=>'form-control','div'=>'col-md-6','label'=>'Cuenta',));?>
					<?= $this->Form->input('tipo_movimiento',array('type'=>'select','options'=>array(1=>'Ingreso',2=>'Egreso'),'empty'=>'Seleccionar Tipo Movimiento','class'=>'form-control','div'=>'col-md-6','label'=>'Ingreso / Egreso',));?>
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
					<?= $this->Form->input('jugador_id',array('value'=>$jugador['Jugador']['id'],'type'=>'hidden'))?>
					<?= $this->Form->input('banco',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Banco',));?>
					<?= $this->Form->input('beneficiario',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Beneficiario',));?>
					<?= $this->Form->input('cuenta_bancaria',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'Cuenta',));?>
					<?= $this->Form->input('spei',array('type'=>'text','class'=>'form-control','div'=>'col-md-6','label'=>'CLABE',));?>
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
							<?php echo $this->Html->link('<i class="fa fa-edit" data-pack="default" data-tags=""></i> Editar Información','#',array('data-toggle'=>'modal','data-target'=>'#addJugador','escape'=>false,'class'=>'btn btn-success')); ?>
						</div>
					</div>
					<div class="card-body p-t-15">
						<div class="row">
							<div class="col-3">
								<dl>
									<dt>Nombre:</dt>
									<dd><?= $jugador['Jugador']['nombre']?></dd>

									<dt>Celular:</dt>
									<dd><?= $jugador['Jugador']['celular']?>&nbsp;<?= $this->Html->link($this->Html->image('WhatsApp.svg',array('style'=>'width:20px')),'https://wa.me/'.$jugador['Jugador']['celular'],array('escape'=>false,'target'=>'_blank'))?></dd>

									<dt>Máxima:</dt>
									<dd>$<?= number_format($jugador['Jugador']['maxima'],2)?></dd>

									<dt>Agencia:</dt>
									<dd><?= $jugador['Comisionista']['usuario']?></dd>

								</dl>
							</div>
							<div class="col-3">
								<dl>
									<dt>Usuario:</dt>
									<dd><?= $jugador['Jugador']['usuario']?></dd>

									<dt>Crédito</dt>
									<dd>$<?= number_format($jugador['Jugador']['credito'],2)?></dd>

									<dt>Descuento Pronto Pago:</dt>
									<dd><?= $jugador['Jugador']['descuento_1']?>%</dd>

									<dt>Comisión Agencia:</dt>
									<dd><?= $jugador['Jugador']['comision_comisionista']?>%</dd>

								</dl>
							</div>
							<div class="col-3">
								<dl>
									<dt>Password:</dt>
									<dd><?= $jugador['Jugador']['password']?></dd>

									<dt>Corridas:</dt>
									<dd>$<?= number_format($jugador['Jugador']['corridas'],2)?></dd>

									<dt>Descuento Pago Regular:</dt>
									<dd><?= $jugador['Jugador']['descuento_2']?>%</dd>


								</dl>
							</div>
							<div class="col-3">
								<dl>
									<dt>Email:</dt>
									<dd><?= $jugador['Jugador']['email']?></dd>

									<dt>Mínima</dt>
									<dd>$<?= number_format($jugador['Jugador']['minima'],2)?></dd>

									<dt>Forma de pago:</dt>
									<dd><?= $jugador['Jugador']['forma_pago']?></dd>

								</dl>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<table>
									<thead
									<tr></tr>
								</table>
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
							<?= $this->Html->link('<i class="fa fa-eye"></i> Ver Todos','javascript:verTodas()',array('class'=>'btn btn-primary','escape'=>false))?>
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
								<th>Alias Cuenta</th>
								<th>Banco</th>
								<th>Cuenta Bancaria</th>
								<th>CLABE</th>
								<th>Débito</th>
								<th>Crédito</th>
								<th>Beneficiario</th>
								<th>Status</th>
								<th>Editar</th>
							</tr>
							</thead>
							<tbody>
							<?php
							$i=0;
							foreach ($jugador['CuentasBancarias'] as $cuenta):
								?>
								<tr id = 'tr_<?= $i?>' class="<?= !$cuenta['estado'] ? 'hide' : '' ?>">
									<td
										data-field="nombre"
										data-id="<?= $cuenta['id'] ?>"
										class="editable-cell"
									>
										<span class="display-value"><?= $cuenta['nombre'] ?></span>
										<button class="btn btn-xs btn-default edit-button" title="Editar">
											<i class="fa fa-edit"></i>
										</button>
									</td>
									<td><?= $cuenta['banco']?></td>
									<td><?= $cuenta['cuenta_bancaria']?></td>
									<td><?= $cuenta['spei']?></td>
									<td><?= $cuenta['debito']?></td>
									<td><?= $cuenta['credito']?></td>
									<td><?= $cuenta['beneficiario']?></td>
									<td>
										<div class="form-group radio_basic_swithes_padbott">
											<input onchange="javascript:activarCuenta('<?= $cuenta['id']?>',this)" class="make-switch-radio" type="checkbox" data-on-color="success" data-off-color="danger" <?= $cuenta['estado'] ? "checked" : ""?>>
										</div>
									</td>
									<td>
										<?= $this->Html->link('<i class="fa fa-edit fa-lg"></i>',"javascript:editCuenta(".$cuenta['id'].")",array('escape'=>false,'data-toggle'=>'tooltip', 'data-placement'=>'top' ,'title'=>'Editar Cuenta'))?>
									</td>
								</tr>
							<?php $i++; endforeach;?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="row m-t-15">
			<div class="col-sm-12">
				<div class="card">
					<div class="card-header bg-white">
						Resultados de Ganancias
					</div>
					<div class="card-body">
						<div class="m-b-20">
							<?= $this->Form->create(null, array('type' => 'get', 'url' => array('controller' => 'jugadors', 'action' => 'view', $jugador['Jugador']['id']), 'class' => 'form-inline')) ?>
								<div class="form-group m-r-10">
									<label for="fecha_inicio" class="m-r-5">Fecha Inicio:</label>
									<?= $this->Form->input('fecha_inicio', array('type' => 'text', 'class' => 'form-control fecha', 'label' => false, 'div' => false, 'value' => isset($this->request->query['fecha_inicio']) ? $this->request->query['fecha_inicio'] : '', 'autocomplete'=>'off')) ?>
								</div>
								<div class="form-group m-r-10">
									<label for="fecha_fin" class="m-r-5">Fecha Fin:</label>
									<?= $this->Form->input('fecha_fin', array('type' => 'text', 'class' => 'form-control fecha', 'label' => false, 'div' => false, 'value' => isset($this->request->query['fecha_fin']) ? $this->request->query['fecha_fin'] : '', 'autocomplete'=>'off')) ?>
								</div>
								<button type="submit" class="btn btn-primary m-r-10">Filtrar</button>
								<?= $this->Html->link('Limpiar', array('action' => 'view', $jugador['Jugador']['id']), array('class' => 'btn btn-secondary')) ?>
							<?= $this->Form->end() ?>
						</div>
						
						<div class="table-responsive">
							<table id="sample_ganancias" class="table-striped table-bordered table-hover table" style="width:100%">
								<thead>
								<tr>
									<th>Semana / Año</th>
									<th>Monto Semana</th>
								</tr>
								</thead>
								<tbody>
								<?php $total_ganancias = 0; ?>
								<?php if(!empty($ganancias_list)): ?>
									<?php foreach ($ganancias_list as $g): ?>
										<?php 
											$g = $g['Ganancia']; 
											$total_ganancias += $g['ganancia_neta'];
										?>
										<tr>
											<td>Semana <?= $g['semana'] . " / " . $g['anio'] ?></td>
											<td style="color: <?= $g['ganancia_neta'] >= 0 ? 'red' : 'green' ?>">$<?= number_format($g['ganancia_neta'], 2) ?></td>
										</tr>
									<?php endforeach; ?>
								<?php else: ?>
									<tr>
										<td colspan="2" class="text-center">No hay ganancias registradas para este periodo.</td>
									</tr>
								<?php endif; ?>
								</tbody>
								<tfoot>
									<tr class="table-info" style="background-color: #d1ecf1;">
										<td class="text-right"><strong>TOTAL:</strong></td>
										<td><strong style="color: <?= $total_ganancias >= 0 ? 'red' : 'green' ?>; font-size: 1.2em;">
											$<?= number_format($total_ganancias, 2) ?>
										</strong></td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
<script>

	function verTodas(){
		for(i=0;i<=<?= $i?>;i++){
			document.getElementById('tr_'+i).classList.remove('hide');
		}
	}

	function registrarPago(){
		$('#addPago').modal('show');
		document.getElementById('CuentaId').value = "";
		document.getElementById('CuentaBanco').value = "";
		document.getElementById('CuentaBeneficiario').value = "";
		document.getElementById('CuentaCuentaBancaria').value = "";
		document.getElementById('CuentaSpei').value = "";
		document.getElementById('CuentaDebito').value = "";
		document.getElementById('CuentaCredito').value = "";
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

		$(document).on('click', '.edit-button', function() {
			var $cell = $(this).closest('.editable-cell');
			var currentValue = $cell.find('.display-value').text().trim();

			// Ocultar el valor actual y el botón de edición
			$cell.find('.display-value, .edit-button').hide();

			// Crear el campo de input con el valor actual
			var $input = $('<input type="text" class="form-control edit-input">').val(currentValue);

			// Crear el botón de guardar
			var $saveButton = $('<button class="btn btn-success btn-xs save-button" title="Guardar">Guardar</button>');

			// Insertar el input y el botón de guardar en la celda
			$cell.append($input).append($saveButton);

			// Enfocar el input
			$input.focus();
		});

		// 2. Manejar el clic en el botón de guardar cambios
		$(document).on('click', '.save-button', function() {
			var $cell = $(this).closest('.editable-cell');
			var $input = $cell.find('.edit-input');

			var newValue = $input.val();
			var fieldName = $cell.data('field'); // 'nombre'
			var recordId = $cell.data('id');     // ID de la Cuenta

			// Deshabilitar temporalmente los botones/input para evitar doble clic
			$cell.find('.save-button, .edit-input').prop('disabled', true).text('Guardando...');

			// Realizar la llamada AJAX a tu Controller de CakePHP
			$.ajax({
				type: "POST", // O PUT si usas REST, pero POST es más común en formularios legacy
				url: "<?= $this->Html->url(array('controller'=>'cuentas','action'=>'updateInline'))?>/" + recordId, // Asegúrate de que esta URL sea correcta
				data: {
					// Datos que se enviarán al Controller
					'field': fieldName,
					'value': newValue,
					// Si usas CakePHP 2.x, puede que necesites enviar el token de seguridad.
					'_Token': $('[name="_Token"]').val()
				},
				success: function(response) {
					// Asumiendo que el Controller devuelve 'success'
					$cell.find('.display-value').text(newValue);

					// 2. Mostrar mensaje de éxito (opcional)
					alert('Cambio guardado exitosamente.');
				},
				error: function() {
					alert("Error de conexión o del servidor.");
				},
				complete: function() {
					// 3. Volver al estado inicial
					$cell.find('.edit-input, .save-button').remove();
					$cell.find('.display-value, .edit-button').show();
				}
			});
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
