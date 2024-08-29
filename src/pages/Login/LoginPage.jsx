import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import AuthService from '../../services/authService';
import { toast } from 'react-toastify';


const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#1E1F29',
  width: '90%',
  maxWidth: 610,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  padding: '24px',
  border: '1px solid silver',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    width: 610,
    height: 550,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#15161D',
  marginBottom: '24px',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '90%',
    marginBottom: '40px',
  },
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#D10024',
  color: 'white',
  marginBottom: '16px',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '90%',
  },
  '&:hover': {
    backgroundColor: '#B0001B',
  },
}));

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error2, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await AuthService.login(email, password); 

      // Başarılı girişte token'ları localStorage'a kaydediyoruz
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      // Kullanıcıyı girişten sonra yönlendiriyoruz
      window.location.href = '/';

    } catch (error) {
      toast.error('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
      <Box sx={{ flex: 1, minHeight: '100px' }} />
      <StyledContainer>
        <Typography variant="h5" sx={{ mb: 7, color: '#D10024' }}>ELECTROFILM</Typography>
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Şifre"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={handleLogin}
        >
          Giriş Yap
        </StyledButton>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 3 }}>
          Hesabınız yok mu? <Link href="/register" sx={{ color: '#D10024' }}>Kayıt Ol</Link>
        </Typography>
      </StyledContainer>
      <Box sx={{ flex: 1, minHeight: '100px' }} />
    </Box>
  );
};

export default LoginPage;
