import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

registerBlockType('custom-blocks/section-description', {
  title: 'Section Description',

  attributes: {
    text: { type: 'string' },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text },
  } = props;

  return (
    <div className="container" style={{ maxWidth: '100rem', textAlign: 'center' }}>
      <RichText
        className="about__desc"
        tagName="p"
        value={text}
        onChange={text => setAttributes({ text })}
      />
    </div>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text },
  } = props;

  return (
    <div className="container" style={{ maxWidth: '100rem', textAlign: 'center' }}>
      <RichText.Content tagName="p" className={`about__desc`} value={text} />;
    </div>
  );
}
