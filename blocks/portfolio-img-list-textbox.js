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
import { ImageBox, TextBox, ImageGroup, ListItems } from '../assets/components/PortfolioBoxes';

const defaultImgObj = { url: '', alt: '', id: null };

registerBlockType('custom-blocks/portfolio-img-list-textbox', {
  title: 'Portfolio row - List with Image and Textbox',

  attributes: {
    img: { type: 'object', default: defaultImgObj },
    listItems: {
      type: 'object',
      default: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: '',
        item9: '',
        item10: '',
        item11: '',
        item12: '',
      },
    },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

const ListItemControl = ({ value, label, onChange }) => {
  return (
    <PanelRow>
      <TextControl label={label} value={value} onChange={onChange} />;
    </PanelRow>
  );
};

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img, listItems },
  } = props;

  const imgSelectHandler = fileInfo => {
    const { id, alt } = fileInfo;
    const url = fileInfo.sizes.large.url || fileInfo.url;

    setAttributes({ img: { id, alt, url } });
  };

  const allListItems = [
    listItems.item1,
    listItems.item2,
    listItems.item3,
    listItems.item4,
    listItems.item5,
    listItems.item6,
    listItems.item7,
    listItems.item8,
    listItems.item9,
    listItems.item10,
    listItems.item11,
    listItems.item12,
  ];
  const ImageListBox = () => {};

  return (
    <>
      <InspectorControls>
        <PanelBody title="Left Column" initialOpen>
          <>
            <ListItemControl
              label={`List 1`}
              value={listItems['item1']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item1']: value } })}
            />

            <ListItemControl
              label={`List 2`}
              value={listItems['item2']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item2']: value } })}
            />

            <ListItemControl
              label={`List 3`}
              value={listItems['item3']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item3']: value } })}
            />

            <ListItemControl
              label={`List 4`}
              value={listItems['item4']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item4']: value } })}
            />

            <ListItemControl
              label={`List 5`}
              value={listItems['item5']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item5']: value } })}
            />

            <ListItemControl
              label={`List 6`}
              value={listItems['item6']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item6']: value } })}
            />

            <ListItemControl
              label={`List 7`}
              value={listItems['item7']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item7']: value } })}
            />

            <ListItemControl
              label={`List 8`}
              value={listItems['item8']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item8']: value } })}
            />

            <ListItemControl
              label={`List 9`}
              value={listItems['item9']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item9']: value } })}
            />

            <ListItemControl
              label={`List 10`}
              value={listItems['item10']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item10']: value } })}
            />

            <ListItemControl
              label={`List 11`}
              value={listItems['item11']}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item11']: value } })}
            />

            <ListItemControl
              label={`List 12`}
              value={listItems.item12}
              onChange={value => setAttributes({ listItems: { ...listItems, ['item12']: value } })}
            />
          </>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload value={img.id} onSelect={imgSelectHandler} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="portfolio-project grid grid--2-cols">
        <ImageBox>
          <ImageGroup>
            <ListItems items={allListItems} />
            <PortfolioImage image={img} />
          </ImageGroup>
        </ImageBox>

        <TextBox>
          <InnerBlocks allowedBlocks={['core/heading', 'core/paragraph']} />
        </TextBox>
      </div>
    </>
  );
}
