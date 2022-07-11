import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, Placeholder } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/portfolio-img-80-20', {
  title: 'Portfolio row - 2 Image Cols 80% -20%',

  attributes: {
    longImg: { type: 'object', default: { id: null, url: '' } },
    shortImg: { type: 'object', default: { id: null, url: '' } },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { longImg, shortImg },
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
    const url = fileInfo.url;
    const allowedImgNums = [1, 2];

    // Guard clause if the number passed is not 1 or 2
    if (!allowedImgNums.includes(imageNum)) return;

    imageNum === 1
      ? setAttributes({ shortImg: { id, alt, url } })
      : setAttributes({ longImg: { id, alt, url } });
  };

  const img1SelectHandler = imgInfo => fileInfoObject(imgInfo, 1);
  const img2SelectHandler = imgInfo => fileInfoObject(imgInfo, 2);

  const InspectorControlsOptions = () => {
    return (
      <InspectorControls>
        <PanelBody title="Images">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={shortImg.id} onSelect={img1SelectHandler} render={render} />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={longImg.id} onSelect={img2SelectHandler} render={render} />
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
      <div className="portfolio-project grid grid--80-20">
        <ImageBox image={shortImg} />
        <ImageBox image={longImg} />
      </div>
    </>
  );
}
