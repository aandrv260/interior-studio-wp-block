import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

const initialImgObject = { id: null, url: '', alt: '' };

registerBlockType('custom-blocks/portfolio-2-imgs-2-cols', {
  title: 'Portfolio row - 2 Image Cols with 2 images',

  attributes: {
    imgCol2border: { type: 'string', default: 'none' }, // none or left,
    imagesCol2Direction: { type: 'string', default: 'row' },
    img1: { type: 'object', default: initialImgObject },
    img2: { type: 'object', default: initialImgObject },
    img3: { type: 'object', default: initialImgObject },
    img4: { type: 'object', default: initialImgObject },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { imgCol2border, imgLeftCol, img1, img2, img3, img4, imagesCol2Direction },
  } = props;

  const selectBorderOptions = [
    { value: 'none', label: 'None' },
    { value: 'left', label: 'Left' },
  ];

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const handleImgChange = (imgInfo, num) => {
    const permitedNums = [1, 2, 3, 4];

    if (!permitedNums.includes(num)) return;

    const { id, alt } = imgInfo;
    const url = imgInfo.sizes.large.url || imgInfo.url;

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
    num === 3 && setAttributes({ img3: { id, alt, url } });
    num === 4 && setAttributes({ img4: { id, alt, url } });
  };

  const ImageBox = ({ side }) => {
    return (
      <div className="portfolio-project__img-box">
        <div className="portfolio-project__img-group img-2 img-column">
          {(side === 'left' || !side) && (
            <>
              <img className="portfolio-project__img" src={img1.url} alt={img1.alt} />
              <img className="portfolio-project__img" src={img2.url} alt={img2.alt} />
            </>
          )}

          {side === 'right' && (
            <>
              <img className="portfolio-project__img" src={img3.url} alt={img3.alt} />
              <img className="portfolio-project__img" src={img4.url} alt={img4.alt} />
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="General Options" initialOpen>
          <PanelRow>
            <SelectControl
              label="Right column border"
              options={selectBorderOptions}
              value={imgCol2border}
              onChange={value => setAttributes({ imgCol2border: value })}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Left column" initialOpen>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={fileInfo => handleImgChange(fileInfo, 1)}
                value={img1.id}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={fileInfo => handleImgChange(fileInfo, 2)}
                value={img2.id}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>

        <PanelBody title="Right column" initialOpen>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={fileInfo => handleImgChange(fileInfo, 3)}
                value={img3.id}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={fileInfo => handleImgChange(fileInfo, 4)}
                value={img4.id}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="portfolio-project grid grid--2-cols">
        <ImageBox />
        <ImageBox side="right" />
      </div>
    </>
  );
}
