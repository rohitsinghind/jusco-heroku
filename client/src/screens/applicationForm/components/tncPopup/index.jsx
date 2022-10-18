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

export default function TncPopup(props) {

  const handleCancel = () => {
    props.setOpen(false);
    props.setBtn(false)
  };

  const handleOk = () => {
    props.setOpen(false);
    props.setBtn(true)
  };

  let navigate = useNavigate();

  return (
    <>
      <Dialog open={props.open} onClose={handleCancel}
      >
        <DialogTitle>Terms & Conditions – </DialogTitle>
        <DialogContent>
          <DialogContentText>
          By clicking on the Submit button below, you agree to the following Terms & Conditions.<br/>
          <b>a.</b>	You agree that you are applying for collection of wet waste and dry waste from your establishment by TSUIL.<br/>
          <b>b.</b>	You agree that the address and contact number provided by you in this application form would be used to<br/>
          <b>•</b>	contact you or your representative to schedule a visit to your garbage pickup address by TSUIL officer.<br/>
          <b>•</b>	provide and discuss further details of this service to you.<br/>
          <b>c.</b>	The Document(s) uploaded by you in this application would be used to verify the establishment in case any verifications are required by TSUIL at any stage of this service.<br/>
          <b>d.</b>	If you don’t agree to the Terms and Conditions of the application above, please do not proceed further to submit the page. You may reach out to 0657-xxxxxxx for an officer to contact you.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
