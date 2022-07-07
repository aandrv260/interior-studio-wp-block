import { handle, link as linkIcon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';
import { ToolbarGroup, ToolbarButton, Popover, Button } from '@wordpress/components';
import {
  RichText,
  BlockControls,
  __experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

registerBlockType('custom-blocks/generic-button', {
  title: 'Generic Button',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'large' },
    btnStyle: { type: 'string', default: 'full' },
    position: { type: 'string', default: 'center' },
    link: { type: 'object', default: { url: '' } },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position, link },
  } = props;

  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

  const linkBtnClickHandler = () => {
    setIsLinkPickerVisible(prevState => !prevState);
  };

  const handleLinkChange = newLink => {
    setAttributes({ link: newLink });
  };

  const PopoverComp = ({ position }) => {
    return (
      isLinkPickerVisible && (
        <Popover onFocusOutside={() => setIsLinkPickerVisible(false)} position="bottom center">
          <LinkControl settings={[]} value={link} onChange={handleLinkChange} />
          <Button
            variant="primary"
            onClick={() => setIsLinkPickerVisible(false)}
            style={{ display: 'block', width: '100%' }}
          >
            Confirm Link
          </Button>
        </Popover>
      )
    );
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={linkBtnClickHandler} icon={linkIcon} />
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
        <PopoverComp position="center" />
      </div>
    </>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position, link },
  } = props;

  return (
    <div className={`hero__btn-box hero__btn-box--${position}`}>
      <a className={`btn btn--${btnStyle} btn--${size}`} href={link.url}>
        {text}
      </a>
    </div>
  );
}
