import { Button } from '@wordpress/components';

const render = ({ open }) => {
  return (
    <Button variant="primary" onClick={open}>
      Choose Image
    </Button>
  );
};

export default render;
