import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

wp.blocks.registerBlockType('custom-blocks/generic-description', {
  title: 'Generic Description',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'medium' },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text, size },
  } = props;

  const textChangeHandler = typedText => setAttributes({ text: typedText });

  return (
    <div className="container">
      <RichText className="about__desc" tagName="p" value={text} onChange={textChangeHandler} />
      {/* <p class="about__desc">
      Екип от млади дизайнери, които се стремят към създаването на модерна и иновативна среда за
      обитаване. Студиото е изцяло базирано на креативния интериорен дизайн в съвременното
      обзавеждане на апартаменти, къщи и обществени обекти.
    </p> */}
    </div>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text, size },
  } = props;

  return (
    <div className="container">
      <RichText.Content className="about__desc" tagName="p" value={text} />;
    </div>
  );
}
