import * as React from 'react';
import { CardActionArea, Typography } from '@mui/material';
import { CustomCard, CustomCardMedia, CustomImage, TitleOverlay, TitleText, DetailsContainer } from './filmCardStyles';

const FilmCard = ({ title, image, year, imdb }) => {
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

export default FilmCard;
