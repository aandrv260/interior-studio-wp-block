<?php
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$number_of_imgs = $attributes['numberOfImgs'] ? $attributes['numberOfImgs'] : '1';
$images_direction = $attributes['imagesDirection'] ? $attributes['imagesDirection'] : 'row';
$img_side = $attributes['imgSide'] ? $attributes['imgSide'] : 'left';
$images = [$img1, $img2, $img3];

?>

<div class="portfolio-project grid grid--2-cols">
    <?php
    if ($img_side === 'left') { ?>
        <div class="portfolio-project__img-box">
            <div class="portfolio-project__img-group <?php echo "img-" . $number_of_imgs; ?> <?php echo "img-" . $images_direction; ?>">
                <?php
                foreach ($images as $img) { ?>
                    <img class="portfolio-project__img" src="<?php echo $img['url'] ?>" alt="" />
                <?php }
                ?>
            </div>
        </div>

        <div class="portfolio-project__text-box">
            <?php echo $content; ?>
        </div>
    <?php } elseif ($img_side === 'right') { ?>
        <div class="portfolio-project__text-box">
            <?php echo $content; ?>
        </div>

        <div class="portfolio-project__img-box">
            <div class="portfolio-project__img-group <?php echo "img-" . $number_of_imgs; ?> <?php echo "img-" . $images_direction; ?>">
                <?php
                foreach ($images as $img) { ?>
                    <img class="portfolio-project__img" src="<?php echo $img['url'] ?>" alt="" />
                <?php }
                ?>
            </div>
        </div>
    <?php }
    ?>

</div>