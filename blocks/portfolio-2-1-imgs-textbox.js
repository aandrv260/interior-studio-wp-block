// WP Components
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { PanelBody, PanelRow } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

// Custom Components
import render from '../assets/components/render';
import PortfolioImage from '../assets/components/Image';
import { ImageBox, TextBox, ImageGroup } from '../assets/components/PortfolioBoxes';

const defaultImgObj = { url: '', alt: '', id: null };

registerBlockType('custom-blocks/portfolio-2-1-imgs-textbox', {
  title: 'Portfolio row - 2 horizontal, 1 vertical images with Textbox',

  attributes: {
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img3: { type: 'object', default: defaultImgObj },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img1, img2, img3 },
  } = props;

  const imgSelectHandler = (fileInfo, num) => {
    const allowedNums = [1, 2, 3];
    if (!allowedNums.includes(num)) return;

    const { id, alt } = fileInfo;
    const url = fileInfo.sizes.large.url || fileInfo.url;

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
    num === 3 && setAttributes({ img3: { id, alt, url } });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Images" initialOpen>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                title="Image 1"
                value={img1.id}
                onSelect={fileInfo => imgSelectHandler(fileInfo, 1)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                title="Image 2"
                value={img2.id}
                onSelect={fileInfo => imgSelectHandler(fileInfo, 2)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                title="Image 3"
                value={img3.id}
                onSelect={fileInfo => imgSelectHandler(fileInfo, 3)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="container">
        <div className={`portfolio-project grid grid--2-cols`} style={{ color: '#111' }}>
          <ImageBox>
            <ImageGroup>
              <PortfolioImage image={img1} />
              <PortfolioImage image={img2} />
            </ImageGroup>

            <PortfolioImage image={img3} />
          </ImageBox>

          <TextBox>
            <InnerBlocks allowedBlocks={['core/paragraph', 'core/heading']} />
          </TextBox>
        </div>
      </div>
    </>
  );
}
