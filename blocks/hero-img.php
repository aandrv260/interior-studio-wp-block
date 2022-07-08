<header class="header-alternative" style="background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),  url(<?php echo get_theme_file_uri('/images/header-non-homepage/header-img.jpg') ?>)">
    <div class="hero__header" style="padding-right: 3rem ">
        <a class="hero__logo" href="#">
            <img src="/wp-content/themes/interior-studio-block-theme/images/logos/logo-cropped.png" alt="Лого" />
        </a>
        <!-- {/* Watch the Header / Footer lecture and then add the navigation */} -->
        <div class="lang-selector">
            <span class="lang-selector__label">
                <span class="lang-selector__label--lang-code lang-selector__label--lang-code--active">
                    BG
                </span>
                <span class="lang-selector__label--slash">/</span>
                <span class="lang-selector__label--lang-code">EN</span>
            </span>
        </div>
        <!-- {/* This will be shown on the front-end */}{' '} -->
        <div class="header-alternative__content-box">
            <?php  // Render content edited from the end user in the editor
            echo $content; ?>
        </div>
    </div>
</header>