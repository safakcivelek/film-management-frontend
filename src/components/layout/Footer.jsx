import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Print';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1E1F29 ',
  padding: theme.spacing(4, 2),
  color: 'white',
  marginTop: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 1),
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Box sx={{ px: { xs: 2, sm: 3, md: 20 } }}>
        <Grid container spacing={0} sx={{ mx: { xs: 0, md: 0 } }}>
          
          <Grid item xs={12} md={3} sx={{ mt: 5, mb: 5 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
              DESTEK VE BİLGİ
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Hakkımızda</Link>
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>İletişim</Link>
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Gizlilik Politikası</Link>
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Sipariş ve İade</Link>
              <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', textDecoration: 'none' }}>Şartlar & Koşullar</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 5, mb: 5 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
              BİZE ULAŞIN
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: '#D10024' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>1734 Stonecoal Road</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, color: '#D10024' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>+021-95-51-84</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1, color: '#D10024' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>email@email.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaxIcon sx={{ mr: 1, color: '#D10024' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>+021-95-51-85 (Fax)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 5, mb: 5 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
              BİZİ TAKİP EDİN
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FacebookIcon sx={{ mr: 1, color: '#B9BABC' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>Facebook</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TwitterIcon sx={{ mr: 1, color: '#B9BABC' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>Twitter</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <InstagramIcon sx={{ mr: 1, color: '#B9BABC' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>Instagram</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <YouTubeIcon sx={{ mr: 1, color: '#B9BABC' }} />
                <Typography variant="body2" sx={{ color: '#B9BABC' }}>YouTube</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 5, mb: 5 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
              POPÜLER TÜRLER
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ width: '50%' }}>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Aksiyon</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Komedi</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Dram</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Korku</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', textDecoration: 'none' }}>Bilim Kurgu</Link>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Belgesel</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Romantik</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Animasyon</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', mb: 2, textDecoration: 'none' }}>Gerilim</Link>
                <Link href="#" variant="body2" sx={{ display: 'block', color: '#B9BABC', textDecoration: 'none' }}>Müzikal</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5, pt: 2, borderTop: '1px solid #B9BABC' }}>
          <Typography variant="body2" sx={{ color: '#B9BABC' }}>
            © 2024 ELECTROFILM. Tüm Hakları Saklıdır.
          </Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
