<?= $this->Html->css(
	array(
		'bootstrap.min',
		'/vendors/daterangepicker/css/daterangepicker',
	),
	array('inline'=>false));
?>
<style>
	.kpi-container { padding: 20px; }
	.kpi-card { border-radius: 10px; padding: 20px; color: white; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.15); }
	.kpi-title { font-size: 11px; text-transform: uppercase; font-weight: bold; opacity: 0.85; display: block; }
	.kpi-value { font-size: 26px; font-weight: 800; display: block; margin-top: 5px; }

	/* Colores según la tabla */
	.bg-azul-marino { background-color: #000080; }
	.bg-morado { background-color: #800080; }
	.bg-naranja { background-color: #ff8c00; }
	.bg-verde { background-color: #28a745; }
	.bg-rojo { background-color: #dc3545; }
	.bg-amarillo { background-color: #ffc107; color: #333 !important; }
	.bg-negro { background-color: #000000; }
	.bg-aqua { background-color: #00ffff; color: #333 !important; }
	.bg-aportaciones-or { background-color: #1e3a8a; }
	.bg-retiros-or { background-color: #7f1d1d; }

	.filter-wrapper { background: #fdfdfd; padding: 20px; border: 1px solid #eee; border-radius: 10px; margin-bottom: 30px; }
</style>

<div class="kpi-container">
	<h3 class="mb-4">📊 Dashboard Consolidado de Indicadores</h3>

	<div class="filter-wrapper">
		<?php echo $this->Form->create('Dashboard', array('class' => 'form-inline')); ?>
		<div class="form-group mr-3">
			<label class="mr-2">Rango de fechas: </label>
			<input type="text" id="drp" class="form-control" style="width: 250px;">
		</div>
		<?php
		echo $this->Form->input('fecha_inicio', array('type' => 'hidden', 'id' => 'fi'));
		echo $this->Form->input('fecha_fin', array('type' => 'hidden', 'id' => 'ff'));
		echo $this->Form->button('Actualizar Datos', array('class' => 'btn btn-info'));
		?>
		<?php echo $this->Form->end(); ?>
	</div>

	<div class="row">
		<div class="col-md-3">
			<div class="kpi-card bg-azul-marino">
				<span class="kpi-title">Resultado Juego Teórico</span>
				<span class="kpi-value"><?php echo $this->Number->currency($I1); ?></span>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-morado">
				<span class="kpi-title">Resultado Juego Realizado</span>
				<span class="kpi-value"><?php echo $this->Number->currency($I2); ?></span>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-naranja">
				<span class="kpi-title">Gastos Operativos</span>
				<span class="kpi-value"><?php echo $this->Number->currency($I3); ?></span>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-verde">
				<span class="kpi-title">Resultado Operativo</span>
				<span class="kpi-value"><?php echo $this->Number->currency($I4); ?></span>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-3">
			<div class="kpi-card bg-rojo">
				<span class="kpi-title">% Gastos Operativos</span>
				<span class="kpi-value"><?php echo number_format($I5, 2); ?>%</span>
				<small>(I3 / I2)</small>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-amarillo">
				<span class="kpi-title">% Utilidad Operativa</span>
				<span class="kpi-value"><?php echo number_format($I6, 2); ?>%</span>
				<small>(I4 / I2)</small>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-negro">
				<span class="kpi-title">Balance Pendiente</span>
				<span class="kpi-value"><?php echo $this->Number->currency($I7); ?></span>
				<small>(I1 - I2)</small>
			</div>
		</div>
		<div class="col-md-3">
			<div class="kpi-card bg-aqua">
				<span class="kpi-title">% Realización Resultado</span>
				<span class="kpi-value"><?php echo number_format($I8, 2); ?>%</span>
				<small>(I2 / I1)</small>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-6">
			<div class="kpi-card bg-aportaciones-or">
				<span class="kpi-title">Aportaciones OR</span>
				<span class="kpi-value"><?php echo $this->Number->currency($aportacionesOR); ?></span>
			</div>
		</div>
		<div class="col-md-6">
			<div class="kpi-card bg-retiros-or">
				<span class="kpi-title">Retiros OR</span>
				<span class="kpi-value"><?php echo $this->Number->currency($retirosOR); ?></span>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(function() {
		var start = moment('<?php echo $this->request->data['Dashboard']['fecha_inicio']; ?>');
		var end = moment('<?php echo $this->request->data['Dashboard']['fecha_fin']; ?>');

		$('#drp').daterangepicker({
			startDate: start,
			endDate: end,
			locale: { format: 'DD/MM/YYYY', applyLabel: 'Cargar', cancelLabel: 'Limpiar' }
		}, function(start, end) {
			$('#fi').val(start.format('YYYY-MM-DD'));
			$('#ff').val(end.format('YYYY-MM-DD'));
		});

		$('#fi').val(start.format('YYYY-MM-DD'));
		$('#ff').val(end.format('YYYY-MM-DD'));
	});
</script>

<?php
echo $this->Html->script(
	array(
		'/vendors/moment/js/moment.min',
		'/vendors/daterangepicker/js/daterangepicker',
	),
	array('inline'=>false));
?>
