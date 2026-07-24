<?= $this->Html->css(array(
	'/vendors/select2/css/select2.min',
	'/vendors/datatables/css/scroller.bootstrap.min',
	'/vendors/datatables/css/colReorder.bootstrap.min',
	'/vendors/datatables/css/dataTables.bootstrap.min',
	'pages/dataTables.bootstrap',
	'plugincss/responsive.dataTables.min',
	'pages/tables',
	'/vendors/bootstrap-switch/css/bootstrap-switch.min',
	'/vendors/switchery/css/switchery.min',
), array('inline' => false)); ?>

<style>
	@media print {

		.no-print,
		#left,
		#top,
		.head {
			display: none !important;
		}

		#content {
			margin-left: 0 !important;
			padding-left: 0 !important;
			padding-top: 0 !important;
			width: 100% !important;
			max-width: 100% !important;
			left: 0 !important;
		}

		.outer {
			width: 100% !important;
			padding: 0 !important;
			margin: 0 !important;
		}

		.wrapper {
			padding-top: 0 !important;
		}

		.print-only-logo {
			display: flex !important;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 12px;
			border-bottom: 1px solid #333;
			padding-bottom: 5px;
		}

		.print-only-logo img {
			max-height: 50px !important;
		}

		.print-only-logo h2 {
			font-size: 16px !important;
			margin-top: 4px !important;
		}

		.card {
			border: none !important;
			box-shadow: none !important;
		}

		.card-body {
			padding: 0 !important;
		}

		.card-header {
			padding: 5px 0 !important;
			font-size: 13px !important;
			border-bottom: none !important;
		}

		body {
			background: white !important;
			font-size: 12px !important;
			line-height: 1.15 !important;
		}

		table {
			border-collapse: collapse !important;
			width: 100% !important;
			margin-top: 5px !important;
		}

		th,
		td {
			border: 1px solid #ccc !important;
			padding: 4px 6px !important;
			font-size: 11px !important;
		}

		.m-t-30 {
			margin-top: 10px !important;
		}

		.totales-box {
			padding: 10px 15px !important;
			font-size: 11px !important;
			border-radius: 4px !important;
		}

		.totales-box .row {
			margin-top: 2px !important;
		}

		.totales-box hr {
			margin: 5px 0 !important;
		}
	}

	.print-only-logo {
		display: none;
	}

	.totales-box {
		background-color: #f8f9fa;
		padding: 20px;
		border-radius: 8px;
		border: 1px solid #ddd;
		font-size: 1.2em;
	}
</style>

