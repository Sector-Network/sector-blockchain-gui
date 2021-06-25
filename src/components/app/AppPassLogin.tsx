import React from 'react';
// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../modules/rootReducer';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';
import { Trans } from '@lingui/macro';
import { AlertDialog } from '@chia/core';
import { unlockKeyring } from '../../modules/daemon_messages';

export default function AppPassLogin() {
  const dispatch = useDispatch();
  let password_status = useSelector((state) => state.daemon_state.password_status);
  let password_lock_status = useSelector((state) => state.daemon_state.password_lock_status);
  console.log("APP PASS LOGIN")
  console.log(password_status)
  console.log(password_lock_status)
  if (password_status) {
    const open = true

    let password_input = null;

    function handleSubmit() {
      if (
        password_input.value === ''
      ) {
        dispatch(
          openDialog(
            <AlertDialog>
              <Trans>
                Please enter a password
              </Trans>
            </AlertDialog>
          ),
        );
        return;
      }
      console.log(password_input.value)
      dispatch(unlockKeyring(password_input.value));
    }

    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth = {'xs'}
        >
          <DialogTitle id="form-dialog-title">Enter your password:</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              color="secondary"
              margin="dense"
              id="password_input"
              label={<Trans>Password</Trans>}
              inputRef={(input) => {
                password_input = input;
              }}
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              style={{ marginBottom: '8px', marginRight: '8px' }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  console.log("APP PASS LOGIN END")
  return null;

}
