import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

//
import render from '../assets/components/render';
import PortfolioImage from '../assets/components/Image';

const defaultImgObj = { url: '', alt: '', id: null };

registerBlockType('custom-blocks/portfolio-2-imgs-heading', {
  title: 'Portfolio row - 2 Images with Heading',

  attributes: {
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img1Label: { type: 'string', default: '' },
    img2Label: { type: 'string', default: '' },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

const ImageBox = ({ direction, children }) => (
  <div className="portfolio-project__img-box">{children}</div>
);

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img1, img2, img1Label, img2Label },
  } = props;

  const imgSelectHandler = (fileInfo, num) => {
    const allowedNums = [1, 2];
    if (!allowedNums.includes(num)) return;

    const { id, alt } = fileInfo;
    const url = fileInfo.sizes.large?.url || fileInfo.url;

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
  };

  const ImageLabel = ({ text }) => <p className="portfolio-project__label">{text}</p>;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Left Column" initialOpen>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img1.id}
                onSelect={fileInfo => imgSelectHandler(fileInfo, 1)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Image label"
              value={img1Label}
              onChange={value => setAttributes({ img1Label: value })}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img2.id}
                onSelect={fileInfo => imgSelectHandler(fileInfo, 2)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Image label"
              value={img2Label}
              onChange={value => setAttributes({ img2Label: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="container">
        <div className={`portfolio-project gap-48 grid grid--2-cols`} style={{ color: '#111' }}>
          <ImageBox>
            <PortfolioImage image={img1} />
            <ImageLabel text={img1Label} />
          </ImageBox>

          <ImageBox>
            <PortfolioImage image={img2} />
            <ImageLabel text={img2Label} />
          </ImageBox>
        </div>
      </div>
    </>
  );
}
