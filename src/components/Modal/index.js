/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from '@material-ui/core';

import { useModal } from '../../hooks/ModalCustom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const { modalOpen, handleClose } = useModal();

  const backScreen = () => {
    window.location.href = '/payments';
  };

  return (
    <Dialog
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent>
        <DialogContentText>
          Deseja cancelar está ação e começar novamente?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Não
        </Button>
        <Button onClick={backScreen} color="primary">
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
}
