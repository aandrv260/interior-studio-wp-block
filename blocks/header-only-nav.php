<header class="main-nav--no-hero">
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
</header>