<?php
$short_img = $attributes['shortImg'];
$long_img = $attributes['longImg'];
$images = [$short_img, $long_img];
?>

<div class="portfolio-project grid grid--80-20">
    <?php
    foreach ($images as $img) { ?>
        <div class="portfolio-project__img-box">
            <img class="portfolio-project__img" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" />
        </div>
    <?php }
    ?>
</div>