<?php
$menu= $_GET['menu'] ?? '';

$halaman = [
    'P' => 'pendaftaran.php',
    'B' => 'belanja.php'
];
?>
<!doctype html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="id" lang="id" >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Apotek Healthy</title>
    </head>
    <body>
        <h1>Sistem menu Apotek Healthy</h1>
        <div style="border : 0.1px solid #000;padding: 3px;">
            <a href="?menu=P" style ="text-decoration: none;">Pendaftaran</a> |
        </div>
        <div style="border : 0.1px solid #000;padding: 3px;">
            <a href="?menu=B" style ="text-decoration: none;">Belanja</a> |
        </div>
        <div id = "konten">
            <?php
            if(is_string($menu) && isset($halaman[$menu])){
                require __DIR__ . DIRECTORY_SEPARATOR . $halaman[$menu];
            }
            ?>
        </div>     
    </body>
</html> 