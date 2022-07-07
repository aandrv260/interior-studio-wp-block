import { registerBlockType } from '@wordpress/blocks';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';

registerBlockType('custom-blocks/generic-button', {
  title: 'Generic Button',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'large' },
    btnStyle: { type: 'string', default: 'full' },
    position: { type: 'string', default: 'center' },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position },
  } = props;

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={size === 'large'}
            onClick={() => setAttributes({ size: 'large' })}
          >
            Large
          </ToolbarButton>

          <ToolbarButton
            isPressed={size === 'medium'}
            onClick={() => setAttributes({ size: 'medium' })}
          >
            Medium
          </ToolbarButton>

          <ToolbarButton
            isPressed={size === 'small'}
            onClick={() => setAttributes({ size: 'small' })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            isPressed={btnStyle === 'full'}
            onClick={() => setAttributes({ btnStyle: 'full' })}
          >
            Full
          </ToolbarButton>

          <ToolbarButton
            isPressed={btnStyle === 'outline'}
            onClick={() => setAttributes({ btnStyle: 'outline' })}
          >
            Outline
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            isPressed={position === 'left'}
            onClick={() => setAttributes({ position: 'left' })}
          >
            Left
          </ToolbarButton>

          <ToolbarButton
            isPressed={position === 'center'}
            onClick={() => setAttributes({ position: 'center' })}
          >
            Center
          </ToolbarButton>

          <ToolbarButton
            isPressed={position === 'right'}
            onClick={() => setAttributes({ position: 'right' })}
          >
            Right
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>

      <div className={`hero__btn-box hero__btn-box--${position}`}>
        <RichText
          className={`btn btn--${btnStyle} btn--${size} btn--postion-${position}`}
          style={{ textAlign: position }}
          tagName="a"
          allowedFormats={[]}
          onChange={typedString => setAttributes({ text: typedString })}
          value={text}
        />
      </div>
    </>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position },
  } = props;

  return (
    <div className={`hero__btn-box hero__btn-box--${position}`}>
      <a className={`btn btn--${btnStyle} btn--${size}`} href="#">
        {text}
      </a>
    </div>
  );
}
