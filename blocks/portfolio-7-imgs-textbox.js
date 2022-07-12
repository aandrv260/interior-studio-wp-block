import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

const defaultImgObj = { url: '', alt: '', id: null };

registerBlockType('custom-blocks/portfolio-7-imgs-textbox', {
  title: 'Portfolio row - 7 images and Textbox',

  attributes: {
    imgsNumLeftCol: { type: 'string', default: '2' },
    imgsNumRightCol: { type: 'string', default: '2' },
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img3: { type: 'object', default: defaultImgObj },
    img4: { type: 'object', default: defaultImgObj },
    img5: { type: 'object', default: defaultImgObj },
    img6: { type: 'object', default: defaultImgObj },
    img7: { type: 'object', default: defaultImgObj },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

const Image = ({ image }) => (
  <img className="portfolio-project__img" src={image.url} alt={image.alt} />
);

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { imgsNumLeftCol, imgsNumRightCol, img1, img2, img3, img4, img5, img6, img7 },
  } = props;

  const allImages = [img1, img2, img3, img4, img5, img6, img7];

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const { leftColImgOptions, rightColImgOptions } = {
    leftColImgOptions: [
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],

    rightColImgOptions: [
      { value: '2', label: '2' },
      { value: '4', label: '4' },
    ],
  };

  const handleImgChange = (imgInfo, num) => {
    const permitedNums = [1, 2, 3, 4, 5, 6, 7];

    if (!permitedNums.includes(num)) return;

    const { id, alt } = imgInfo;
    const url = imgInfo.sizes.large.url || imgInfo.url;

    // setAttributes({ [`img${num}`]: { id, alt, url } });

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
    num === 3 && setAttributes({ img3: { id, alt, url } });
    num === 4 && setAttributes({ img4: { id, alt, url } });
    num === 5 && setAttributes({ img5: { id, alt, url } });
    num === 6 && setAttributes({ img6: { id, alt, url } });
    num === 7 && setAttributes({ img7: { id, alt, url } });
  };

  const ImageCol = () => {
    return (
      <div className="portfolio-project__img-box">
        {/* <img className="portfolio-project__img" src={img1.url} alt={img1.alt} /> */}
        <Image image={img1} />

        {+imgsNumLeftCol === 2 ? (
          <Image image={img2} />
        ) : (
          <div className="portfolio-project__img-group">
            <Image image={img2} />
            <Image image={img3} />
          </div>
        )}
      </div>
    );
  };

  const CombinedCol = () => {
    return (
      <div className="portfolio-project__combined-box">
        <div className="portfolio-project__text-box">
          <InnerBlocks allowedBlocks={['core/heading', 'core/paragraph']} />
        </div>

        <div
          className={`portfolio-project__img-box grid grid--${
            +imgsNumRightCol === 2 ? '1' : '2'
          }-cols`}
        >
          {+imgsNumRightCol === 2 ? (
            <>
              <Image image={img4} />
              <Image image={img5} />
            </>
          ) : (
            <>
              <Image image={img4} />
              <Image image={img5} />
              <Image image={img6} />
              <Image image={img7} />
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Left column" initialOpen>
          <PanelRow>
            <SelectControl
              label="Number of images"
              value={imgsNumLeftCol}
              options={leftColImgOptions}
              onChange={value => setAttributes({ imgsNumLeftCol: value })}
            />
          </PanelRow>

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

          {+imgsNumLeftCol > 2 && (
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  value={img3.id}
                  onSelect={fileInfo => handleImgChange(fileInfo, 3)}
                  render={render}
                />
              </MediaUploadCheck>
            </PanelRow>
          )}
        </PanelBody>

        <PanelBody title="Right column" initialOpen>
          <PanelRow>
            <SelectControl
              label="Number of images"
              value={imgsNumRightCol}
              options={rightColImgOptions}
              onChange={value => setAttributes({ imgsNumRightCol: value })}
            />
          </PanelRow>

          {/* Here they must be 4 rows (2 optional) */}

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img4.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 4)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                value={img5.id}
                onSelect={fileInfo => handleImgChange(fileInfo, 5)}
                render={render}
              />
            </MediaUploadCheck>
          </PanelRow>

          {+imgsNumRightCol > 2 && (
            <>
              <PanelRow>
                <MediaUploadCheck>
                  <MediaUpload
                    value={img6.id}
                    onSelect={fileInfo => handleImgChange(fileInfo, 6)}
                    render={render}
                  />
                </MediaUploadCheck>
              </PanelRow>

              <PanelRow>
                <MediaUploadCheck>
                  <MediaUpload
                    value={img7.id}
                    onSelect={fileInfo => handleImgChange(fileInfo, 7)}
                    render={render}
                  />
                </MediaUploadCheck>
              </PanelRow>
            </>
          )}
        </PanelBody>
      </InspectorControls>

      <div className="portfolio-project grid grid--2-cols">
        <ImageCol />
        <CombinedCol />
      </div>
    </>
  );
}
