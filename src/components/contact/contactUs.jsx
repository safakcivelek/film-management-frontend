import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled(Container)({
  backgroundColor: '#1E1F29',
  color: 'white',
  padding: '24px',
  borderRadius: '8px',
  border: '1px solid silver',
  marginTop: '50px',
  marginBottom: '50px',
});

const StyledTextField = styled(TextField)({
  backgroundColor: '#15161D',
  marginBottom: '20px',
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

const ContactUs = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D', paddingTop: '50px', paddingBottom: '50px' }}>
      <Typography variant="h3" sx={{ mb: 4, color: 'white', fontWeight: 'bold' }}>İletişim</Typography>
      <ContactContainer maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledTextField label="Adınız" variant="outlined" />
            <StyledTextField label="Email" variant="outlined" />
            <StyledTextField label="Mesajınız" variant="outlined" multiline rows={4} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#D10024',
                color: 'white',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#B0001B',
                },
              }}
            >
              Gönder
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
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
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </ContactContainer>
    </Box>
  );
};

export default ContactUs;
