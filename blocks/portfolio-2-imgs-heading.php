<?php
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img1_label = $attributes['img1Label'];
$img2_label = $attributes['img2Label'];


?>

<div class="container">
    <div class="portfolio-project gap-48 grid grid--2-cols" style="color: #111">
        <div class="portfolio-project__img-box">
            <?php if ($img1['id']) {
                render_image($img1);
                render_img_label($img1_label);
            }
            ?>
        </div>

        <div class="portfolio-project__img-box">
            <?php
            render_image($img2);
            render_img_label($img2_label);
            ?>
        </div>
    </div>
</div>