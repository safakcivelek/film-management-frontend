import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialButton = ({ icon: Icon, label, href }) => (
  <Button
    variant="outlined"
    startIcon={<Icon />}
    href={href}
    target="_blank"
    sx={{
      color: 'white',
      borderColor: '#D10024',
      marginBottom: '10px',
      width: '100%', // Full width
      height: '40px', // Reduced height
      fontSize: '14px', // Reduced font size
      '&:hover': {
        backgroundColor: '#D10024',
        color: 'white',
        borderColor: '#B0001B',
      },
    }}
  >
    {label}
  </Button>
);

const AboutUs = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D', paddingTop: '120px', paddingBottom: '120px', position: 'relative' }}>
      <Typography variant="h3" sx={{ mb: 4, color: 'white', fontWeight: 'bold' }}>Hakkımızda</Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', width: '50%' }}>
        ELECTROFILM, film severler için en yeni ve klasik filmleri sunan bir platformdur. Amacımız, kullanıcılara en iyi film izleme deneyimini sunmaktır. Platformumuz, film bilgilerini, kullanıcı yorumlarını ve yüksek kaliteli film afişlerini içerir. Ayrıca, çeşitli film türlerinde geniş bir yelpazeye sahibiz ve her zevke uygun filmler sunuyoruz. Kullanıcılarımızın geri bildirimleri bizim için çok değerlidir. İletişim sayfamızdan bize ulaşabilir ve platformumuzu daha iyi hale getirmek için önerilerde bulunabilirsiniz. Daha fazla bilgi ve güncellemeler için sosyal medya hesaplarımızı takip edin.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ width: '50%' }}>
        <Grid item xs={12} sm={6} md={3}>
          <SocialButton icon={FacebookIcon} label="Facebook" href="https://www.facebook.com" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialButton icon={TwitterIcon} label="Twitter" href="https://www.twitter.com" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialButton icon={InstagramIcon} label="Instagram" href="https://www.instagram.com" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialButton icon={YouTubeIcon} label="YouTube" href="https://www.youtube.com" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
