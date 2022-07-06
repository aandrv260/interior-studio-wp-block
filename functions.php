<?php



function output_excerpt()
{
    if (has_excerpt()) {
        echo get_the_excerpt();
    } else {
        echo wp_trim_words(get_the_content(), 10);
    }
}

function output_thumbnail()
{
    if (has_post_thumbnail()) {
        echo get_the_post_thumbnail();
    }
}

function output_main_nav($isOnlyNav)
{
    function main_nav_list()
    { ?>
        <nav>

            <ul class="main-nav__list">
                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (is_front_page()) echo ' main-nav__link--active' ?>" href="<?php echo site_url() ?>">Начало</a>
                </li>

                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (get_post_type() === 'portfolio') echo ' main-nav__link--active' ?>" href="<?php echo get_post_type_archive_link('portfolio') ?>">
                        <span>Портфолио</span>
                    </a>
                </li>

                <li class="main-nav__list-item">
                    <a class="main-nav__link" href="#">
                        <span>Проекти</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="main-nav__link-icon" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                    </a>

                    <ul class="main-nav__submenu" style="width: 28rem">
                        <li class="main-nav__submenu-item">
                            <a class="main-nav__link" href="#">Кухня</a>
                        </li>

                        <li class="main-nav__submenu-item">
                            <a class="main-nav__link" href="#">Апартаменти</a>
                        </li>

                        <li class="main-nav__submenu-item">
                            <a class="main-nav__link" href="#">Обществени обекти</a>
                        </li>
                    </ul>
                </li>

                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (is_page('services')) echo ' main-nav__link--active'; ?>" href="<?php echo site_url('/services') ?>">Услуги</a>
                </li>
                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (get_post_type() === 'post') echo ' main-nav__link--active' ?>" href="<?php echo site_url('/blog'); ?>">Блог</a>
                </li>
                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (is_page('contact-us')) echo ' main-nav__link--active' ?>" href="<?php echo site_url('/contact-us') ?>">Контакти</a>
                </li>
                <li class="main-nav__list-item">
                    <a class="main-nav__link<?php if (is_page('about-us')) echo ' main-nav__link--active'; ?>" href="<?php echo site_url('/about-us') ?>">За нас</a>
                </li>
            </ul>
        </nav>
    <?php }

    if ($isOnlyNav) { ?>
        <header class="main-nav--no-hero">
            <?php main_nav_list(); ?>
        </header>
<?php } else {
        main_nav_list();
    }
}

function features()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails'); // Allow thumbnails on the normal posts
    add_image_size('portfolio_thumbnail', 325, 505, true); // Portfolio thumbnail
}

add_action('after_setup_theme', 'features');

function insert_asset_files()
{
    // Adding CSS styles
    wp_enqueue_style('google_font', 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet');
    wp_enqueue_style('main_styles', get_theme_file_uri('/public/css/app.css'));
}

add_action('wp_enqueue_scripts', 'insert_asset_files');
