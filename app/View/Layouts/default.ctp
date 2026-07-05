<!doctype html>
<html class="no-js" lang="en">

<head>
	<meta charset="UTF-8">
	<title>MiBoo</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="<?= $this->Html->url('/img/logo1.ico')?>" type="image/x-icon">
	<link rel="apple-touch-icon" sizes="180x180" href="<?= $this->Html->url('/img/apple-touch-icon.png')?>">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= $this->Html->url('/img/favicon-32x32.png')?>">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= $this->Html->url('/img/favicon-16x16.png')?>">
	<link rel="manifest" href="<?= $this->Html->url('site.webmanifest')?>/">

	<!--global styles-->
	<?= $this->Html->css(
		array(
			'components','custom'
		)
	)
	?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<?= $this->fetch('css')?>

	<style>
		@media (max-width: 768px) {
			.outer {
				width: 100% !important;
				padding-left: 0 !important;
				padding-right: 0 !important;
			}
			.inner {
				padding-left: 0 !important;
				padding-right: 0 !important;
			}
			.card-body {
				padding-left: 0 !important;
				padding-right: 0 !important;
			}
			#content {
				padding-left: 1% !important;
				padding-right: 1% !important;
			}
			.card {
				margin-left: 0 !important;
				margin-right: 0 !important;
				border-left: 0 !important;
				border-right: 0 !important;
			}
		}
	</style>
</head>

<body class="body fixedNav_position fixedMenu_left">
<div id="wrap">
	<div id="top" class="fixed">
		<!-- .navbar -->
		<nav class="navbar navbar-static-top">
			<div class="container-fluid m-0">
				<a class="navbar-brand" href="index.html">
					<h4><img src="<?= $this->Html->url('/img/miboo_logo.png')?>" class="admin_img" alt="logo"></h4>
				</a>
				<div class="menu mr-sm-auto">
                    <span class="toggle-left" id="menu-toggle">
                        <i class="fa fa-bars"></i>
                    </span>
				</div>
			</div>
			<!-- /.container-fluid -->
		</nav>
		<!-- /.navbar -->
		<!-- /.head -->
	</div>
	<!-- /#top -->
	<div class="wrapper fixedNav_top">
		<?= $this->Element('menu')?>
		<!-- /#left -->
		<div id="content" class="bg-container">
			<header class="head">
				<div class="main-bar">
					<div class="row no-gutters">
						<div class="col-12">
							<h4 class="nav_top_align">
								<?= $titulo_seccion?>
							</h4>
						</div>
					</div>
				</div>
			</header>
			<?= $this->Flash->render(); ?>
			<?= $this->fetch('content')?>
		</div>
		<!-- /.inner -->
	</div>
</div>
<!-- /#wrap -->
<!-- global scripts-->
<?= $this->Html->script(
	array(
		'components','custom'
	)
)
?>
<!--End of global scripts-->
<!--end of global scripts-->
<!--  plugin scripts -->
<?= $this->fetch('script')?>
<!--end of plugin scripts-->
</body>

</html>
