import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

import { Button, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

const defaultImgObj = { id: null, url: '' };

const arrayFromNumOfImages = num => {
  const arr = [];
  let i = 0;

  while (i < Number(num)) {
    i++;
    arr.push(i);
  }

  return arr;
};

registerBlockType('custom-blocks/portfolio-imgs-grid', {
  title: 'Portfolio row - Images Grid',

  attributes: {
    imgsNum: { type: 'string', default: '2' },
    img1Label: { type: 'string', default: '' },
    heading: { type: 'string', default: '' },
    img2Label: { type: 'string', default: '' },
    img3Label: { type: 'string', default: '' },
    img4Label: { type: 'string', default: '' },
    img1: { type: 'object', default: defaultImgObj },
    img2: { type: 'object', default: defaultImgObj },
    img3: { type: 'object', default: defaultImgObj },
    img4: { type: 'object', default: defaultImgObj },
  },

  edit: EditComponent,
  save: () => <InnerBlocks.Content />,
});

/*
Attributes:
 -> How many grid items there will be
 -> Image 1, label
 -> Image 2, label
 -> Image 3, label
 -> Description (InnerBlock)
*/

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { img1Label },
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Img" initialOpen>
          <PanelRow>
            <TextControl
              value={img1Label}
              onChange={value => setAttributes({ img1Label: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </>
  );
}

// function EditComponent(props) {
//   const {
//     setAttributes,
//     attributes: {
//       imgsNum,
//       img1,
//       img2,
//       img3,
//       img4,
//       img1Label,
//       img2Label,
//       img3Label,
//       img4Label,
//       heading,
//     },
//   } = props;

//   console.log(img1Label);

//   const render = ({ open }) => {
//     return (
//       <Button variant="primary" onClick={open}>
//         Choose Image
//       </Button>
//     );
//   };

//   const handleImgChange = (imgInfo, num) => {
//     const { id, alt } = imgInfo;
//     const url = imgInfo.sizes.large.url || imgInfo.url;

//     console.log({ [`img${num}`]: num });

//     setAttributes({ [`img${num}`]: { id, alt, url } });
//   };

//   const ImagePanel = () => {
//     return (
//       // <PanelBody title={`Image ${num}`} initialOpen>
//       <PanelBody title={`Image 1`} initialOpen>
//         <PanelRow>
//           <MediaUploadCheck>
//             <MediaUpload
//               value={img1.id}
//               // onSelect={imgInfo => handleImgChange(imgInfo, num)}
//               onSelect={imgInfo => handleImgChange(imgInfo, 1)}
//               render={render}
//             />
//           </MediaUploadCheck>
//         </PanelRow>

//         <PanelRow>
//           <TextControl
//             label="Image Label"
//             value={img1Label}
//             onChange={newValue => setAttributes({ img1Label: newValue })}
//           />
//         </PanelRow>
//       </PanelBody>
//     );
//   };

//   const InspectorControlsOptions = () => {
//     const selectImgsNumOptions = [
//       { value: '2', label: '2' },
//       { value: '3', label: '3' },
//       { value: '4', label: '4' },
//     ];

//     const numberOfGridItems = arrayFromNumOfImages(imgsNum);

//     return (
//       <>
//         <InspectorControls>
//           <PanelBody title="General Options" initialOpen>
//             <PanelRow>
//               <SelectControl
//                 label="Select the number of images"
//                 value={imgsNum}
//                 onChange={newValue => setAttributes({ imgsNum: newValue })}
//                 options={selectImgsNumOptions}
//               />

//               <TextControl value={heading} onChange={heading => setAttributes({ heading })} />
//             </PanelRow>
//           </PanelBody>

//           <PanelBody title={`Image 1`} initialOpen>
//             <PanelRow>
//               <MediaUploadCheck>
//                 <MediaUpload
//                   value={img1.id}
//                   // onSelect={imgInfo => handleImgChange(imgInfo, num)}
//                   onSelect={imgInfo => handleImgChange(imgInfo, 1)}
//                   render={render}
//                 />
//               </MediaUploadCheck>
//             </PanelRow>

//             <PanelRow>
//               <TextControl
//                 label="Image Label"
//                 value={img1Label}
//                 onChange={newValue => setAttributes({ img1Label: newValue })}
//               />
//             </PanelRow>
//           </PanelBody>

//           {/* START: Render images based on the number selected in the general options */}
//           {/* {numberOfGridItems.map(num => {
//           return (
//             <PanelBody key={Math.random() * Math.random()} title={`Image ${num}`} initialOpen>
//               <PanelRow>
//                 <MediaUploadCheck>
//                   <MediaUpload
//                     value={props.attributes[`img${num}`].id}
//                     onSelect={imgInfo => handleImgChange(imgInfo, num)}
//                     render={render}
//                   />
//                 </MediaUploadCheck>
//               </PanelRow>

//               <PanelRow>
//                 <TextControl
//                   label="Image label"
//                   value={props.attributes[`img${num}Label`]}
//                   onChange={newValue => setAttributes({ img1Label: newValue })}
//                 />
//               </PanelRow>
//             </PanelBody>
//           );
//         })} */}
//           {/* END: Render images based on the number selected in the general options */}
//         </InspectorControls>
//       </>
//     );
//   };
//   return (
//     <>
//       <InspectorControlsOptions />
//     </>
//   );
// }
