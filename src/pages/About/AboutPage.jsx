import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
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
      marginBottom: '20px', 
      width: '100%',
      height: '40px',
      fontSize: '14px',
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

const AboutPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E1F29', 
        padding: '40px',
        borderRadius: '8px',
        border: '1px solid silver',
        marginTop: '150px',
        marginBottom: '150px',
        width: { xs: '90%', sm: '80%', md: '60%' },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
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
        Hakkımızda
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 6,
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          width: '100%', 
        }}
      >
        ELECTROFILM, film severler için en yeni ve klasik filmleri sunan bir platformdur. Amacımız, kullanıcılara en iyi film izleme deneyimini sunmaktır. Platformumuz, film bilgilerini ve yüksek kaliteli film afişlerini içerir. Ayrıca, çeşitli film türlerinde geniş bir yelpazeye sahibiz ve her zevke uygun filmler sunuyoruz. Kullanıcılarımızın geri bildirimleri bizim için çok değerlidir ve bu sayede platformumuzu sürekli olarak geliştirmekteyiz. Daha fazla bilgi ve güncellemeler için sosyal medya hesaplarımızı takip edin ve heyecan verici yeni filmler hakkında bilgi sahibi olun.
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
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
    </Container>
  );
};

export default AboutPage;
