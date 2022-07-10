<section class="section--portfolio">
    <div class="container">
        <div class="padding-left-md margin-btm-sm">
            <?php
            $heading = $attributes['heading'];
            $subheading = $attributes['subheading'];
            ?>
            <h2 class="heading--secondary letter-spacing-5"><?php echo $heading; ?></h2>
            <p class="portfolio__subheading"><?php echo $subheading; ?></p>
        </div>
    </div>

    <div class="container">
        <div class="portfolio grid grid--4-cols">
            <?php
            $portfolio_items = new WP_Query(array(
                'post_type' => 'portfolio',
                'posts_per_page' => -1,
                'order_by' => 'title',
                'order' => 'ASC'
            ));

            while ($portfolio_items->have_posts()) {
                $portfolio_items->the_post(); ?>

                <a class="portfolio__img-link" href="<?php the_permalink(); ?>">
                    <img class="portfolio__img" src="<?php echo the_post_thumbnail_url('portfolio_thumbnail') ?>" alt="Снимка на проект 2" />
                    <div class="portfolio__item-details">
                        <span class="portfolio__item-name"><?php the_title(); ?></span>
                    </div>
                </a>
            <?php } ?>
        </div>
    </div>
</section>