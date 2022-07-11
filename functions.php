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
    add_theme_support('editor-styles');
    add_editor_style(array('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet', 'build/style-index.css', 'build/style-index.css.map'));
}

add_action('after_setup_theme', 'features');

function insert_asset_files()
{
    // Adding CSS styles
    wp_enqueue_style('google_font', '//fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet');
    wp_enqueue_style('main_styles', get_theme_file_uri('/build/style-index.css'));
}

add_action('wp_enqueue_scripts', 'insert_asset_files');

// function hero_img()
// {
//     wp_register_script('hero_img_script', get_stylesheet_directory_uri() . "/build/hero-img.js", array('wp-blocks', 'wp-editor'));

//     register_block_type('custom-blocks/hero', array(
//         'editor_script' => 'hero_img_script'
//     ));
// }

// add_action('init', 'hero_img');

// class CustomBlock
// {
//     function __construct($name, $render_callback = NULL)
//     {
//         $this->name = $name;
//         $this->render_callback = $render_callback;
//         add_action('init',  [$this, 'on_init']);
//     }

//     // args -> block attributes, if we have a block which has other blocks inside it, we need to access that content
//     function our_render_callback($attributes, $content)
//     {
//         print_r('affrender');
//         ob_start();
//         require get_theme_file_path("/blocks/{$this->name}.php");
//         return ob_get_clean();
//     }

//     function on_init()
//     {
//         wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
//         $our_args = array(
//             'editor_script' => $this->name,
//         );

//         if ($this->render_callback) {
//             $our_args['render_callback'] = [$this, 'our_render_callback'];
//         }

//         register_block_type("custom-blocks/{$this->name}", $our_args);
//     }
// }

class PlaceholderBlock
{
    function __construct($name)
    {
        $this->name = $name;
        add_action('init', [$this, 'on_init']);
    }

    function our_render_callback($attributes, $content)
    {
        ob_start();
        require get_theme_file_path("/blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function on_init()
    {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        register_block_type("custom-blocks/{$this->name}", array(
            'editor_script' => $this->name,
            'render_callback' => [$this, 'our_render_callback'],
        ));
    }
}

new PlaceholderBlock('header-only-nav');
// new PlaceholderBlock('blog-posts');

class CustomBlock
{
    function __construct($name, $render_callback = NULL, $data = NULL)
    {
        $this->name = $name;
        $this->data = $data;

        $this->render_callback = $render_callback;
        add_action('init', [$this, 'on_init']);
    }

    function our_render_callback($attributes, $content)
    {
        ob_start();
        require get_theme_file_path("/blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function on_init()
    {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        if ($this->data) {
            wp_localize_script($this->name, str_replace('-', '_', $this->name), $this->data);
        }

        $our_args = array(
            'editor_script' => $this->name,
        );

        if ($this->render_callback) {
            $our_args['render_callback'] = [$this, 'our_render_callback'];
        }

        register_block_type("custom-blocks/{$this->name}", $our_args);
    }
}

// Hero
new CustomBlock('hero-img', true, ['fallback_img' => get_theme_file_uri('/images/header-non-homepage/header-img.jpg')]);
new CustomBlock('hero-video', true);

// Generic Block
new CustomBlock('generic-heading');
new CustomBlock('generic-description');
new CustomBlock('generic-button');

// Blog
new CustomBlock('blog-posts', true);

// Sections
new CustomBlock('contacts-section', true);
new CustomBlock('services-section', true);
new CustomBlock('section-about', true);
new CustomBlock('section-heading');
new CustomBlock('section-description');
new CustomBlock('section-team', true);

// Portfolio
new CustomBlock('portfolio-items', true);
new CustomBlock('portfolio-header', true);
new CustomBlock('portfolio-row-img-text', true);
new CustomBlock('portfolio-2-img-cols', true);
new CustomBlock('portfolio-img-full-width', true);
