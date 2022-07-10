import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/portfolio-header', {
  title: 'Portfolio Header',
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
      <header class="header-portfolio-img-only" style={{ backgroundImage: `url(${bgImgURL})` }}>
        <InnerBlocks allowedBlocks={['custom-blocks/generic-heading']} />
      </header>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
