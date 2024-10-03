import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SuccessDialog({ open, handleClose,action }) {

  const getDialogContent = () => {
    switch (action) {
      case 'purchase':
        return {
          title: 'Satın Alma Başarılı',
          message: 'Filmi başarıyla satın aldınız.',
        };
      case 'rating':
        return {
          title: 'Puanlama Başarılı',
          message: 'Filmi başarıyla puanladınız.',
        };
      default:
        return {
          title: 'Başarılı',
          message: 'İşleminiz başarıyla gerçekleşti.',
        };
    }
  };

  const { title, message } = getDialogContent();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="success-dialog-title"
      PaperProps={{
        style: {
          backgroundColor: '#20232a',
          color: 'white',
          padding: '10px',
          width: '30%',
        },
      }}
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: '400px',
          backgroundColor: '#20232a',
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(1px)',
        },
      }}
    >
      <DialogTitle id="success-dialog-title" sx={{ color: 'white', textAlign: 'center' }}>
        <CheckCircleIcon sx={{ color: '#4CAF50', marginRight: '10px', verticalAlign: 'middle' }} />
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'white', textAlign: 'center' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleClose} sx={{ color: '#2196F3', fontWeight: 'bold' }} autoFocus>
          Tamam
        </Button>
      </DialogActions>
    </Dialog>
  );
}
