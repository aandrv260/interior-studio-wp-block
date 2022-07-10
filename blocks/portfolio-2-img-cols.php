<?php
$img_left_col = $attributes['imgLeftCol'];
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$number_of_imgs = $attributes['numberOfImgs'] ? $attributes['numberOfImgs'] : '1';
$images_direction = $attributes['imagesDirection'] ? $attributes['imagesDirection'] : 'row';
$img_side = $attributes['imgCol2Side'] ? $attributes['imgCol2Side'] : 'left';
$img_col2_border = $attributes['imgCol2border'] ? $attributes['imgCol2border'] : 'none';
$images = [$img1, $img2, $img3];
echo $img_col2_border;
?>

<div class="portfolio-project grid grid--2-cols">
    <?php
    if ($img_side === 'left') { ?>
        <div class="portfolio-project__img-box">
            <img class="portfolio-project__img" src="<?php echo $img_left_col['url']; ?>" alt="Снимка на схема 1" />
        </div>

        <div class="portfolio-project__img-box">
            <div class="portfolio-project__img-group portfolio-project__img-group--col portfolio-project__img-group--border-<?php echo $img_col2_border; ?> img-${numberOfCol2Imgs} img-${imagesCol2Direction">
                <?php
                // -> Foreach loop
                foreach ($images as $img) {
                    if ($img) { ?>

                        <img class="portfolio-project__img" src="<?php echo $img['url'] ?>" alt="" />
                <?php   }
                }
                ?>
            </div>
        </div>
    <?php  } elseif ($img_side === 'right') { ?>
        <div class="portfolio-project__img-box">
            <div class="portfolio-project__img-group portfolio-project__img-group--col portfolio-project__img-group--border-<?php echo $img_col2_border; ?> img-${numberOfCol2Imgs} img-${imagesCol2Direction">
                <?php
                // -> Foreach loop
                foreach ($images as $img) {
                    if ($img) { ?>

                        <img class="portfolio-project__img" src="<?php echo $img['url'] ?>" alt="" />
                <?php   }
                }
                ?>
            </div>
        </div>

        <div class="portfolio-project__img-box">
            <img class="portfolio-project__img" src="<?php echo $img_left_col['url']; ?>" alt="Снимка на схема 1" />
        </div>
    <?php } ?>
</div>