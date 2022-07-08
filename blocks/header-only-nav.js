wp.blocks.registerBlockType('custom-blocks/header-only-nav', {
  title: 'Header - Only Nav',
  edit: () =>
    wp.element.createElement(
      'div',
      { className: 'editor-placeholder' },
      'Header Only Nav placeholder'
    ),

  save: () => null,
});
