import React from 'react'
import {useNavigate} from 'react-router-dom'
import { styles } from './styles'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PrivacyPolicyPopup(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  let navigate = useNavigate();

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}
      >
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
