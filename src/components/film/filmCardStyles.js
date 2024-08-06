import { styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
  border: '3px solid black',
  borderRadius: '6px',
}));

const CustomCardMedia = styled('div')({
  paddingBottom: '150%', // Aspect ratio ayarı
  position: 'relative',
});

const CustomImage = styled('img')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease-in-out', // Animasyon için geçiş süresi
  '&:hover': {
    transform: 'scale(1.1)', // Büyütme efekti
  }
});

const TitleOverlay = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Şeffaf siyah arka plan
  color: 'white', // Beyaz yazı rengi
  padding: '8px',
  boxSizing: 'border-box',
});

const TitleText = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: 'white', 
  fontSize: '1.1rem', 
});

const DetailsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
});

const YearText = styled(Typography)(({ theme }) => ({
  color: 'white', 
}));

const IMDBText = styled(Typography)(({ theme }) => ({
  color: 'yellow', 
}));

export {
  CustomCard,
  CustomCardMedia,
  CustomImage,
  TitleOverlay,
  TitleText,
  DetailsContainer,
  YearText,
  IMDBText,
};
