import * as React from 'react';
import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustomCard = styled(Card)(({ theme }) => ({
  border: '3px solid black',
  borderRadius: '6px',
}));

const CustomCardMedia = styled('div')({
  //position: 'relative',
  //width: '100%',
 // height: '0',
  paddingBottom: '150%', // Aspect ratio ayarı
 // overflow: 'hidden',
  //boxSizing: 'border-box',
});

const CustomImage = styled('img')({
  position: 'absolute',
  //top: '0',
  //left: '0',
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Şeffaf siyah arkaplan
  color: 'white', // Beyaz yazı rengi
  padding: '8px',
  boxSizing: 'border-box',
});

const TitleText = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});


const DetailsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
});

const ActionAreaCard = ({ title, image,year,imdb }) => {
  return (
    <CustomCard>
      <CardActionArea>
        <CustomCardMedia>
          <CustomImage src={image} alt={title} />
          <TitleOverlay>
            
            <TitleText 
              variant="h2" 
              component="div" 
              sx={{ color: 'white', fontSize: '1.1rem' }}
            >
              {title}
            </TitleText>

            <DetailsContainer>
              <Typography variant="body2" color="white">
                {year}
              </Typography>
              <Typography variant="body2" sx={{ color: 'yellow' }}>
                IMDb: {imdb}
              </Typography>
            </DetailsContainer>
          </TitleOverlay>
        </CustomCardMedia>
      </CardActionArea>
    </CustomCard>
  );
};

export default ActionAreaCard;
