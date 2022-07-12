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

registerBlockType('custom-blocks/portfolio-img-grid', {
  title: 'Portfolio row - Images Grid',

  attributes: {
    imgsNum: { type: 'string', default: '2' },
    heading: { type: 'string', default: '' },
    img1Label: { type: 'string', default: '' },
    img2Label: { type: 'string', default: '' },
    img3Label: { type: 'string', default: '' },
    img4Label: { type: 'string', default: '' },
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img3: { type: 'object', default: defaultImgObj },
    img4: { type: 'object', default: defaultImgObj },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

/*
  Attributes:
   -> How many grid items there will be
   -> Image 1, label
   -> Image 2, label
   -> Image 3, label
   -> Description (InnerBlock)
  */

function EditComponent(props) {
  const {
    setAttributes,
    attributes: {
      imgsNum,
      img1,
      img2,
      img3,
      img4,
      img1Label,
      img2Label,
      img3Label,
      img4Label,
      heading,
    },
  } = props;

  const allImages = [img1, img2, img3, img4];

  console.log(img1Label);

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const handleImgChange = (imgInfo, num) => {
    if (![1, 2, 3].includes(num)) return;

    const { id, alt } = imgInfo;
    const url = imgInfo.sizes.large.url || imgInfo.url;

    // setAttributes({ [`img${num}`]: { id, alt, url } });

    num === 1 && setAttributes({ img1: { id, alt, url } });
    num === 2 && setAttributes({ img2: { id, alt, url } });
    num === 3 && setAttributes({ img3: { id, alt, url } });
  };

  const selectImgsNumOptions = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const numberOfGridItems = arrayFromNumOfImages(imgsNum);

  console.log(numberOfGridItems);

  const ImageColumns = () => {
    const finalImages = [];

    for (let i = 0; i < numberOfGridItems.length; i++) {
      finalImages.push(allImages[i]);
      console.log(allImages[i]);
    }

    console.log(finalImages, allImages);

    return numberOfGridItems.map(num => (
      <div key={Math.random() + 2}>
        <img
          className="portfolio-img-grid__img"
          src={finalImages[num - 1].url}
          alt={finalImages[num - 1].alt || ''}
        />
        <span className="portfolio-img-grid__label">{props.attributes[`img${num}Label`]}</span>
      </div>
    ));
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="General Options" initialOpen>
          <PanelRow>
            <SelectControl
              label="Select the number of images"
              value={imgsNum}
              onChange={newValue => setAttributes({ imgsNum: newValue })}
              options={selectImgsNumOptions}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Section Heading"
              value={heading}
              onChange={value => setAttributes({ heading: value })}
            />
          </PanelRow>
        </PanelBody>

        {/* START: Render images based on the number selected in the general options */}
        {imgsNum >= 1 && (
          <PanelBody title={`Image 1`} initialOpen>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  value={img1.id}
                  onSelect={imgInfo => handleImgChange(imgInfo, 1)}
                  render={render}
                />
              </MediaUploadCheck>
            </PanelRow>

            <PanelRow>
              <TextControl
                label="Image label"
                value={img1Label}
                onChange={newValue => setAttributes({ img1Label: newValue })}
              />
            </PanelRow>
          </PanelBody>
        )}

        {imgsNum >= 2 && (
          <PanelBody title={`Image 2`} initialOpen>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  value={img2.id}
                  onSelect={imgInfo => handleImgChange(imgInfo, 2)}
                  render={render}
                />
              </MediaUploadCheck>
            </PanelRow>

            <PanelRow>
              <TextControl
                label="Image label"
                value={img2Label}
                onChange={newValue => setAttributes({ img2Label: newValue })}
              />
            </PanelRow>
          </PanelBody>
        )}

        {imgsNum >= 3 && (
          <PanelBody title={`Image 3`} initialOpen>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  value={img3.id}
                  onSelect={imgInfo => handleImgChange(imgInfo, 3)}
                  render={render}
                />
              </MediaUploadCheck>
            </PanelRow>

            <PanelRow>
              <TextControl
                label="Image label"
                value={img3Label}
                onChange={newValue => setAttributes({ img3Label: newValue })}
              />
            </PanelRow>
          </PanelBody>
        )}

        {imgsNum >= 4 && (
          <PanelBody title={`Image 3`} initialOpen>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  value={img4.id}
                  onSelect={imgInfo => handleImgChange(imgInfo, 4)}
                  render={render}
                />
              </MediaUploadCheck>
            </PanelRow>

            <PanelRow>
              <TextControl
                label="Image label"
                value={img4Label}
                onChange={newValue => setAttributes({ img4Label: newValue })}
              />
            </PanelRow>
          </PanelBody>
        )}

        {/* END: Render images based on the number selected in the general options */}
      </InspectorControls>

      <div className="portfolio-img-grid">
        <h3 className="portfolio-img-grid__heading">{heading}</h3>

        <div className={`grid grid--${imgsNum}-cols`}>
          <ImageColumns />
        </div>

        <div className="portfolio-img-grid__description">
          <InnerBlocks allowedBlocks={['core/paragraph']} />
        </div>
      </div>
    </>
  );
}
