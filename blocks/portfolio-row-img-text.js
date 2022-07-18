import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, Placeholder } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('custom-blocks/portfolio-row-img-text', {
  title: 'Portfolio row - 1 img Col and 1 Text Col',

  attributes: {
    border: { type: 'string', default: 'none' },
    imgSide: { type: 'string', default: 'left' },
    numberOfImgs: { type: 'string', default: '1' },
    textBoxColor: { type: 'string', default: 'grey' },
    imagesDirection: { type: 'string', default: 'row' },
    img1: { type: 'object', default: { id: null, url: '' } },
    img2: { type: 'object', default: { id: null, url: '' } },
    img3: { type: 'object', default: { id: null, url: '' } },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { border, imgSide, numberOfImgs, img1, img2, img3, imagesDirection, textBoxColor },
  } = props;

  const arrayFromNumOfImages = () => {
    const arr = [];
    let i = 0;

    while (i < Number(numberOfImgs)) {
      i++;
      arr.push(i);
    }

    return arr;
  };

  const imagesNumArr = arrayFromNumOfImages();

  const ImagesControls = () => {
    const render = ({ open }) => {
      return (
        <Button variant="primary" onClick={open}>
          Choose Image
        </Button>
      );
    };

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
          break;
        case '2':
          setAttributes({ img3: { id: null, url: '' } });
          break;

        default:
          '';
          break;
      }

      setAttributes({ numberOfImgs: newValue });
    };

    const ImagesGroupOptions = () => {
      return (
        <>
          <PanelRow>
            <SelectControl
              label="Number of images"
              value={numberOfImgs}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
              ]}
              onChange={selectHandler}
            />
          </PanelRow>

          <PanelRow>
            <SelectControl
              label="Direction of images"
              help="This applies if if images are more than 1"
              value={imagesDirection}
              options={[
                { value: 'row', label: 'Row' },
                { value: 'column', label: 'Column' },
              ]}
              onChange={newDir => setAttributes({ imagesDirection: newDir })}
            />
          </PanelRow>

          <PanelRow>
            <SelectControl
              label="Side of the images column"
              help="Which side would you like to place the images column on? Left or right?"
              value={imgSide}
              options={[
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' },
              ]}
              onChange={newSide => setAttributes({ imgSide: newSide })}
            />
          </PanelRow>
        </>
      );
    };

    return (
      <InspectorControls>
        <PanelBody title="Row options" initialOpen>
          <PanelRow>
            <SelectControl
              label="Background color"
              help="Select the background color of the textbox. By default, it is brown."
              options={[
                { value: 'none', label: 'None' },
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' },
              ]}
              value={border}
              onChange={border => setAttributes({ border })}
            />
          </PanelRow>

          <PanelRow>
            <SelectControl
              label="Background color"
              help="Select the background color of the textbox. By default, it is brown."
              options={[
                { value: 'grey', label: 'Grey' },
                { value: 'brown', label: 'Brown' },
                { value: 'black', label: 'Black' },
              ]}
              value={textBoxColor}
              onChange={color => setAttributes({ textBoxColor: color })}
            />
          </PanelRow>
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
          <img
            style={{ height: '100%' }}
            className="portfolio-project__img"
            src={img1.url}
            alt="Снимка на схема 1"
          />
        )}

        {img2.id && (
          <img
            style={{ height: '100%' }}
            className="portfolio-project__img"
            src={img2.url}
            alt="Снимка на схема 1"
          />
        )}

        {img3.id && (
          <img
            style={{ height: '100%' }}
            className="portfolio-project__img"
            src={img3.url}
            alt="Снимка на схема 1"
          />
        )}
      </>
    );
  };

  console.log(+numberOfImgs);

  return (
    <>
      <InspectorControlsOptions />

      <div className={`portfolio-project${border !== 'none' ? ' gap-12' : ''} grid grid--2-cols`}>
        {imgSide === 'left' && (
          <>
            <div className={`portfolio-project__img-box border-${border}`}>
              {+numberOfImgs === 1 && <ImagesSelected />}

              {+numberOfImgs > 1 && (
                <div
                  className={`portfolio-project__img-group img-${numberOfImgs} img-${imagesDirection}`}
                >
                  <ImagesSelected />
                </div>
              )}
            </div>

            <div
              className={`portfolio-project__text-box portfolio-project__text-box--${textBoxColor}`}
            >
              <InnerBlocks allowedBlocks={['core/heading', 'core/paragraph']} />
              {/* <h3 className="portfolio-project__heading">Microhome</h3>
          <p className="portfolio-project__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vero ipsum iusto. Qui
            officia ab commodi minima optio animi reprehenderit voluptate molestias eaque. Sit
            voluptatum eaque odit? Iste, quod illum voluptates facilis alias ab culpa deserunt sint,
            veniam non nam atque quidem? Voluptatum dolore architecto tenetur at commodi ratione
            fuga ipsa adipisci, quidem ea aperiam eum. Doloribus, ad. Aliquam sequi autem, iure
            quidem delectus quibusdam accusantium tenetur veritatis. Consequatur ex reiciendis
            ratione dignissimos aliquam magnam numquam veniam omnis debitis reprehenderit odit
            adipisci rerum delectus maxime iure natus id aliquid, laudantium perspiciatis est fugit
            quisquam eius quia? In neque nihil vitae.
          </p> */}
            </div>
          </>
        )}

        {imgSide === 'right' && (
          <>
            <div className="portfolio-project__text-box">
              <InnerBlocks allowedBlocks={['core/heading', 'core/paragraph']} />
              {/* <h3 className="portfolio-project__heading">Microhome</h3>
        <p className="portfolio-project__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vero ipsum iusto. Qui
          officia ab commodi minima optio animi reprehenderit voluptate molestias eaque. Sit
          voluptatum eaque odit? Iste, quod illum voluptates facilis alias ab culpa deserunt sint,
          veniam non nam atque quidem? Voluptatum dolore architecto tenetur at commodi ratione
          fuga ipsa adipisci, quidem ea aperiam eum. Doloribus, ad. Aliquam sequi autem, iure
          quidem delectus quibusdam accusantium tenetur veritatis. Consequatur ex reiciendis
          ratione dignissimos aliquam magnam numquam veniam omnis debitis reprehenderit odit
          adipisci rerum delectus maxime iure natus id aliquid, laudantium perspiciatis est fugit
          quisquam eius quia? In neque nihil vitae.
        </p> */}
            </div>
            <div className="portfolio-project__img-box">
              {+numberOfImgs === 1 && <ImagesSelected />}

              {+numberOfImgs > 1 && (
                <div
                  className={`portfolio-project__img-group img-${numberOfImgs} img-${imagesDirection}`}
                >
                  <ImagesSelected />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
