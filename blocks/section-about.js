import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('custom-blocks/section-about', {
  title: 'Section About',
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <section class="section--about">
      <InnerBlocks
        allowedBlocks={['custom-blocks/section-description', 'custom-blocks/sectionheading']}
      />
    </section>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
