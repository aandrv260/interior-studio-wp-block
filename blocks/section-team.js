import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow, Button, SelectControl, TextControl } from '@wordpress/components';

import {
  InnerBlocks,
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
  RichText,
} from '@wordpress/block-editor';

registerBlockType('custom-blocks/section-team', {
  title: 'Section Team',

  attributes: {
    imgURL: { type: 'string' },
    imgID: { type: 'number' },
    imgSide: { type: 'string', default: 'left' },
    isLeft: { type: 'boolean', default: true },
    teamMemberName: { type: 'string' },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { imgURL, imgID, text, imgSide, teamMemberName },
  } = props;

  const fileSelectHandler = ({ url, id }) => setAttributes({ imgID: id, imgURL: url });

  const render = ({ open }) => (
    <Button variant="primary" onClick={open}>
      Change photo
    </Button>
  );

  const imgSideChangeHandler = newSide => setAttributes({ imgSide: newSide });

  const imgSideOptions = [
    {
      value: 'left',
      label: 'Left',
    },

    {
      value: 'right',
      label: 'Right',
    },
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title="Team Member">
          <PanelRow>
            <TextControl
              label="Name"
              value={teamMemberName}
              onChange={newText => setAttributes({ teamMemberName: newText })}
            />
          </PanelRow>

          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload onSelect={fileSelectHandler} value={imgID} render={render} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>

        <PanelBody title="Side of the image">
          <PanelRow>
            <SelectControl
              label="Select side the image will appear on"
              value={imgSide}
              options={imgSideOptions}
              onChange={imgSideChangeHandler}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <section className="section--team">
        {/* <div className="text-center margin-btm-lg-4">
          <h2 className="heading--secondary letter-spacing-5">
            <span className="letter-capital-colored">Н</span>ашият
            <span className="letter-capital-colored">E</span>кип
          </h2>
        </div> */}

        <div className="container">
          {imgSide === 'left' && (
            <div className="team grid grid--2-cols">
              <div className="team__img-box">
                <img className="team__img" src={imgURL} alt="Снимка на Любослава" />
                <span className="team__member-name">{teamMemberName}</span>
              </div>

              <div className="team__text-box">
                <div className="team__text-container">
                  <InnerBlocks allowedBlocks={['core/paragraph', 'core/list']} />
                </div>
              </div>
            </div>
          )}

          {imgSide === 'right' && (
            <div className="team grid grid--2-cols">
              <div className="team__text-box">
                <div className="team__text-container">
                  <InnerBlocks allowedBlocks={['core/paragraph', 'core/list']} />
                </div>
              </div>

              <div className="team__img-box">
                <img className="team__img" src={imgURL} alt="Снимка на Любослава" />
                <span className="team__member-name">{teamMemberName}</span>
                {/* <span className="team__member-name">Любослава Кайджиева</span> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