<div class="outer" style="width: 86vw;">
	<div class="inner bg-container">

		<div class="print-only-logo">
			<img src="<?= $this->Html->url('/img/miboo_logo.png') ?>" style="max-height: 80px; width: auto;" alt="logo">
			<h2
				style="margin-top: 10px; font-family: 'Hind', sans-serif; font-weight: bold; color: #111; letter-spacing: 1px; margin-bottom: 0;">
				MiBoo</h2>
		</div>

		<?= $this->Form->create('Liquidacion', array('url' => array('controller' => 'comisionistas', 'action' => 'liquidacion', $comisionista['Comisionista']['id']))) ?>

		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header bg-white">
						Detalle de Liquidación - Agencia: <?= $comisionista['Comisionista']['nombre'] ?>
						<div class="pull-right no-print">
							<button type="button" class="btn btn-primary" onclick="window.print();"><i
									class="fa fa-print"></i> Imprimir Reporte</button>
						</div>
					</div>
					<div class="card-body p-t-15">

						<table class="table table-striped table-bordered m-t-15">
							<thead>
								<tr>
									<th class="no-print" style="width: 50px; text-align: center;"><input type="checkbox"
											id="checkAll" checked></th>
									<th>Usuario</th>
									<th>Jugador</th>
									<th style="text-align: right;">Comisión Generada</th>
									<th style="text-align: right;">Saldo Adeudado / A Favor</th>
								</tr>
							</thead>
							<tbody>
								<?php foreach ($jugadores_agencia as $jug): ?>
									<tr>
										<td class="no-print" style="text-align: center;">
											<input type="checkbox" class="jugador-checkbox" name="jugadores[]"
												value="<?= $jug['id'] ?>" data-saldo="<?= $jug['saldo'] ?>" checked>
										</td>
										<td><?= $jug['usuario'] ?></td>
										<td><?= $jug['nombre'] ?></td>
										<td style="text-align: right; color: blue;">
											$<?= number_format($jug['comision'], 2) ?>
										</td>
										<td
											style="text-align: right; <?= $jug['saldo'] > 0 ? 'color: red;' : ($jug['saldo'] < 0 ? 'color: green;' : '') ?>">
											$<?= number_format($jug['saldo'], 2) ?>
										</td>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>

						<div class="row m-t-30">
							<div class="col-md-6 offset-md-6">
								<div class="totales-box">
									<div class="row">
										<div class="col-8 text-right"><strong>Total Jugadores:</strong></div>
										<div class="col-4 text-right"><strong id="lbl_subtotal_jugadores">$0.00</strong>
										</div>
									</div>
									<div class="row m-t-10">
										<div class="col-8 text-right"><strong>Total Comisiones (Brutas):</strong></div>
										<div class="col-4 text-right"><strong
												style="color: blue;">$<?= number_format($total_comision, 2) ?></strong>
										</div>
									</div>
									<div class="row m-t-10">
										<div class="col-8 text-right"><strong>Pagos Realizados a la Agencia:</strong></div>
										<div class="col-4 text-right"><strong
												style="color: orange;">$<?= number_format($total_pagos_comision, 2) ?></strong>
										</div>
									</div>
									<div class="row m-t-10">
										<div class="col-8 text-right"><strong>Comisiones Pendientes Netas:</strong></div>
										<div class="col-4 text-right"><strong
												style="color: blue;">$<?= number_format($comision_neta, 2) ?></strong>
										</div>
									</div>
									<hr>
									<div class="row">
										<div class="col-8 text-right"><strong>GRAN TOTAL:</strong></div>
										<div class="col-4 text-right"><strong id="lbl_gran_total"
												style="font-size: 1.5em;">$0.00</strong></div>
									</div>
									<div class="row m-t-10">
										<div class="col-12 text-right text-muted" id="lbl_explicacion">
											<small>Calculando...</small>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div class="row m-t-15 no-print">
			<div class="col-12">
				<div class="card">
					<div class="card-header bg-white">
						Procesar Liquidación
					</div>
					<div class="card-body p-t-15">
						<div class="alert alert-warning">
							<i class="fa fa-warning"></i> Al procesar la liquidación, los saldos de los jugadores
							seleccionados y las comisiones pendientes se volverán a poner en $0.
						</div>

						<div class="row">
							<div class="col-md-4">
								<div class="form-group checkbox_basic_swithes_padbott m-t-20">
									<label>
										<input type="checkbox" name="data[Liquidacion][reflejar_banco]"
											id="reflejar_banco" value="1" class="make-switch-radio"
											data-on-color="success" data-off-color="danger" onchange="toggleBanco()">
										Reflejar en Banco
									</label>
								</div>
							</div>
							<div class="col-md-4" id="div_cuenta" style="display: none;">
								<?= $this->Form->input('cuenta_id', array('type' => 'select', 'options' => $cuentas, 'empty' => 'Seleccionar Cuenta...', 'class' => 'form-control', 'label' => 'Cuenta del Book')); ?>
							</div>
							<div class="col-md-4 text-right">
								<button type="submit" class="btn btn-success btn-lg m-t-20"
									onclick="return confirm('¿Estás seguro de procesar esta liquidación y poner en cero los saldos?');">
									<i class="fa fa-check"></i> Procesar Liquidación
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?= $this->Form->end() ?>

	</div>
</div>

<?php echo $this->Html->script(array(
	'/vendors/bootstrap-switch/js/bootstrap-switch.min',
	'/vendors/switchery/js/switchery.min',
	'pages/radio_checkbox'
), array('inline' => false)); ?>

<script>
	var total_comision = <?= (float) $comision_neta ?>;

	function recalcular() {
		var subtotal_jugadores = 0;
		$('.jugador-checkbox:checked').each(function () {
			subtotal_jugadores += parseFloat($(this).data('saldo'));
		});

		$('#lbl_subtotal_jugadores').text('$' + subtotal_jugadores.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

		var book_jugadores = -subtotal_jugadores;
		var book_comision = -total_comision;
		var balance_neto = book_jugadores + book_comision;

		$('#lbl_gran_total').text('$' + Math.abs(balance_neto).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

		if (balance_neto > 0) {
			$('#lbl_gran_total').css('color', 'green');
			$('#lbl_explicacion').html('<small>La Agencia debe pagar al Book</small>');
		} else if (balance_neto < 0) {
			$('#lbl_gran_total').css('color', 'red');
			$('#lbl_explicacion').html('<small>El Book debe pagar a la Agencia</small>');
		} else {
			$('#lbl_gran_total').css('color', 'black');
			$('#lbl_explicacion').html('<small>Saldado</small>');
		}
	}

	function toggleBanco() {
		if ($('#reflejar_banco').is(':checked')) {
			$('#div_cuenta').slideDown();
			$('#LiquidacionCuentaId').attr('required', true);
		} else {
			$('#div_cuenta').slideUp();
			$('#LiquidacionCuentaId').attr('required', false);
		}
	}

	$(document).ready(function () {
		recalcular();

		$('.jugador-checkbox').change(function () {
			recalcular();
			if ($('.jugador-checkbox:checked').length == $('.jugador-checkbox').length) {
				$('#checkAll').prop('checked', true);
			} else {
				$('#checkAll').prop('checked', false);
			}
		});

		$('#checkAll').change(function () {
			$('.jugador-checkbox').prop('checked', $(this).prop('checked'));
			recalcular();
		});
	});
</script>