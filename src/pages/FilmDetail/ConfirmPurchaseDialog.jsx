import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; 

export default function ConfirmPurchaseDialog({ open, handleClose, handleConfirm }) {
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
        <WarningAmberIcon sx={{ color: '#FFA726', marginRight: '10px', verticalAlign: 'middle' }} />
        Satın Alım Onayı
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'white', textAlign: 'center' }}>
          Filmi satın almak istediğinizden emin misiniz?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleConfirm} sx={{ color: '#2196F3', fontWeight: 'bold' }} autoFocus>
          Evet
        </Button>
        <Button onClick={handleClose} sx={{ color: '#D32F2F' }}>
          Hayır
        </Button>
      </DialogActions>
    </Dialog>
  );
}
