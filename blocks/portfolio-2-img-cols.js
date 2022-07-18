import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, Placeholder } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/portfolio-2-img-cols', {
  title: 'Portfolio row - 2 Image Cols',

  attributes: {
    imgCol2border: { type: 'string', default: 'none' },
    imgCol2Side: { type: 'string', default: 'left' },
    numberOfCol2Imgs: { type: 'string', default: '1' },
    imagesCol2Direction: { type: 'string', default: 'row' },
    imgLeftCol: { type: 'object', default: { id: null, url: '' } },
    img1: { type: 'object', default: { id: null, url: '' } },
    img2: { type: 'object', default: { id: null, url: '' } },
    img3: { type: 'object', default: { id: null, url: '' } },
  },

  edit: EditComponent,
  save: SaveComponent,
});

const arrayFromNumOfImages = num => {
  const arr = [];
  let i = 0;

  while (i < Number(num)) {
    i++;
    arr.push(i);
  }

  return arr;
};

function EditComponent(props) {
  const {
    setAttributes,
    attributes: {
      imgCol2border,
      imgLeftCol,
      imgCol2Side,
      numberOfCol2Imgs,
      img1,
      img2,
      img3,
      imagesCol2Direction,
    },
  } = props;

  const imagesNumArr = arrayFromNumOfImages(numberOfCol2Imgs);

  const render = ({ open }) => {
    return (
      <Button variant="primary" onClick={open}>
        Choose Image
      </Button>
    );
  };

  const ImagesControls = () => {
    const UploadImage = ({ number }) => {
      const permitedNumbers = [1, 2, 3];
      if (!permitedNumbers.includes(number)) return;

      const onFileSelect = imgInfo => {
        const { id } = imgInfo;
        const url = imgInfo.sizes.large.url;

        // Update block attribute
        number === 1 && setAttributes({ img1: { id, url } });
        number === 2 && setAttributes({ img2: { id, url } });
        number === 3 && setAttributes({ img3: { id, url } });
      };

      const getImgValueAndIdFromNumber = () => {
        if (number === 1) return { id: img1.id, url: img1.url };
        if (number === 2) return { id: img2.id, url: img2.url };
        if (number === 3) return { id: img3.id, url: img3.url };
      };

      return (
        <PanelRow>
          <label>{`Image ${number}`}</label>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onFileSelect}
              value={getImgValueAndIdFromNumber().id}
              render={render}
            />
          </MediaUploadCheck>
        </PanelRow>
      );
    };

    return (
      <>
        {imagesNumArr.length >= 1 && <UploadImage number={1} />}
        {imagesNumArr.length >= 2 && <UploadImage number={2} />}
        {imagesNumArr.length === 3 && <UploadImage number={3} />}
      </>
    );
  };

  const InspectorControlsOptions = () => {
    const selectHandler = newValue => {
      switch (newValue) {
        case '1':
          setAttributes({ img2: { id: null, url: '' }, img3: { id: null, url: '' } });
        case '2':
          setAttributes({ img3: { id: null, url: '' } });

        default:
          '';
      }

      setAttributes({ numberOfCol2Imgs: newValue });
    };

    const ImagesGroupOptions = () => {
      const imgNumOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
      ];

      const imgDirectionOptions = [
        { value: 'row', label: 'Row' },
        { value: 'column', label: 'Column' },
      ];

      const imgBoxBorderOptions = [
        { value: 'none', label: 'None' },
        { value: 'right', label: 'Right' },
      ];

      return (
        <>
          <PanelRow>
            <SelectControl
              label="Number of images"
              value={numberOfCol2Imgs}
              options={imgNumOptions}
              onChange={selectHandler}
            />
          </PanelRow>

          <PanelRow>
            <SelectControl
              label="Direction of images"
              help="This applies if if images are more than 1"
              value={imagesCol2Direction}
              options={imgDirectionOptions}
              onChange={newDir => setAttributes({ imagesCol2Direction: newDir })}
            />
          </PanelRow>

          <PanelRow>
            <SelectControl
              label="Right border"
              value={imgCol2border}
              options={imgBoxBorderOptions}
              onChange={newBorder => setAttributes({ imgCol2border: newBorder })}
            />
          </PanelRow>
        </>
      );
    };

    const onSingleImgSelect = imgInfo => {
      const { id } = imgInfo;
      const url = imgInfo.sizes.large.url;

      setAttributes({ imgLeftCol: { id, url } });
    };

    return (
      <InspectorControls>
        <PanelBody title="Main Options" initialOpen>
          <PanelRow>
            <SelectControl
              label="Side of the images column"
              help="Which side would you like to place the images column on? Left or right?"
              value={imgCol2Side}
              options={[
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' },
              ]}
              onChange={newSide => setAttributes({ imgCol2Side: newSide })}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title="Column 1" initialOpen>
          <MediaUploadCheck>
            <MediaUpload onSelect={onSingleImgSelect} value={imgLeftCol.id} render={render} />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title="Column 2" initialOpen>
          <ImagesGroupOptions />
          <ImagesControls />
        </PanelBody>
      </InspectorControls>
    );
  };

  const ImagesSelected = () => {
    return (
      <>
        {img1.id && (
          <img className="portfolio-project__img" src={img1.url} alt="Снимка на схема 1" />
        )}

        {img2.id && (
          <img className="portfolio-project__img" src={img2.url} alt="Снимка на схема 1" />
        )}

        {img3.id && (
          <img className="portfolio-project__img" src={img3.url} alt="Снимка на схема 1" />
        )}
      </>
    );
  };

  const SingleImageCol = () => {
    return (
      <div class="portfolio-project__img-box">
        <img class="portfolio-project__img" src={imgLeftCol.url} alt="Снимка на схема 1" />
      </div>
    );
  };

  const MultiImageCol = () => {
    return (
      <div className="portfolio-project__img-box">
        {+numberOfCol2Imgs === 1 && <ImagesSelected />}

        {+numberOfCol2Imgs > 1 && (
          <div
            className={`portfolio-project__img-group portfolio-project__img-group--col portfolio-project__img-group--border-${imgCol2border} img-${numberOfCol2Imgs} img-${imagesCol2Direction}`}
          >
            <ImagesSelected />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <InspectorControlsOptions />

      <div className="portfolio-project grid grid--2-cols">
        {imgCol2Side === 'left' && (
          <>
            <SingleImageCol />
            <MultiImageCol />
          </>
        )}

        {imgCol2Side === 'right' && (
          <>
            <MultiImageCol />
            <SingleImageCol />
          </>
        )}
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
