<?php
$img_left_col = $attributes['imgLeftCol'];
$img_right_col = $attributes['imgRightCol'];
$images = [$img_left_col, $img_right_col];
?>

<div class="portfolio-project grid grid--2-cols">
    <?php
    foreach ($images as $img) { ?>
        <div class="portfolio-project__img-box">
            <img class="portfolio-project__img" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" />
        </div>
    <?php }
    ?>
</div>