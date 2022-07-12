import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, TextareaControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

//
import render from '../assets/components/render';
import PortfolioImage from '../assets/components/Image';

const defaultImgObj = { url: '', alt: '', id: null };

registerBlockType('custom-blocks/portfolio-img-list-textbox', {
  title: 'Portfolio row - List with Image and Textbox',

  attributes: {
    img: { type: 'object', default: defaultImgObj },
    listItems: { type: 'string', default: '' },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img, listItems },
  } = props;

  const imgSelectHandler = fileInfo => {
    const { id, alt } = fileInfo;
    const url = fileInfo.sizes.large.url || fileInfo.url;

    setAttributes({ img: { id, alt, url } });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Left Column" initialOpen>
          <PanelRow>
            <TextareaControl
              label="List items"
              value={listItems}
              onChange={value => setAttributes({ listItems: value })}
            />
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={img.id} onSelect={imgSelectHandler} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div>
        <div>{listItems}</div>
      </div>
    </>
  );
}
