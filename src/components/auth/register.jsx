import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { styled } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#1E1F29',
  width: 1000, 
  height: 650, 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  padding: '24px',
  border: '1px solid silver',
  [theme.breakpoints.down('sm')]: {
    width: '95%', 
    height: 'auto', 
  },
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#15161D',
  marginBottom: '40px',
  width: '90%',
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
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px', 
  },
}));


const SideBySideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginBottom: '20px', 
  },
}));


const SideBySideTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#15161D',
  width: '48%',
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
  [theme.breakpoints.down('sm')]: {
    width: '100%', 
    marginBottom: '20px', 
  },
}));


const StyledButton = styled(Button)({
  backgroundColor: '#D10024',
  color: 'white',
  marginBottom: '16px',
  width: '55%',
  height: '40px',
  '&:hover': {
    backgroundColor: '#B0001B',
  },
});

// Register component
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Kayıt işlemi
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
      <Box sx={{ flex: 1, minHeight: '100px' }} /> 
      <StyledContainer>
        <Typography variant="h4" sx={{ mb: 7, color: '#D10024' }}>Hesabını Oluştur</Typography>
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SideBySideBox>
          <SideBySideTextField
            label="Adı"
            type="text"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <SideBySideTextField
            label="Soyadı"
            type="text"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </SideBySideBox>
        <SideBySideBox>
          <SideBySideTextField
            label="Şifre"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SideBySideTextField
            label="Şifreyi Onayla"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </SideBySideBox>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
          <StyledButton
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={handleRegister}
          >
            Kayıt Ol
          </StyledButton>
        </Box>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 3 }}>
          Hesabınız var mı? <Link href="/login" sx={{ color: '#D10024' }}>Giriş Yap</Link>
        </Typography>
      </StyledContainer>
      <Box sx={{ flex: 1, minHeight: '100px' }} /> 
    </Box>
  );
};

export default Register;
