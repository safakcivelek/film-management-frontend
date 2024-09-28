import React from 'react';
import { Box, Button, Typography, Link, Container, TextField } from '@mui/material';
import { styled } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Stil tanımları
const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#1E1F29',
  width: '900px',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  padding: '24px',
  border: '1px solid silver',
  [theme.breakpoints.down('md')]: {
    width: '95%',
    height: 'auto',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#15161D',
  borderRadius: '8px',
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

const StyledButton = styled(Button)(({ theme, loading }) => ({
  //backgroundColor: '#D10024',
  backgroundColor: loading ? '#D10024' : 'darkred',
  color: 'white',
  marginBottom: '16px',
  width: '100%',
  //height: '40px',
  '&:hover': {
    //backgroundColor: 'darkred',
    backgroundColor: loading ? 'darkred' : '#D10024',
  },
  [theme.breakpoints.up('md')]: {
    width: '90%',
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

// Hata mesajı stili
const ErrorText = styled(Typography)(() => ({
  color: '#D10024',
  fontSize: '0.8rem',
  marginTop: '4px',
  textAlign: 'left', // Hatalar solda hizalansın
}));

// Yup doğrulama şeması
const validationSchema = Yup.object({
  firstName: Yup.string().required('Ad zorunludur*'),
  lastName: Yup.string().required('Soyad zorunludur*'),
  email: Yup.string().email('Geçersiz email formatı*').required('Email zorunludur*'),
  password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır*').required('Şifre zorunludur*'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor*')
    .required('Şifre onayı zorunludur*'),
});

// RegisterPage componenti
const RegisterPage = () => {
  const handleRegister = async (values, { setSubmitting }) => {
    try {
      await AuthService.register(values.firstName, values.lastName, values.email, values.password, values.confirmPassword);
      toast.success('Kayıt başarılı!'); // Başarılı toast mesajı
      setTimeout(() => {
        window.location.href = '/login'; // 2 saniye sonra yönlendirme
      }, 2000);
    } catch (error) {
      toast.error('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.'); // Hata toast mesajı
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast mesajlarını göstermek için gerekli */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
        <Box sx={{ flex: 1, minHeight: '100px' }} />
        <StyledContainer>
          <Typography variant="h4" sx={{ mt: 6, mb: 7, color: '#D10024' }}>Hesabını Oluştur</Typography>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '90%', marginBottom: '40px' }}>
                  <Field
                    name="email"
                    as={StyledTextField}  // StyledTextField kullanıyoruz
                    label="Email"
                    fullWidth
                    variant="outlined"

                  />
                  <ErrorMessage name="email" component={ErrorText} />
                </Box>

                <SideBySideBox>
                  <Box sx={{ width: '48%' }}>
                    <Field
                      name="firstName"
                      as={StyledTextField}  // StyledTextField kullanıyoruz
                      label="Ad"
                      fullWidth
                      variant="outlined"

                    />
                    <ErrorMessage name="firstName" component={ErrorText} />
                  </Box>

                  <Box sx={{ width: '48%' }}>
                    <Field
                      name="lastName"
                      as={StyledTextField}  // StyledTextField kullanıyoruz
                      label="Soyad"
                      fullWidth
                      variant="outlined"

                    />
                    <ErrorMessage name="lastName" component={ErrorText} />
                  </Box>
                </SideBySideBox>

                <SideBySideBox>
                  <Box sx={{ width: '48%' }}>
                    <Field
                      name="password"
                      as={StyledTextField}  // StyledTextField kullanıyoruz
                      label="Şifre"
                      type="password"
                      fullWidth
                      variant="outlined"
                    />
                    <ErrorMessage name="password" component={ErrorText} />
                  </Box>

                  <Box sx={{ width: '48%' }}>
                    <Field
                      name="confirmPassword"
                      as={StyledTextField}  // StyledTextField kullanıyoruz
                      label="Şifreyi Onayla"
                      type="password"
                      fullWidth
                      variant="outlined"

                    />
                    <ErrorMessage name="confirmPassword" component={ErrorText} />
                  </Box>
                </SideBySideBox>

                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    disabled={isSubmitting}
                  >
                    Kayıt Ol
                  </StyledButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 3, mb: 3 }}>
            Hesabınız var mı? <Link href="/login" sx={{ color: '#D10024' }}>Giriş Yap</Link>
          </Typography>
        </StyledContainer>
        <Box sx={{ flex: 1, minHeight: '100px' }} />
      </Box>
    </>
  );
};

export default RegisterPage;
