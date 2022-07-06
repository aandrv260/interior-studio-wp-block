import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('custom-blocks/generic-heading', {
  title: 'Generic Heading',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'large' },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text, size },
  } = props;

  const textChangeHandler = typedString => {
    // typedString is whatever the user has typed
    setAttributes({ text: typedString });
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            //   true or false -> Should the button look selected (highlighted)
            isPressed={size === 'large'}
            onClick={() => setAttributes({ size: 'large' })}
          >
            Large
          </ToolbarButton>

          <ToolbarButton
            //   true or false -> Should the button look selected (highlighted)
            isPressed={size === 'medium'}
            onClick={() => setAttributes({ size: 'medium' })}
          >
            Medium
          </ToolbarButton>

          <ToolbarButton
            //   true or false -> Should the button look selected (highlighted)
            isPressed={size === 'small'}
            onClick={() => setAttributes({ size: 'small' })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>

      <RichText
        tagName="h1"
        className={`heading--primary heading--primary-${size}`}
        value={text}
        // Allow only bold option icon
        allowedFormats={['core/bold']}
        onChange={textChangeHandler}
      />
    </>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text, size },
  } = props;

  const createTagName = () => {
    switch (size) {
      case 'large':
        return 'h1';

      case 'medium':
        return 'h2';

      case 'small':
        return 'h3';
    }
  };

  return (
    <RichText.Content
      tagName={createTagName()}
      className={`heading--primary heading--primary-${size}`}
      value={text}
    />
  );
}
