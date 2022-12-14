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

  const handleOk = () => {
    props.setOpen(false);
    props.setBtn(true)
  };

  let navigate = useNavigate();

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}
      >
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mb:2}}>
          Thank you for visiting the JUSCO website. The Company is sensitive to privacy issues on the internet. Visitors are guaranteed privacy and any information collected is kept private and never shared with other organizations. It is used only by the Company to administer your request, if any. At times when we need information from you, we will try (but are not obligated) to let you know how this information is going to be used.
          </DialogContentText>
          <DialogContentText sx={{mb:2}}>
          Your IP (Internet Protocol) address may be used to gather broad demographic information to measure the number of visits, average time spent on the site, pages viewed, etc. This helps us maintain and administer the website better and also to improve the content of the website to address the more relevant stakeholder issues.
          </DialogContentText>
          <DialogContentText sx={{mb:2}}>
          All rights are reserved by JUSCO Ltd. The content, code and applications contained on this website, under the domain www.juscoltd.com are copyright protected. Site visitors may not reproduce, copy, or redistribute content or code in any form without written permission from the Company.
          </DialogContentText>
          <DialogContentText sx={{mb:2}}>
          This site contains links to sites outside www.juscoltd.com. JUSCO is not responsible for the privacy practices, or the content, of such other websites.
          </DialogContentText>
          <DialogContentText>
          This site has security measures in place to protect the loss, misuse and alteration of the information under our control. Unauthorized attempts to upload or change information (or otherwise cause damage to this website) are strictly prohibited.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
