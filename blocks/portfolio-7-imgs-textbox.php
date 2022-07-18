<?php
$imgs_num_left_col = $attributes['imgsNumLeftCol'] ? $attributes['imgsNumLeftCol'] : '2';
$imgs_num_right_col = $attributes['imgsNumRightCol'] ? $attributes['imgsNumRightCol'] : '2';
$has_textbox = $attributes['hasTextbox'] ? $attributes['hasTextbox'] : 'yes';
$textbox_color = $attributes['textBoxColor'] ? $attributes['textBoxColor'] : 'brown';
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$img4 = $attributes['img4'];
$img5 = $attributes['img5'];
$img6 = $attributes['img6'];
$img7 = $attributes['img7'];
$images_left = [$img1, $img2, $img3];
$images_right = [$img4, $img5, $img6, $img7];
?>

<div class="portfolio-project grid grid--2-cols">
    <div class="portfolio-project__img-box">
        <img class="portfolio-project__img" src="<?php echo $img1['url']; ?>" alt="<?php echo $img1['alt']; ?>" />

        <?php
        if ((int)$imgs_num_left_col === 2) { ?>
            <img class="portfolio-project__img" src="<?php echo $img2['url']; ?>" alt="<?php echo $img2['alt']; ?>" />
        <?php } else { ?>
            <div class="portfolio-project__img-group">
                <img class="portfolio-project__img" src="<?php echo $img2['url']; ?>" alt="<?php echo $img2['alt']; ?>" />

                <img class="portfolio-project__img" src="<?php echo $img3['url']; ?>" alt="<?php echo $img3['alt']; ?>" />
            </div>
        <?php }
        ?>
    </div>

    <div class="portfolio-project__combined-box">
        <?php
        if ($has_textbox === 'yes') { ?>

            <div class="portfolio-project__text-box <?php echo "portfolio-project__text-box--{$textbox_color}"; ?>">
                <?php echo $content; ?>
            </div>
        <?php  } ?>

        <div class="portfolio-project__img-box grid grid--<?php echo (int)$imgs_num_right_col === 2 ? '1' : '2'; ?>-cols">
            <?php
            if ((int)$imgs_num_right_col === 2) { ?>
                <img class="portfolio-project__img" src="<?php echo $img4['url']; ?>" alt="<?php echo $img4['alt']; ?>" />

                <img class="portfolio-project__img" src="<?php echo $img5['url']; ?>" alt="<?php echo $img5['alt']; ?>" />

            <?php } else { ?>
                <img class="portfolio-project__img" src="<?php echo $img4['url']; ?>" alt="<?php echo $img4['alt']; ?>" />

                <img class="portfolio-project__img" src="<?php echo $img5['url']; ?>" alt="<?php echo $img5['alt']; ?>" />

                <img class="portfolio-project__img" src="<?php echo $img6['url']; ?>" alt="<?php echo $img6['alt']; ?>" />

                <img class="portfolio-project__img" src="<?php echo $img7['url']; ?>" alt="<?php echo $img7['alt']; ?>" />
            <?php }
            ?>
        </div>
    </div>
</div>