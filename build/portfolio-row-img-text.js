/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!******************************************!*\
  !*** ./blocks/portfolio-row-img-text.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('custom-blocks/portfolio-row-img-text', {
  title: 'Portfolio row - 1 img Col and 1 Text Col',
  attributes: {
    border: {
      type: 'string',
      default: 'none'
    },
    imgSide: {
      type: 'string',
      default: 'left'
    },
    numberOfImgs: {
      type: 'string',
      default: '1'
    },
    imagesDirection: {
      type: 'string',
      default: 'row'
    },
    img1: {
      type: 'object',
      default: {
        id: null,
        url: ''
      }
    },
    img2: {
      type: 'object',
      default: {
        id: null,
        url: ''
      }
    },
    img3: {
      type: 'object',
      default: {
        id: null,
        url: ''
      }
    }
  },
  edit: EditComponent,
  save: SaveComponent
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: {
      border,
      imgSide,
      numberOfImgs,
      img1,
      img2,
      img3,
      imagesDirection
    }
  } = props;

  const arrayFromNumOfImages = () => {
    const arr = [];
    let i = 0;

    while (i < Number(numberOfImgs)) {
      i++;
      arr.push(i);
    }

    return arr;
  };

  const imagesNumArr = arrayFromNumOfImages();

  const ImagesControls = () => {
    const render = _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: open
      }, "Choose Image");
    };

    const UploadImage = _ref2 => {
      let {
        number
      } = _ref2;
      const permitedNumbers = [1, 2, 3];
      if (!permitedNumbers.includes(number)) return;

      const onFileSelect = imgInfo => {
        const {
          id
        } = imgInfo;
        const url = imgInfo.sizes.large.url; // Update block attribute

        number === 1 && setAttributes({
          img1: {
            id,
            url
          }
        });
        number === 2 && setAttributes({
          img2: {
            id,
            url
          }
        });
        number === 3 && setAttributes({
          img3: {
            id,
            url
          }
        });
      };

      const getImgValueAndIdFromNumber = () => {
        if (number === 1) return {
          id: img1.id,
          url: img1.url
        };
        if (number === 2) return {
          id: img2.id,
          url: img2.url
        };
        if (number === 3) return {
          id: img3.id,
          url: img3.url
        };
      };

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, `Image ${number}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: onFileSelect,
        value: getImgValueAndIdFromNumber().id,
        render: render
      })));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imagesNumArr.length >= 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadImage, {
      number: 1
    }), imagesNumArr.length >= 2 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadImage, {
      number: 2
    }), imagesNumArr.length === 3 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(UploadImage, {
      number: 3
    }));
  };

  const InspectorControlsOptions = () => {
    const selectHandler = newValue => {
      switch (newValue) {
        case '1':
          setAttributes({
            img2: {
              id: null,
              url: ''
            },
            img3: {
              id: null,
              url: ''
            }
          });

        case '2':
          setAttributes({
            img3: {
              id: null,
              url: ''
            }
          });

        default:
          '';
      }

      setAttributes({
        numberOfImgs: newValue
      });
    };

    const ImagesGroupOptions = () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Number of images",
        value: numberOfImgs,
        options: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }],
        onChange: selectHandler
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Direction of images",
        help: "This applies if if images are more than 1",
        value: imagesDirection,
        options: [{
          value: 'row',
          label: 'Row'
        }, {
          value: 'column',
          label: 'Column'
        }],
        onChange: newDir => setAttributes({
          imagesDirection: newDir
        })
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Side of the images column",
        help: "Which side would you like to place the images column on? Left or right?",
        value: imgSide,
        options: [{
          value: 'left',
          label: 'Left'
        }, {
          value: 'right',
          label: 'Right'
        }],
        onChange: newSide => setAttributes({
          imgSide: newSide
        })
      })));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Row options",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImagesGroupOptions, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImagesControls, null)));
  };

  const ImagesSelected = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, img1.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "portfolio-project__img",
      src: img1.url,
      alt: "\u0421\u043D\u0438\u043C\u043A\u0430 \u043D\u0430 \u0441\u0445\u0435\u043C\u0430 1"
    }), img2.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "portfolio-project__img",
      src: img2.url,
      alt: "\u0421\u043D\u0438\u043C\u043A\u0430 \u043D\u0430 \u0441\u0445\u0435\u043C\u0430 1"
    }), img3.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "portfolio-project__img",
      src: img3.url,
      alt: "\u0421\u043D\u0438\u043C\u043A\u0430 \u043D\u0430 \u0441\u0445\u0435\u043C\u0430 1"
    }));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControlsOptions, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project grid grid--2-cols"
  }, imgSide === 'left' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__img-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `portfolio-project__img-group img-${numberOfImgs} img-${imagesDirection}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImagesSelected, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__text-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['core/heading', 'core/paragraph']
  }))), imgSide === 'right' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__text-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['core/heading', 'core/paragraph']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "portfolio-project__img-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `portfolio-project__img-group img-${numberOfImgs} img-${imagesDirection}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImagesSelected, null))))));
}

function SaveComponent() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}
})();

/******/ })()
;
//# sourceMappingURL=portfolio-row-img-text.js.map