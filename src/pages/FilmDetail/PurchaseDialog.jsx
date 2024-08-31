import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function PurchaseDialog({ open, handleClose, message }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    handleClose();
    navigate('/login');
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
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
          backdropFilter: 'blur(1px)', // Hafif bulanıklık efekti (düşürüldü)
        },
      }}
    >
      <DialogTitle id="responsive-dialog-title" sx={{ color: 'white', textAlign: 'center' }}>
        Bilgilendirme !
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'white', textAlign: 'center' }}>
          Filmi satın almak için giriş yapmalısınız.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleLoginRedirect} sx={{ color: '#1E90FF', fontWeight: 'bold' }} autoFocus>
          Giriş Yap
        </Button>
        <Button onClick={handleClose} sx={{ color: '#FF3D00' }}>
          Kapat
        </Button>
      </DialogActions>
    </Dialog>
  );
}
