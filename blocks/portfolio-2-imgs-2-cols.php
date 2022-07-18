<?php
$img_col2_border = $attributes['imgCol2border'] ? $attributes['imgCol2border'] : 'none';
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$img4 = $attributes['img4'];
?>
<div class="portfolio-project grid grid--2-cols">
    <?php
    render_img_box_2images($img1, $img2);
    render_img_box_2images($img3, $img4);
    ?>
</div>