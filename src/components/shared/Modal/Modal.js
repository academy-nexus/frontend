import React from 'react';
import './Modal.css';

import { string, node } from 'prop-types';

const Modal = ( { width, children }) => {
  return (
    <>
      <div className='modal-overlay' />
      <div className='modal-wrapper' style={{width: width}}>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  width: string,
  children: node.isRequired
};

Modal.defaultProps = {
  width: '500px'
};

export default Modal;
