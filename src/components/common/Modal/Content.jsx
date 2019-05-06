import React from 'react';
import { ModalBody } from 'reactstrap';

const NewDialogContent = ({ simpleContext, contextComponent }) => {
  return (
    <ModalBody>{simpleContext ? simpleContext : contextComponent}</ModalBody>
  );
};

export default NewDialogContent;
