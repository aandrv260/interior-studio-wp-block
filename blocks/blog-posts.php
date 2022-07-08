<section class="section--blog-articles">
    <div class="text-center margin-btm-lg-2">
        <h2 class="heading--secondary"><?php echo $attributes['heading'] ?></h2>
        <!-- <h2 class="heading--secondary">Полезни статии</h2> -->
    </div>

    <div class="container">
        <div class="articles grid grid--3-cols">
            <?php
            // Loop through all of the posts in the blog 
            // and output the post info on the blog page itself
            while (have_posts()) {
                the_post(); ?>

                <div class="article">
                    <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>" alt="Снимка на статията" class="article__img" />
                    <h3 class="article__heading"><?php the_title(); ?></h3>
                    <p class="article__desc">
                        <?php output_excerpt() ?>
                    </p>
                    <a href="<?php the_permalink(); ?>" class="article__link">Прочети повече &rarr;</a>
                </div>


            <?php }

            ?>



            <!-- <div class="article">
                <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>"
                    alt="Снимка на статията" class="article__img" />
                <h3 class="article__heading">Примерно заглавие</h3>
                <p class="article__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, odio itaque optio
                    culpa ab cum.
                </p>
                <a href="#" class="article__link">Прочети &rarr;</a>
            </div>

            <div class="article">
                <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>"
                    alt="Снимка на статията" class="article__img" />
                <h3 class="article__heading">Примерно заглавие</h3>
                <p class="article__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, odio itaque optio
                    culpa ab cum.
                </p>
                <a href="#" class="article__link">Прочети &rarr;</a>
            </div>

            <div class="article">
                <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>"
                    alt="Снимка на статията" class="article__img" />
                <h3 class="article__heading">Примерно заглавие</h3>
                <p class="article__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, odio itaque optio
                    culpa ab cum.
                </p>
                <a href="#" class="article__link">Прочети &rarr;</a>
            </div>

            <div class="article">
                <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>"
                    alt="Снимка на статията" class="article__img" />
                <h3 class="article__heading">Примерно заглавие</h3>
                <p class="article__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, odio itaque optio
                    culpa ab cum.
                </p>
                <a href="#" class="article__link">Прочети &rarr;</a>
            </div>

            <div class="article">
                <img src="<?php echo get_theme_file_uri('images/header-non-homepage/header-img.jpg') ?>"
                    alt="Снимка на статията" class="article__img" />
                <h3 class="article__heading">Примерно заглавие</h3>
                <p class="article__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, odio itaque optio
                    culpa ab cum.
                </p>
                <a href="#" class="article__link">Прочети &rarr;</a>
            </div> -->
        </div>
    </div>
</section>