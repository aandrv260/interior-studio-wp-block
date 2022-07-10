<?php
$img1 = $attributes['img1'];
$img2 = $attributes['img2'];
$img3 = $attributes['img3'];
$number_of_imgs = $attributes['numberOfImgs'] ? $attributes['numberOfImgs'] : '1';
$images_direction = $attributes['imagesDirection'] ? $attributes['imagesDirection'] : 'row';
$images = [$img1, $img2, $img3];


?>

<div class="portfolio-project grid grid--2-cols">
    <div class="portfolio-project__img-box">
        <div class="portfolio-project__img-group <?php echo "img-" . $number_of_imgs; ?> <?php echo "img-" . $images_direction; ?>">
            <!-- {/* <img class="portfolio-project__img" src="images/portfolios-project-page/microhome/scheme-1.png" alt="Снимка на схема 1" />

            <img class="portfolio-project__img" src="images/portfolios-project-page/microhome/scheme-1.png" alt="Снимка на схема 1" /> */} -->
            <!-- <ImagesSelected /> -->
            <?php
            foreach ($images as $img) { ?>
                <img class="portfolio-project__img" src="<?php echo $img['url'] ?>" alt="" />
            <?php }
            ?>
        </div>
    </div>

    <div class="portfolio-project__text-box">
        <?php echo $content; ?>
        <?php  ?>
        <!-- {/* <h3 class="portfolio-project__heading">Microhome</h3>
        <p class="portfolio-project__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vero ipsum iusto. Qui
            officia ab commodi minima optio animi reprehenderit voluptate molestias eaque. Sit
            voluptatum eaque odit? Iste, quod illum voluptates facilis alias ab culpa deserunt sint,
            veniam non nam atque quidem? Voluptatum dolore architecto tenetur at commodi ratione
            fuga ipsa adipisci, quidem ea aperiam eum. Doloribus, ad. Aliquam sequi autem, iure
            quidem delectus quibusdam accusantium tenetur veritatis. Consequatur ex reiciendis
            ratione dignissimos aliquam magnam numquam veniam omnis debitis reprehenderit odit
            adipisci rerum delectus maxime iure natus id aliquid, laudantium perspiciatis est fugit
            quisquam eius quia? In neque nihil vitae.
        </p> */} -->
    </div>
</div>