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

<style>
	.table-wrapper {
		overflow-x: auto;
		max-width: 100%;
	}

	table {
		border-collapse: collapse;
		/* Usamos un ancho mínimo para forzar el scroll horizontal */
	}

	th, td {
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
</style>
<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header bg-white">
						Semanas Jugadas
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
								<th class="sticky-col">Agencia</th>
								<?php
// Encabezados dinámicos de las semanas (Columnas)
foreach ($semanas_unicas as $semana_anio):
	echo '<th>';
	echo h($semana_anio) . '<br>' . $semanas_periodos[$semana_anio];
	echo '</th>';
endforeach;
?>
<th>Total Ganado</th>
</tr>
</thead>
<tbody>
	<?php foreach ($tabla_final as $fila): ?>
	<tr>
		<td style="font-weight: bold;">
			<?php echo h($comisionistas[$fila['comisionista_id']]); ?>
		</td>

		<?php
	// Columnas dinámicas de las ganancias por semana
	foreach ($semanas_unicas as $semana_anio):
		// Accedemos al valor que está garantizado que existe gracias al procesamiento en el controlador
		$comision = $fila[$semana_anio];
		echo '<td>' . number_format($comision, 2) . " <span style='float:right'>" . $this->Html->link('<i class="fa fa-list"></i>', array('controller' => 'ganancias', 'action' => 'reporte_detalle', $fila['comisionista_id'], $semana_anio), array('escape' => false)) . '</span> </td>';
	endforeach;
?>

		<td style="font-weight: bold; background-color: #f0f0f0;">
			<?php echo number_format($fila['Total'], 2); ?>
		</td>
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