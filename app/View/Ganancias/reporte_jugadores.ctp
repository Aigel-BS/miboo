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
	array('inline' => false));
?>
<?php
// Asumimos que todos los jugadores tienen el mismo número de semanas.
// Obtenemos la cantidad de semanas para generar el encabezado.
$num_semanas = !empty($jugadores) ? count($jugadores[0]['semanas']) : 0;

$totales_semana = array_fill_keys($semanas, 0);
$total_balance_general = 0; // Para el balance final

// ----------------------------------------------------
// 2. PRIMERA PASADA: CALCULAR TODOS LOS TOTALES
// ----------------------------------------------------
foreach ($jugadores as $jugador) {
	$saldo_jugador = $jugador['saldo_inicial'];

	foreach ($semanas as $semana) {
		$monto = 0;
		if (isset($jugador['semanas'][$semana])) {
			$monto = $jugador['semanas'][$semana];
		}

		// Sumamos el monto de la semana al total general de esa semana
		$totales_semana[$semana] += $monto;

		// Calculamos el saldo final de este jugador
		$saldo_jugador += $monto;
	}
	// Sumamos el saldo final de este jugador al Balance General (la última columna)
	$total_balance_general += $saldo_jugador;
}

?>
<style>
	.totales-row th,
	.totales-row td {
		background-color: #e1d596;
		/* Fondo gris claro para destacar */
		font-weight: bold;
		border-top: 3px solid #000;
	}

	.table-wrapper {
		overflow-x: auto;
		max-width: 100%;
	}

	table {
		border-collapse: collapse;

		/* Usamos un ancho mínimo para forzar el scroll horizontal */
		/* min-width: calc(400px + <?php echo $num_semanas * 70; ?>px);
	}

	th,
	td {
		border: 1px solid #ccc;
		padding: 8px;
		text-align: center;
	}

	/* Estilos clave para la columna fija */
		.sticky-col {
			position: sticky;
			left: 0;
			z-index: 1;
		}

		.positivo {
			color: red;
			font-weight: bold;
		}

		.negativo {
			color: green;
			font-weight: bold;
		}

		/* Fix Datepicker Visuals */
		.datepicker {
			padding: 10px !important;
			border-radius: 4px !important;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2) !important;
			background-color: white !important;
			border: 1px solid #ddd !important;
		}

		.datepicker table tr td,
		.datepicker table tr th {
			width: 30px !important;
			height: 30px !important;
			border-radius: 4px !important;
			font-size: 13px !important;
		}

		.datepicker table tr td.active,
		.datepicker table tr td.active:hover {
			background-color: #337ab7 !important;
			background-image: none !important;
			color: white !important;
		}

		.datepicker .datepicker-switch:hover,
		.datepicker .prev:hover,
		.datepicker .next:hover,
		.datepicker tfoot tr th:hover {
			background: #f5f5f5 !important;
		}

		.datepicker table tr td.day:hover {
			background: #eeeeee !important;
			cursor: pointer;
		}

		/* Fix red header if inherited */
		.datepicker-dropdown:after {
			border-bottom: 6px solid #fff !important;
		}

		.datepicker table thead tr:first-child th {
			background: #f9f9f9 !important;
			color: #333 !important;
			border-bottom: 1px solid #eee !important;
		}

		.input-group-addon {
			background-color: #f5f5f5 !important;
			border: 1px solid #ccc !important;
			color: #555 !important;
		}

		.form-group label {
			margin-bottom: 5px;
			font-weight: 600;
		}
</style>

