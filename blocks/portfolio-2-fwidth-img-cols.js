import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, Placeholder } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/portfolio-2-fwidth-img-cols', {
  title: 'Portfolio row - 2 full width images',

  attributes: {
    imgLeftCol: { type: 'object', default: { id: null, url: '' } },
    imgRightCol: { type: 'object', default: { id: null, url: '' } },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { imgLeftCol, imgRightCol },
  } = props;

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const fileInfoObject = (fileInfo, imageNum) => {
    const { id, alt } = fileInfo;
    const url = fileInfo.sizes.large.url;
    const allowedImgNums = [1, 2];

    // Guard clause if the number passed is not 1 or 2
    if (!allowedImgNums.includes(imageNum)) return;

    imageNum === 1
      ? setAttributes({ imgLeftCol: { id, alt, url } })
      : setAttributes({ imgRightCol: { id, alt, url } });
  };

  console.log(imgLeftCol, imgRightCol);

  const img1SelectHandler = imgInfo => fileInfoObject(imgInfo, 1);
  const img2SelectHandler = imgInfo => fileInfoObject(imgInfo, 2);

  const InspectorControlsOptions = () => {
    return (
      <InspectorControls>
        <PanelBody title="Images">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={imgLeftCol.id} onSelect={img1SelectHandler} render={render} />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={imgRightCol.id} onSelect={img2SelectHandler} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  };

  const ImageBox = ({ image }) => (
    <div className="portfolio-project__img-box">
      <img className="portfolio-project__img" src={image.url} alt={image.alt} />
    </div>
  );

  return (
    <>
      <InspectorControlsOptions />
      <div className="portfolio-project grid grid--2-cols">
        <ImageBox image={imgLeftCol} />
        <ImageBox image={imgRightCol} />
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
