import React from 'react';
import { ModalFooter } from 'reactstrap';

const NewDialogueAction = ({ simpleContext, contextComponent }) => {
  return (
    <ModalFooter>
      {simpleContext ? simpleContext : contextComponent}
    </ModalFooter>
  );
};

export default NewDialogueAction;
