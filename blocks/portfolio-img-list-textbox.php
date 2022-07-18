<?php
$img = $attributes['img'];
$listItems = $attributes['listItems'];
$item1 = $listItems['item1'];
$item2 = $listItems['item2'];
$item3 = $listItems['item3'];
$item4 = $listItems['item4'];
$item5 = $listItems['item5'];
$item6 = $listItems['item6'];
$item7 = $listItems['item7'];
$item8 = $listItems['item8'];
$item9 = $listItems['item9'];
$item10 = $listItems['item10'];
$item11 = $listItems['item11'];
$item12 = $listItems['item12'];
$all_list_items = array($item1, $item2, $item3, $item4, $item5, $item6, $item7, $item8, $item9, $item10, $item11, $item12);
?>

<div class="portfolio-project grid grid--2-cols">
    <div class="portfolio-project__img-box">
        <div class="portfolio-project__img-group">
            <ol class="portfolio-project__num-list">
                <?php
                foreach ($all_list_items as $list_item) { ?>
                    <li class="portfolio-project__num-list-item"><?php echo $list_item; ?></li>
                <?php } ?>
            </ol>

            <?php render_image($img); ?>
        </div>

    </div>

    <?php render_textbox($content); ?>

</div>