import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/hero', {
  title: 'Hero',
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  const archived = <h1 className="heading--primary">Портфолио</h1>;

  return (
    <header
      className="header-alternative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),  url('/wp-content/themes/interior-studio-block-theme/images/header-non-homepage/header-img.jpg')",
      }}
    >
      <div className="hero__header" style={{ paddingRight: '3rem' }}>
        <a className="hero__logo" href="#">
          <img
            src="/wp-content/themes/interior-studio-block-theme/images/logos/logo-cropped.png"
            alt="Лого"
          />
        </a>

        {/* Watch the Header / Footer lecture and then add the navigation */}

        <div className="lang-selector">
          <span className="lang-selector__label">
            <span className="lang-selector__label--lang-code lang-selector__label--lang-code--active">
              BG
            </span>
            <span className="lang-selector__label--slash">/</span>
            <span className="lang-selector__label--lang-code">EN</span>
          </span>
        </div>
        {/* This lets you click the + symbol on the editor to start adding new blocks inside the main block */}
        <div className="header-alternative__content-box">
          <InnerBlocks
            allowedBlocks={['custom-blocks/generic-heading', 'custom-blocks/generic-button']}
          />
        </div>
      </div>
    </header>
  );
}

function SaveComponent() {
  return (
    <header
      className="header-alternative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),  url('/wp-content/themes/interior-studio-block-theme/images/header-non-homepage/header-img.jpg')",
      }}
    >
      <div className="hero__header" style={{ paddingRight: '3rem' }}>
        <a className="hero__logo" href="#">
          <img
            src="/wp-content/themes/interior-studio-block-theme/images/logos/logo-cropped.png"
            alt="Лого"
          />
        </a>
        {/* Watch the Header / Footer lecture and then add the navigation */}
        <div className="lang-selector">
          <span className="lang-selector__label">
            <span className="lang-selector__label--lang-code lang-selector__label--lang-code--active">
              BG
            </span>
            <span className="lang-selector__label--slash">/</span>
            <span className="lang-selector__label--lang-code">EN</span>
          </span>
        </div>
        {/* This will be shown on the front-end */}{' '}
        <div className="header-alternative__content-box">
          <InnerBlocks.Content />{' '}
        </div>
      </div>
    </header>
  );
}
