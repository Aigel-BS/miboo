<div class="modal-dialog" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">Confirmar Pago Interjugador</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<?php echo $this->Form->create('Interjugador', array('url' => array('action' => 'registrar', $solicitud['Interjugador']['id']))); ?>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12 mb-3">
					<p><strong>Remitente (Paga):</strong> <?= $solicitud['Remitente']['usuario']." - ".$solicitud['Remitente']['nombre']?></p>
					<p><strong>Receptor (Cobra):</strong> <?= $solicitud['Receptor']['usuario']." - ".$solicitud['Receptor']['nombre']?></p>
					<p><strong>Monto a pagar:</strong> <?= "$".number_format($solicitud['Interjugador']['cantidad'])?></p>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="InterjugadorFechaAplicacion">Fecha de Aplicación</label>
						<div class="input-group input-append date">
							<span class="input-group-addon add-on" style="padding: 10px; background: #eee; border: 1px solid #ccc; border-right: 0;"><i class="fa fa-calendar"></i></span>
							<?php echo $this->Form->input('fecha_aplicacion', array(
								'type' => 'text',
								'label' => false,
								'div' => false,
								'class' => 'form-control fecha-modal',
								'value' => date('Y-m-d'),
								'required' => true,
								'autocomplete' => 'off',
								'style' => 'width: 100%; min-width: 150px;'
							)); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
			<?php echo $this->Form->button('Confirmar Pago', array('class' => 'btn btn-success')); ?>
		</div>
		<?php echo $this->Form->end(); ?>
	</div>
</div>

<script>
	'use strict';
	$(document).ready(function() {
		// Initialize datepicker for the modal specifically
		$('.fecha-modal').datepicker({
			format: 'yyyy-mm-dd',
			todayHighlight: true,
			autoclose: true,
			orientation: "bottom"
		});
	});
</script>
