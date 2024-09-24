import * as React from 'react';
import { CardActionArea, Box } from '@mui/material';
import {
  CustomCard,
  CustomCardMedia,
  CustomImage,
  TitleOverlay,
  TitleText,
  DetailsContainer,
  YearText,
  IMDBText,
} from './FilmCardStyles';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const FilmCard = ({ id, name, image, year, score }) => {
  
  const hasScore = score && score > 0;

  return (
    <CustomCard>
      <CardActionArea component={Link} to={`/film/${id}`}>
        <CustomCardMedia>
          <CustomImage src={image} alt={name} />
          <TitleOverlay>
            <TitleText variant="h2" component="div">
              {name}
            </TitleText>
            <DetailsContainer>
              <YearText variant="body2">
                {year}
              </YearText>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                {hasScore ? (
                  <>
                    <StarIcon sx={{ color: '#FFD700', mr: 0.5,fontSize: 'large' }} />
                    <IMDBText variant="body2">
                      {score}
                    </IMDBText>
                  </>
                ) : (
                  <IMDBText variant="body2">
                    Puan yok
                  </IMDBText>
                )}
              </Box>
            </DetailsContainer>
          </TitleOverlay>
        </CustomCardMedia>
      </CardActionArea>
    </CustomCard>
  );
};

export default FilmCard;
