import React from 'react';
import { ModalHeader } from 'reactstrap';

const NewDialogHeader = ({ simpleContext, contextComponent }) => {
  return (
    <ModalHeader>
      {simpleContext ? simpleContext : contextComponent}
    </ModalHeader>
  );
};

export default NewDialogHeader;
