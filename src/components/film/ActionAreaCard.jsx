import * as React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
  border: '3px solid black',
  borderRadius: '6px',
  boxShadow: theme.shadows[1],
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  display: 'flex',
  flexDirection: 'column',
  height: '100%', 
}));

const CustomCardMedia = styled('div')({
  position: 'relative',
  width: '100%',
  height: '0',
  paddingBottom: '150%', // Aspect ratio ayarı
  overflow: 'hidden',
});

const CustomImage = styled('img')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TitleOverlay = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Şeffaf siyah arkaplan
  color: 'white', // Beyaz yazı rengi
  padding: '10px',
  boxSizing: 'border-box',
});

const ActionAreaCard = ({ title, image }) => {
  return (
    <CustomCard>
      <CardActionArea>
        <CustomCardMedia>
          <CustomImage src={image} alt={title} />
          <TitleOverlay>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </TitleOverlay>
        </CustomCardMedia>
      </CardActionArea>
    </CustomCard>
  );
};

export default ActionAreaCard;
