<?php
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$img4 = $attributes['img4'];
?>

<div class="portfolio-project grid grid--80-20">
    <div class="portfolio-project__img-box">
        <div class="portfolio-project__img-group img-row">
            <?php
            render_image($img1);
            render_image($img2);
            ?>
        </div>

    </div>

    <div class="portfolio-project__img-box">
        <div class="portfolio-project__img-group img-column">
            <?php
            render_image($img3);
            render_image($img4);
            ?>
        </div>
    </div>
</div>