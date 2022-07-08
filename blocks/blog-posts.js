import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow, Button, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

registerBlockType('custom-blocks/blog-posts', {
  title: 'Blog Posts',

  attributes: {
    heading: { type: 'string' },
  },
  edit: EditComponent,
  //   edit: () =>
  //     wp.element.createElement(
  //       'section',
  //       { className: 'editor-placeholder' },
  //       'Blog Posts Section Placeholder'
  //     ),

  save: () => null,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { heading },
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Section Details">
          <PanelRow>
            <TextControl
              label="Section Heading"
              value={heading}
              onChange={newValue => setAttributes({ heading: newValue })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section className="editor-placeholder">Blog Posts Section Placeholder</section>
    </>
  );
}
