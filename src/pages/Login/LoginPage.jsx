import React from 'react';
import { Box, Button, Typography, Link, Container, TextField, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authService from '../../services/authService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginBottom:'100px',
  marginTop:'100px',
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
  [theme.breakpoints.up('md')]: {
    width: 610,
    height: 550,
  },   
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#15161D',
  borderRadius: '8px',
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
  [theme.breakpoints.up('md')]: {
    width: '90%',
    height: 'auto',
  },
}));

const StyledButton = styled(Button)(({ theme, loading }) => ({
  backgroundColor: 'darkred',
  color: 'white',
  marginBottom: '16px',
  width: '90%',
  '&:hover': {
    backgroundColor: '#D10024',
  },
  '&.Mui-disabled': {
    backgroundColor: 'darkred',
    color: 'white',
  },
}));

const SideBySideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '40px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginBottom: '20px',
  },
}));

const ErrorText = styled(Typography)(() => ({
  color: '#D10024',
  fontSize: '0.8rem',
  marginTop: '4px',
  textAlign: 'left',
  width: '90%'
}));

// Yup doğrulama şeması
const validationSchema = Yup.object({
  email: Yup.string().email('Geçersiz email adresi').required('Email zorunludur*'),
  password: Yup.string().required('Şifre zorunludur*'),
});

const LoginPage = () => {
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await authService.login(values.email, values.password);
      toast.success('Giriş başarılı!');

      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      toast.error('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
     
      <StyledContainer>
        <Typography
          variant="h5"
          sx={{mb: 7,color: '#D10024', fontSize: { xs: '1rem', sm: '1.8rem'}}}                                 
        >
          ELECTROFILM
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SideBySideBox >
                <Field
                  as={StyledTextField}
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                />
                <ErrorText>
                  <ErrorMessage name="email" />
                </ErrorText>
              </SideBySideBox>

              <SideBySideBox >
                <Field
                  as={StyledTextField}
                  label="Şifre"
                  type="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                />
                <ErrorText>
                  <ErrorMessage name="password" />
                </ErrorText>
              </SideBySideBox>

              <StyledButton
                type="submit"
                variant="contained"
                startIcon={isSubmitting ? <CircularProgress size={24} color="inherit" /> : <LoginIcon />}
                disabled={isSubmitting}
                loading={isSubmitting.toString()}
              >
                {isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </StyledButton>
            </Form>
          )}
        </Formik>

        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 3 }}>
          Hesabınız yok mu? <Link href="/register" sx={{ color: '#D10024' }}>Kayıt Ol</Link>
        </Typography>
      </StyledContainer>
     
    </Box>
  );
};

export default LoginPage;
