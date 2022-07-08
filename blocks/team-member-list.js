import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('custom-blocks/team-member-list', {
  title: 'Team List',

  attributes: {
    text: { type: 'string' },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <ul className="team__list">
      <RichText
        className="team__list-item"
        tagName="li"
        allowedFormats={['core/bold']}
        value={text}
      />
    </ul>
  );
}
function SaveComponent() {
  return (
    <ul className="team__list">
      <RichText.Content
        className="team__list-item"
        tagName="li"
        allowedFormats={['core/bold']}
        value={text}
      />
    </ul>
  );
}
