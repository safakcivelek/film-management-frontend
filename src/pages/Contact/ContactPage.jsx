import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Grid, Modal, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactContainer = styled(Box)({
  backgroundColor: '#1E1F29',
  color: 'white',
  padding: '32px',
  borderRadius: '8px',
  border: '1px solid silver',
  marginTop: '60px',
  marginBottom: '60px',
  width: '90%',
  boxSizing: 'border-box',
});

const StyledTextField = styled(TextField)({
  backgroundColor: '#15161D',
  marginBottom: '30px',
  width: '100%',
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

const StyledButton = styled(Button)(({ theme, loading }) => ({
  backgroundColor: loading ? '#D10024' : '#D10024',
  color: 'white',
  marginBottom: '16px',
  width: '100%',
  '&:hover': {
    backgroundColor: loading ? '#D10024' : '#B0001B',
  },
  '&.Mui-disabled': {
    backgroundColor: 'darkred',
    color: 'white',
  },
}));

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Adınız en az 2 karakter olmalıdır.')
    .max(18, 'Adınız en fazla 18 karakter olmalıdır.')
    .required('Ad zorunludur.'),
  email: Yup.string()
    .email('Geçersiz email adresi.')
    .required('Email zorunludur.'),
  message: Yup.string()
    .min(5, 'Mesajınız en az 5 karakter olmalıdır.')
    .required('Mesaj zorunludur.'),
});

const ContactPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [buttonText, setButtonText] = useState("Gönder");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setButtonText("Gönderiliyor...");
    setLoading(true);

    // 2 saniye bekle ve sonra modalı aç
    setTimeout(() => {
      setOpenModal(true);
      resetForm();
      setButtonText("Gönder");
      setLoading(false);
      setSubmitting(false);
    }, 1500);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#15161D',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <ContactContainer maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            mb: 6,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: {
              xs: '1.5rem',  
              sm: '2rem',    
              md: '2.5rem',  
              lg: '3rem',    
            },
          }}
        >
          İletişim
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5}>
                  <ErrorMessage name="name" component="div" style={{ color: '#D10024' }} />
                  <Field
                    as={StyledTextField}
                    label="Adınız"
                    name="name"
                    variant="outlined"
                  />

                  <ErrorMessage name="email" component="div" style={{ color: '#D10024' }} />
                  <Field
                    as={StyledTextField}
                    label="Email"
                    name="email"
                    variant="outlined"
                  />

                  <ErrorMessage name="message" component="div" style={{ color: '#D10024' }} />
                  <Field
                    as={StyledTextField}
                    label="Mesajınız"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />

                  <StyledButton
                    type="submit"
                    variant="contained"
                    loading={loading}
                    startIcon={loading ? <CircularProgress size={24} color="inherit" /> : null}
                    disabled={isSubmitting}
                  >
                    {loading ? 'Gönderiliyor...' : buttonText}
                  </StyledButton>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25164.530059501424!2d28.9783585707882!3d41.00823761964757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb3a2d3d1b17%3A0x7b8e0e54edc3f3a2!2sGalata%20Kulesi%2C%20Bereketzade%2C%20Galata%20Kulesi%20Sk.%2C%20Beyo%C4%9Flu%2C%20%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sus!4v1618326897326!5m2!1str!2sus"
                      width="100%"
                      height="100%"
                      allowFullScreen="true"
                      loading="lazy"
                      style={{ border: 0 }}
                    ></iframe>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </ContactContainer>

      {/* Modal Bileşeni */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#1E1F29',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircleIcon sx={{ color: '#4CAF50', marginRight: 1 }} />
            <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
              Mesajınız gönderildi!
            </Typography>
          </Box>
          <Typography sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
            Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
          </Typography>
          <Button onClick={handleCloseModal} variant="contained" sx={{ mt: 3, backgroundColor: '#4CAF50' }}>
            Kapat
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default ContactPage;