<div class="modal fade" id="editRegistro" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="max-width:900px !important">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel1" style="color:black">
					<i class="fa fa-plus"></i>
					Editar Registro
				</h4>
			</div>
			<?= $this->Form->create('Ganancia', array('url' => array('action' => 'edit', 'controller' => 'ganancias'), 'class' => 'form-horizontal'))?>
			<div class="modal-body">
				<div class="form-group row">
					<div class="col-6">
						<h3 id="jugador_label"></h3>
					</div>
					<div class="col-6">
						<h3 id="semana_label"></h3>
					</div>
				</div>
				<div class="row">
					<?= $this->Form->hidden('id')?>
					<?= $this->Form->input('ganancia', array('type' => 'number', 'onchange' => 'javascript:validarTotal()', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Monto Semana', 'step' => .01)); ?>
					<?= $this->Form->input('ganancia_neta', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Monto Después de Descuento', 'step' => .01))?>
					<?= $this->Form->input('comision', array('type' => 'number', 'class' => 'form-control', 'div' => 'col-md-6', 'required' => true, 'label' => 'Comisión Agencia', 'step' => .01))?>
					<?= $this->Form->input('descuento_jugador', array('type' => 'hidden'))?>
					<?= $this->Form->input('comision_jugador', array('type' => 'hidden'))?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger float-xs-right" data-dismiss="modal">
					Cerrar
					<i class="fa fa-times"></i>
				</button>
				<?= $this->Form->submit('Guardar Cambios', array('class' => 'btn btn-success pull-left'))?>
			</div>
			<?= $this->Form->end()?>
		</div>
	</div>
</div>

<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">
		<div class="row">
			<div class="col-lg-12">
				<div class="card">
					<div class="card-header bg-white">
						Filtros
					</div>
					<div class="card-body">
						<?= $this->Form->create('Filtro', array('id' => 'form_filtros', 'url' => array('action' => 'reporte_jugadores', 'controller' => 'ganancias')))?>
						<div class="row">
							<div class="col-md-3">
								<div class="form-group">
									<label for="fecha_inicio" class="control-label">Fecha Inicio:</label>
									<div class="input-group">
										<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
										<input type="text" name="fecha_inicio" id="fecha_inicio"
											class="form-control fecha" value="<?= $fecha_inicio?>"
											placeholder="YYYY-MM-DD" readonly
											style="background-color: white; cursor: pointer;">
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-group">
									<label for="fecha_fin" class="control-label">Fecha Fin:</label>
									<div class="input-group">
										<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
										<input type="text" name="fecha_fin" id="fecha_fin" class="form-control fecha"
											value="<?= $fecha_fin?>" placeholder="YYYY-MM-DD" readonly
											style="background-color: white; cursor: pointer;">
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-group">
									<label for="jugador_id" class="control-label">Jugador:</label>
									<?= $this->Form->input('jugador_id', array(
	'options' => $players_list,
	'empty' => 'Todos los Jugadores',
	'label' => false,
	'class' => 'form-control select2',
	'div' => false,
	'default' => $selected_jugador
))?>
								</div>
							</div>
							<input type="hidden" name="data[Filtro][mostrar_todos]" id="mostrar_todos_hidden"
								value="<?= $mostrar_todos ? '1' : '0'?>">
							<div class="col-md-3">
								<div class="form-group" style="padding-top: 25px;">
									<button type="submit" class="btn btn-primary">
										<i class="fa fa-search"></i> Filtrar
									</button>
									<a href="<?= $this->Html->url(array('action' => 'reporte_jugadores'))?>"
										class="btn btn-secondary m-l-5">
										<i class="fa fa-refresh"></i> Limpiar
									</a>
								</div>
							</div>
						</div>
						<?= $this->Form->end()?>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="card">
					<div class="card-header bg-white">
						<div class="row">
							<div class="col-md-6">
								Semanas Jugadas
							</div>
							<div class="col-md-6 text-right">
								<label for="mostrar_todos_toggle" class="m-r-10" style="font-weight: 600;">Mostrar
									Inactivos:</label>
								<input type="checkbox" id="mostrar_todos_toggle" class="make-switch" data-on-text="SI"
									data-off-text="NO" data-size="small" <?= $mostrar_todos ? 'checked' : '' ?>>
							</div>
						</div>
					</div>
					<div class="card-body p-t-50">
						<table id="sample_1" class="table-striped table-bordered table-hover table m-t-15"
							style="width:100%">
							<thead>
								<tr>
									<th class="sticky-col">Usuario</th>
									<?php foreach ($semanas as $key => $semana): ?>
									<th>Semana
										<?php echo $semana . "<br>" . $semanas_periodos[$key]; ?>
									</th>
									<?php
endforeach; ?>
									<th><b>Balance</b></th>
								</tr>
								<tr class="totales-row">
									<th class="sticky-col" style="text-align: center;color:black"><b>TOTALES:</b></th>
									<?php foreach ($semanas as $semana): ?>
									<?php
	$total = $totales_semana[$semana];
	$clase = $total >= 0 ? 'positivo' : 'negativo';
?>
									<th class="<?php echo $clase; ?>">
										<b>
											<?php echo "$" . number_format($total, 2); ?>
										</b>
									</th>
									<?php
endforeach; ?>
									<th class="<?php echo $total_balance_general >= 0 ? 'positivo' : 'negativo'; ?>">
										<b>
											<?php echo "$" . number_format($total_balance_general, 2); ?>
										</b>
									</th>
								</tr>
							</thead>

							<tbody>
								<?php foreach ($jugadores as $jugador): ?>
								<?php $saldo_total = $jugador['saldo_inicial']; ?>
								<tr>
									<td class="sticky-col">
										<?php echo $jugador['nombre']; ?>
									</td>
									<?php
	foreach ($semanas as $semana):
		$monto = 0;
		if (isset($jugador['semanas'][$semana])) {
			$saldo_total += $jugador['semanas'][$semana];
			$monto = $jugador['semanas'][$semana];
		}
?>
									<td class="<?php echo $monto >= 0 ? 'positivo' : 'negativo'; ?>">
										<?php echo "$" . number_format($monto, 2)?>
										<div style="float:right">
											<?= $this->Html->link('<i class="fa fa-edit"></i>', 'javascript:editRegistro(' . $jugador['semanas'][$semana . "_id"] . ')', array('escape' => false))?>
										</div>
									</td>
									<?php
	endforeach; ?>
									<td class="<?php echo $saldo_total >= 0 ? 'positivo' : 'negativo'; ?>"><b>
											<?php echo "$" . number_format($saldo_total, 2); ?>
										</b></td>
								</tr>
								<?php
endforeach; ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>

	function editRegistro(id) {
		$('#editRegistro').modal('show');
		var dataString = 'id=' + id;
		console.log(dataString);
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "ganancias", "action" => "getGanancia"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				console.log(html);
				document.getElementById('GananciaId').value = html.Ganancia.id;
				document.getElementById('GananciaGanancia').value = html.Ganancia.ganancia;
				document.getElementById('GananciaGananciaNeta').value = html.Ganancia.ganancia_neta;
				document.getElementById('GananciaComision').value = html.Ganancia.comision;
				document.getElementById('GananciaComisionJugador').value = html.Jugador.comision_comisionista;
				document.getElementById('GananciaDescuentoJugador').value = html.Jugador.descuento_2;
				document.getElementById('jugador_label').innerHTML = "Usuario:" + html.Jugador.usuario;
				document.getElementById('semana_label').innerHTML = "Semana:" + html.Ganancia.semana + "/" + html.Ganancia.anio;
			}
		});
	}

	function validarTotal() {
		// La lógica de cálculo ya existente...

		var total = Number(document.getElementById('GananciaGanancia').value);
		var descuento = Number(document.getElementById('GananciaDescuentoJugador').value);
		//var saldo_anterior = Number (saldo_anterior);
		// ... (toda tu lógica de cálculo de total y redondeo)

		if (Number(document.getElementById('GananciaGanancia').value) < 0) {
			total_raw = total * ((100 - descuento) / 100);
			total = redondearDecena(total_raw);
		} else {
			total = redondearDecena(Number(document.getElementById('GananciaGanancia').value));
		}
		var estilo_pagar = "color:red";
		var estilo_total = "color:darkgreen";
		if (total < 0) {
			estilo_pagar = "color:darkgreen";
			document.getElementById('GananciaComision').value = Math.floor(total * (document.getElementById('GananciaComisionJugador').value / 100));
		} else {
			document.getElementById('GananciaComision').value = 0;
		}
		document.getElementById('GananciaGananciaNeta').value = total;
	}

	function redondearDecena(numero) {
		// 1. Manejo del Signo y Parte Entera:
		//    Usamos Math.sign para preservar el signo y Math.abs para aplicar la lógica al valor positivo.
		const signo = Math.sign(numero);
		const absoluto = Math.abs(Math.floor(numero));

		// 2. Obtener la Unidad.
		let ultimoDigito = absoluto % 10;
		let resultadoAbsoluto;

		if (ultimoDigito <= 4) {
			// Corresponde a MULTIPLO.INFERIOR (para 0-4)
			resultadoAbsoluto = absoluto - ultimoDigito;
		} else if (ultimoDigito >= 6) {
			// Corresponde a MULTIPLO.SUPERIOR (para 6-9)
			resultadoAbsoluto = absoluto + (10 - ultimoDigito);
		} else { // Cuando ultimoDigito === 5
			// Corresponde a SI(VALOR(DERECHA(ABS(F2),1))=5,F2,...)
			// Si el último dígito es 5, se mantiene.
			resultadoAbsoluto = absoluto;
		}

		// 3. Restaurar el signo original de F2.
		return resultadoAbsoluto * signo;
	}

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

	function registrarPago(id_jugador) {
		$('#addPago').modal('show');
		document.getElementById('jugador_id_edit').value = id_jugador;
		var dataString = 'id=' + id_jugador;
		$.ajax({
			type: "POST",
			url: '<?php echo Router::url(array("controller" => "jugadors", "action" => "getJugador"), TRUE); ?>',
			data: dataString,
			cache: false,
			success: function (html) {
				document.getElementById('jugador_name').innerHTML = html.Jugador.nombre;
			}
		});
	}

	function editJugador(id) {
		$('#addJugador').modal('show');

		document.getElementById('tituloModalAddJugador').innerHTML = "<i class='fa fa-edit'></i>Editar Jugador";
		document.getElementById('botonSubmitJugador').value = "Guardar Cambios";

		document.getElementById('cuentasBancarias').style.display = 'none';
		document.getElementById('cuentas-container').style.display = 'none';
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
	'/vendors/bootstrap/js/bootstrap.min',

	'/vendors/bootstrap-switch/js/bootstrap-switch.min',
	'/vendors/switchery/js/switchery.min',
	'pages/radio_checkbox'
),
	array('inline' => false));
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

		$('.input-group-addon').click(function () {
			$(this).next('input.fecha').focus();
		});

		if ($.fn.bootstrapSwitch) {
			$(".make-switch").bootstrapSwitch();
		}

		$('#mostrar_todos_toggle').on('switchChange.bootstrapSwitch', function (event, state) {
			$('#mostrar_todos_hidden').val(state ? '1' : '0');
			$('#form_filtros').submit();
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
				pageLength: 500.
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