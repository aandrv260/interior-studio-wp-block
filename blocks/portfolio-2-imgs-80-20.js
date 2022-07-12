import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

const defaultImgObj = { id: null, url: '' };

const arrayFromNumOfImages = num => {
  const arr = [];
  let i = 0;

  while (i < Number(num)) {
    i++;
    arr.push(i);
  }

  return arr;
};

registerBlockType('custom-blocks/portfolio-2-imgs-80-20', {
  title: 'Portfolio row - 2 images per Col 80-20%',

  attributes: {
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img3: { type: 'object', default: defaultImgObj },
    img4: { type: 'object', default: defaultImgObj },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

const Image = ({ image }) => (
  <img className="portfolio-project__img" src={image.url} alt={image.alt} />
);

const ImageBox = ({ direction, children }) => (
  <div className="portfolio-project__img-box">
    <div className={`portfolio-project__img-group img-${direction}`}>{children}</div>
  </div>
);

const ColImage = ({ image }) => image.id && <Image image={image} />;

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img1, img2, img3, img4 },
  } = props;

  const allImages = [img1, img2, img3, img4];

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const handleImgChange = (imgInfo, num) => {
    if (![1, 2, 3, 4].includes(num)) return;

    const { id, alt } = imgInfo;
    const url = imgInfo.sizes.large.url || imgInfo.url;

    // setAttributes({ [`img${num}`]: { id, alt, url } });

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
    num === 3 && setAttributes({ img3: { id, alt, url } });
    num === 4 && setAttributes({ img4: { id, alt, url } });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Left Column">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img1.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 1)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img2.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 2)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>

        <PanelBody title="Right Column">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img3.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 3)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img4.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 4)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="portfolio-project grid grid--80-20">
        <ImageBox direction="row">
          <ColImage image={img1} />
          <ColImage image={img2} />
        </ImageBox>

        <ImageBox direction="column">
          <ColImage image={img3} />
          <ColImage image={img4} />
        </ImageBox>
      </div>
    </>
  );
}
