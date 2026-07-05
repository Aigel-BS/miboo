<?= $this->Html->css(
        array(
            '/vendors/bootstrapvalidator/css/bootstrapValidator.min',
            '/vendors/wow/css/animate',
            'pages/login1'
            )
        ,array('inline'=>false)
        );
 ?>

<body style="background-image: unset; height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; background-color: #eaeaea;">
<div class="container wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="2s" style="display: flex; justify-content: center;">
    <div class="row" style="width: 100%; justify-content: center;">
        <div class="col-lg-5 col-md-8 col-sm-10 login_top_bottom">
            <div class="login_logo login_border_radius1">
                        <h3  class="text-center">
                            <img src="<?= $this->Html->url('/img/miboo_logo.png')?>" alt="josh logo" class="admire_logo">
                        </h3>
                    </div>
                    <div class="bg-white login_content login_border_radius">
                        <?php echo $this->Session->flash(); ?>
                        <?= $this->Form->create('User')?>
                            <div class="form-group">
                                <label for="email" class="form-control-label">Correo Electrónico</label>
                                <div class="input-group" style="width: 100%; display: flex;">
                                    <span class="input-group-addon input_email" style="display: flex; align-items: center; padding: 0.5rem 1rem;"><i class="fa fa-envelope text-primary"></i></span>
                                            <?php echo $this->Form->input('username',array('style'=>'width:100% !important; flex: 1;','class'=>'form-control form-control-md','placeholder'=>'Usuario','label'=>false, 'div' => false))?>
                                </div>
                            </div>
                            <!--</h3>-->
                            <div class="form-group">
                                <label for="password" class="form-control-label">Password</label>
                                <div class="input-group" style="width: 100%; display: flex;">
                                    <span class="input-group-addon addon_password" style="display: flex; align-items: center; padding: 0.5rem 1rem;"><i class="fa fa-lock text-primary"></i></span>
                                            <?php echo $this->Form->input('password',array('style'=>'width:100% !important; flex: 1;','class'=>'form-control form-control-md','placeholder'=>'Contraseña','label'=>false, 'div' => false))?>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <?php echo $this->Form->button('Acceder',array('type'=>'submit','class'=>'btn btn-primary btn-block btn-flat'))?>
                                    </div>
                                </div>
                            </div>
                            <?= $this->Form->end()?>

                    </div>
                </div>
            </div>
        </div>
<!-- global js -->

<?php
        echo $this->Html->script(
                array(
                    'jquery.min',
                    'tether.min',
                    '/vendors/bootstrapvalidator/js/bootstrapValidator.min',
                    'vendors/wow/js/wow.min',
                    'pages/login1',
                ),
                array('inline'=>false));
?>


<!-- end of global js-->
</body>

</html>


