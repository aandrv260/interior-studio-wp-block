/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/components/Image.js":
/*!************************************!*\
  !*** ./assets/components/Image.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const PortfolioImage = _ref => {
  let {
    image
  } = _ref;
  return image.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "portfolio-project__img",
    src: image.url,
    alt: image.alt
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioImage);

/***/ }),

/***/ "./assets/components/PortfolioBoxes.js":
/*!*********************************************!*\
  !*** ./assets/components/PortfolioBoxes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageBox": () => (/* binding */ ImageBox),
/* harmony export */   "ImageGroup": () => (/* binding */ ImageGroup),
/* harmony export */   "ImageLabel": () => (/* binding */ ImageLabel),
/* harmony export */   "ListItems": () => (/* binding */ ListItems),
/* harmony export */   "TextBox": () => (/* binding */ TextBox)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const ImageBox = _ref => {
  let {
    direction,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__img-box"
  }, children);
};
const ImageGroup = _ref2 => {
  let {
    children
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__img-group"
  }, children);
};
const TextBox = _ref3 => {
  let {
    children
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__text-box"
  }, children);
};
const ListItems = _ref4 => {
  let {
    items
  } = _ref4;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
    className: "portfolio-project__num-list"
  }, items.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "portfolio-project__num-list-item",
    key: Math.random()
  }, item)));
};
const ImageLabel = _ref5 => {
  let {
    text
  } = _ref5;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "portfolio-project__label"
  }, text);
};

/***/ }),

/***/ "./assets/components/render.js":
/*!*************************************!*\
  !*** ./assets/components/render.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const render = _ref => {
  let {
    open
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: open
  }, "Choose Image");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./blocks/portfolio-img-list-textbox.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_components_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/components/render */ "./assets/components/render.js");
/* harmony import */ var _assets_components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/components/Image */ "./assets/components/Image.js");
/* harmony import */ var _assets_components_PortfolioBoxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/components/PortfolioBoxes */ "./assets/components/PortfolioBoxes.js");



 //




const defaultImgObj = {
  url: '',
  alt: '',
  id: null
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('custom-blocks/portfolio-img-list-textbox', {
  title: 'Portfolio row - List with Image and Textbox',
  attributes: {
    img: {
      type: 'object',
      default: defaultImgObj
    },
    listItems: {
      type: 'object',
      default: {
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: '',
        item9: '',
        item10: '',
        item11: '',
        item12: ''
      }
    }
  },
  edit: EditComponent,
  save: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)
});

const ListItemControl = _ref => {
  let {
    value,
    label,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: label,
    value: value,
    onChange: onChange
  }), ";");
};

function EditComponent(props) {
  const {
    setAttributes,
    attributes: {
      img,
      listItems
    }
  } = props;

  const imgSelectHandler = fileInfo => {
    const {
      id,
      alt
    } = fileInfo;
    const url = fileInfo.sizes.large.url || fileInfo.url;
    setAttributes({
      img: {
        id,
        alt,
        url
      }
    });
  };

  const allListItems = [listItems.item1, listItems.item2, listItems.item3, listItems.item4, listItems.item5, listItems.item6, listItems.item7, listItems.item8, listItems.item9, listItems.item10, listItems.item11, listItems.item12];

  const ImageListBox = () => {};

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Left Column",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 1`,
    value: listItems['item1'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item1']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 2`,
    value: listItems['item2'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item2']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 3`,
    value: listItems['item3'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item3']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 4`,
    value: listItems['item4'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item4']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 5`,
    value: listItems['item5'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item5']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 6`,
    value: listItems['item6'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item6']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 7`,
    value: listItems['item7'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item7']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 8`,
    value: listItems['item8'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item8']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 9`,
    value: listItems['item9'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item9']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 10`,
    value: listItems['item10'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item10']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 11`,
    value: listItems['item11'],
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item11']: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ListItemControl, {
    label: `List 12`,
    value: listItems.item12,
    onChange: value => setAttributes({
      listItems: { ...listItems,
        ['item12']: value
      }
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    value: img.id,
    onSelect: imgSelectHandler,
    render: _assets_components_render__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project grid grid--2-cols"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_PortfolioBoxes__WEBPACK_IMPORTED_MODULE_6__.ImageBox, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_PortfolioBoxes__WEBPACK_IMPORTED_MODULE_6__.ImageGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_PortfolioBoxes__WEBPACK_IMPORTED_MODULE_6__.ListItems, {
    items: allListItems
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: img
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_PortfolioBoxes__WEBPACK_IMPORTED_MODULE_6__.TextBox, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['core/heading', 'core/paragraph']
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=portfolio-img-list-textbox.js.map