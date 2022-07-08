import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

registerBlockType('custom-blocks/sectionheading', {
  title: 'Section Heading',

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
    <div className="text-center margin-btm-sm">
      <RichText
        tagName="h2"
        className={`heading--secondary`}
        value={text}
        onChange={typedStr => setAttributes({ text: typedStr })}
      />
    </div>
  );
}

function SaveComponent(props) {
  const {
    attributes: { text },
  } = props;

  return (
    <div class="text-center margin-btm-sm">
      <RichText.Content tagName="h2" className={`heading--secondary`} value={text} />;
    </div>
  );
}
