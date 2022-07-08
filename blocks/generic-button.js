import { registerBlockType } from '@wordpress/blocks';

import {
  ToolbarGroup,
  ToolbarButton,
  Popover,
  Button,
  PanelBody,
  PanelRow,
  ColorPalette,
} from '@wordpress/components';

import { handle, link, link as linkIcon } from '@wordpress/icons';

import {
  RichText,
  BlockControls,
  __experimentalLinkControl as LinkControl,
  InspectorControls,
  getColorObjectByColorValue,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';
import ourColors from '../assets/js/colors';

registerBlockType('custom-blocks/generic-button', {
  title: 'Generic Button',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'large' },
    btnStyle: { type: 'string', default: 'full' },
    position: { type: 'string', default: 'center' },
    link: { type: 'object', default: { url: '' } },
    colorName: { type: 'string', default: 'blue' },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position, link, colorName },
  } = props;

  const [isLinkBtnVisible, setIsLinkBtnVisible] = useState(false);

  const PopoverLinkChange = props => {
    return (
      isLinkBtnVisible && (
        <Popover {...props} onFocusOutside={() => setIsLinkBtnVisible(false)}>
          <LinkControl
            settings={[]}
            value={link}
            onChange={newLink => setAttributes({ link: newLink })}
          />

          <Button
            variant="primary"
            onClick={() => setIsLinkBtnVisible(false)}
            style={{ display: 'block', width: '100%' }}
          >
            Confirm
          </Button>
        </Popover>
      )
    );
  };

  const BlockControlsOptions = () => (
    <BlockControls>
      <ToolbarGroup>
        <ToolbarButton onClick={() => setIsLinkBtnVisible(prev => !prev)} icon={linkIcon} />
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
  );

  const handleColorChange = colorCode => {
    // Find the color name from the colorCode that the <ColorPalette /> gives us
    const { name: colorName } = getColorObjectByColorValue(ourColors, colorCode);

    setAttributes({ colorName });
  };

  /**
   * Retrieve the color code by color name
   */
  const currentColorValue = ourColors.filter(color => color.name === colorName)[0].color;

  const InspectorControlsOptions = () => (
    <InspectorControls>
      <PanelBody title="Color" initialOpen>
        <PanelRow>
          {/* Value prop here must be a colorCode. However, we want the colorName to be name of color, not code */}
          <ColorPalette
            colors={ourColors}
            // disableCustomColors
            // clearable={false}
            value={currentColorValue}
            onChange={handleColorChange}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );

  return (
    <>
      <BlockControlsOptions />
      <InspectorControlsOptions />
      <div className={`hero__btn-box hero__btn-box--${position}`}>
        <RichText
          className={`btn btn--${btnStyle} btn--${btnStyle}-${colorName} btn--${size}`}
          style={{ textAlign: position }}
          tagName="a"
          allowedFormats={[]}
          onChange={typedString => setAttributes({ text: typedString })}
          value={text}
        />
        <PopoverLinkChange position="bottom center" />
      </div>
    </>
  );
}

function SaveComponent(props) {
  const {
    setAttributes,
    attributes: { text, size, btnStyle, position, colorName },
  } = props;

  return (
    <div className={`hero__btn-box hero__btn-box--${position}`}>
      <a className={`btn btn--${btnStyle} btn--${btnStyle}-${colorName} btn--${size}`} href="">
        {text}
      </a>
    </div>
  );
}
