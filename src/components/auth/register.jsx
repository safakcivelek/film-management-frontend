import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { styled } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Styled Container for the register form
const StyledContainer = styled(Container)({
  backgroundColor: '#1E1F29',
  width: 1000, // Increased width to 1000px
  height: 650, // Adjusted height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  padding: '24px',
  border: '1px solid silver',
});

// Styled TextField for all input fields
const StyledTextField = styled(TextField)({
  backgroundColor: '#15161D',
  marginBottom: '40px', // Same margin as in Login form
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
});

// Styled Box for fields that are side by side
const SideBySideBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  marginBottom: '40px', // Same margin as in Login form
});

// Styled TextField for side by side fields
const SideBySideTextField = styled(TextField)({
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
});

// Styled Button for the sign-up button
const StyledButton = styled(Button)({
  backgroundColor: '#D10024',
  color: 'white',
  marginBottom: '16px',
  width: '55%', // Adjusted width to cover more area
  height: '40px', // Reverted height to original
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
