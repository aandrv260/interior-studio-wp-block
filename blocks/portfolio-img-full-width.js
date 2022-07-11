import { registerBlockType } from '@wordpress/blocks';

import { Button, PanelBody, PanelRow } from '@wordpress/components';
import {
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
} from '@wordpress/block-editor';

registerBlockType('custom-blocks/portfolio-img-full-width', {
  title: 'Portfolio Image Full Width',

  attributes: {
    image: { type: 'object', default: { id: null, url: '' } },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { image },
  } = props;

  const selectImageHandler = imgInfo => {
    const { id } = imgInfo;
    const url = imgInfo.sizes.large.url;

    setAttributes({ image: { id, url } });
  };

  const render = ({ open }) => (
    <Button variant="primary" onClick={open}>
      {image.id ? 'Replace Image' : 'Change Image'}
    </Button>
  );

  const InspectorOptions = () => {
    return (
      <InspectorControls>
        <PanelBody title="Image">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload onSelect={selectImageHandler} value={image.id} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  };

  return (
    <>
      <InspectorOptions />
      <div className="portfolio-project grid grid--1-col">
        <div className="portfolio-project__img-box portfolio-project__img-box--full-width">
          <img className="portfolio-project__img" src={image.url} alt="abc" />
        </div>
      </div>
    </>
  );
}
