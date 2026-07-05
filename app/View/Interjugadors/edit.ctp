<div class="modal-dialog" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title">Editar Movimiento Interjugador</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<?php echo $this->Form->create('Interjugador', array('url' => array('action' => 'edit', $solicitud['Interjugador']['id']))); ?>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12 mb-3">
					<p><strong>Remitente (Paga):</strong> <?= $solicitud['Remitente']['usuario']." - ".$solicitud['Remitente']['nombre']?></p>
					<p><strong>Receptor (Cobra):</strong> <?= $solicitud['Receptor']['usuario']." - ".$solicitud['Receptor']['nombre']?></p>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label for="InterjugadorCantidad">Monto</label>
						<?php echo $this->Form->input('cantidad', array(
							'type' => 'number',
							'label' => false,
							'class' => 'form-control',
							'value' => $solicitud['Interjugador']['cantidad'],
							'required' => true,
							'step' => 'any'
						)); ?>
					</div>
					<div class="form-group mt-3">
						<label for="InterjugadorFechaLimite">Fecha Límite</label>
						<div class="input-group input-append date">
							<span class="input-group-addon add-on" style="padding: 10px; background: #eee; border: 1px solid #ccc; border-right: 0;"><i class="fa fa-calendar"></i></span>
							<?php echo $this->Form->input('fecha_limite', array(
								'type' => 'text',
								'label' => false,
								'div' => false,
								'class' => 'form-control fecha-modal',
								'value' => date('Y-m-d', strtotime($solicitud['Interjugador']['fecha_limite'])),
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
			<?php echo $this->Form->button('Guardar Cambios', array('class' => 'btn btn-primary')); ?>
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
