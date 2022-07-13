<?php
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];

?>

<div class="portfolio-project grid grid--2-cols" style="color: #111">
    <div class="portfolio-project__img-box">
        <div class="portfolio-project__img-group">
            <?php
            render_image($img1);
            render_image($img2);
            ?>
        </div>

        <?php render_image($img3); ?>
    </div>

    <div class="portfolio-project__text-box"><?php echo $content; ?></div>
</div>