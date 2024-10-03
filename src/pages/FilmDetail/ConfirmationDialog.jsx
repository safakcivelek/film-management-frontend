import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { ShoppingCart, StarRate, Start } from '@mui/icons-material';

export default function ConfirmationDialog({ open, handleClose, handleConfirm, action }) {

  const getDialogContent = () => {
    switch (action) {
      case 'purchase':
        return {
          title: 'Satın Alma Onayı',
          message: 'Bu filmi satın almak istediğinize emin misiniz?',
          icon: <ShoppingCart sx={{ color: '#D10024', marginRight: '10px', verticalAlign: 'middle' }} />
        };
      case 'rating':
        return {
          title: 'Puanlama Onayı',
          message: 'Verdiğiniz puanı kaydetmek istediğinize emin misiniz?',
          icon: <StarRate sx={{ color: '#FFD700', marginRight: '10px', verticalAlign: 'middle' }} />        
        };
      default:
        return {
          title: 'Onay',
          message: 'Bu işlemi gerçekleştirmek için onay vermeniz gerekiyor.',
          icob:<WarningAmberIcon sx={{ color: '#FFA726', marginRight: '10px', verticalAlign: 'middle' }} />
        };
    }
  };

  const {title,message,icon} = getDialogContent();
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="confirm-dialog-title"
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arkada hafif bir kararma efekti
          backdropFilter: 'blur(1px)', // Hafif bulanıklık efekti
        },
      }}
    >
      <DialogTitle id="confirm-dialog-title" sx={{ color: 'white', textAlign: 'center' }}>       
        {icon}
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'white', textAlign: 'center' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleConfirm} sx={{ color: '#1E90FF', fontWeight: 'bold' }} autoFocus>
          Evet
        </Button>
        <Button onClick={handleClose} sx={{ color: '#FF3D00' }}>
          Hayır
        </Button>
      </DialogActions>
    </Dialog>
  );
}
