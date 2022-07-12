<?php
$imgs_num = $attributes['imgsNum'] ? $attributes['imgsNum'] : '2';
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$img4 = $attributes['img4'];
$images = [$img1, $img2, $img3, $img4];
$img1_label = $attributes['img1Label'];
echo $img1_label;
$img2_label = $attributes['img2Label'];
$img3_label = $attributes['img3Label'];
$img4_label = $attributes['img4Label'];
$heading = $attributes['heading'];
?>

<div class="portfolio-img-grid">
    <h3 class="portfolio-img-grid__heading"><?php echo $heading; ?></h3>

    <div class="grid grid--<?php echo $imgs_num; ?>-cols">
        <?php
        foreach ($images as $i => $img) {
            if ($img['id']) { ?>
                <div>
                    <img class="portfolio-img-grid__img" src="<?php echo $img['url']; ?>" alt="<?php echo $img['url']; ?>" />
                    <!-- <span class="portfolio-img-grid__label">{props.attributes[`img${num}Label`]}</span> -->
                    <span class="portfolio-img-grid__label">
                        <?php
                        switch ($i) {
                            case 0:
                                echo $img1_label;
                                break;
                            case 1:
                                echo $img2_label;
                                break;
                            case 2:
                                echo $img3_label;
                                break;
                            case 3:
                                echo $img4_label;
                                break;
                            default:
                                echo 'undefined';
                        }
                        ?>
                    </span>
                </div>
        <?php }
        }
        ?>
    </div>

    <div class="portfolio-img-grid__description">
        <?php
        echo $content;
        ?>
    </div>
</div>