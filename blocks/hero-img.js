import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

const { serverSideRender: ServerSideRender } = wp;

registerBlockType('custom-blocks/hero-img', {
  title: 'Hero',
  supports: {
    align: ['full'],
  },

  attributes: {
    align: { type: 'string', default: 'full' },
    bgImgID: { type: 'number' },
    bgImgURL: {
      type: 'string',
      default: window.hero_img.fallback_img,
      //   '/wp-content/themes/interior-studio-block-theme/images/header-non-homepage/header-img.jpg',
    },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { bgImgID, bgImgURL },
  } = props;

  const InspectorControlsOptions = () => {
    const render = ({ open }) => {
      // WordPress gives us open object which when we pass to the onClick will open the traditional file select modal
      return (
        <Button variant="primary" onClick={open}>
          Choose Image
        </Button>
      );
    };

    // Later use REST API to fetch the img data and display the name of the image above the button with -> useEffect()

    const onFileSelect = imgInfo => {
      const { id } = imgInfo;
      const url = imgInfo.sizes.large.url;
      console.log(imgInfo);

      // Update block attribute
      setAttributes({ bgImgID: id, bgImgURL: url });
    };

    return (
      <InspectorControls>
        <PanelBody title="Background Image" initialOpen>
          <PanelRow>
            {/* This checks if the current logged in user has permissions to upload media */}
            <MediaUploadCheck>
              {/* Value is Img ID. This indicates which image the end user has already chosen */}
              {/* onSelect -> We give it a function and WP will call that function whenever the user selects which image they want to use */}
              <MediaUpload onSelect={onFileSelect} value={bgImgID} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  };

  return (
    <>
      <InspectorControlsOptions />
      <header
        className="header-alternative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),  url(${bgImgURL})`,
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
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}

//<header
// className="header-alternative"
//style={{
//  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),  url(${bgImgURL})`,
//  }}
// >
//<div className="hero__header" style={{ paddingRight: '3rem' }}>
//  <a className="hero__logo" href="#">
//  <img
//   src="/wp-content/themes/interior-studio-block-theme/images/logos/logo-cropped.png"
//  alt="Лого"
///>
// </a>
//{/* Watch the Header / Footer lecture and then add the navigation */}
// <div className="lang-selector">
//  <span className="lang-selector__label">
//    <span className="lang-selector__label--lang-code lang-selector__label--lang-code--active">
//      BG
//  </span>
// <span className="lang-selector__label--slash">/</span>
//  <span className="lang-selector__label--lang-code">EN</span>
//  </span>
// </div>
// {/* This will be shown on the front-end */}{' '}
// <div className="header-alternative__content-box">
//    <InnerBlocks.Content />{' '}
//  </div>
//</div>
// </header>
