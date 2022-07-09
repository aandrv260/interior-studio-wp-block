import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

registerBlockType('custom-blocks/portfolio-items', {
  title: 'Portfolio Items',

  attributes: {
    heading: { type: 'string' },
    subheading: { type: 'string' },
  },

  edit: EditComponent,
  save: () => null,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { heading, subheading },
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Page details">
          <PanelRow>
            <TextControl
              label="Heading"
              help="Section Heading"
              value={heading}
              onChange={newValue => setAttributes({ heading: newValue })}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Subheading"
              help="Section Subheading"
              value={subheading}
              onChange={newValue => setAttributes({ subheading: newValue })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section className="editor-placeholder">Portfolio Items Placeholder</section>
    </>
  );
}
