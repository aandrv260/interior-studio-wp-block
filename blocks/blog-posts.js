wp.blocks.registerBlockType('custom-blocks/blog-posts', {
  title: 'Blog Posts',

  edit: () =>
    wp.element.createElement(
      'section',
      { className: 'editor-placeholder' },
      'Blog Posts Section Placeholder'
    ),

  save: () => null,
});
