import React from 'react';
import { Modal } from 'reactstrap';

// components
const NewDialogue = ({
  DialogTitle,
  DialogContent,
  DialogActions,
  isOpen,
  toggle,
  className,
  externalCloseBtn,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        toggle();
      }}
      centered={true}
      className={className}
      external={externalCloseBtn}
    >
      {DialogTitle}
      {DialogContent}
      {DialogActions}
    </Modal>
  );
};

export default NewDialogue;
