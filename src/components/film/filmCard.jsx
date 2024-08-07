import * as React from 'react';
import { CardActionArea } from '@mui/material';
import {
  CustomCard,
  CustomCardMedia,
  CustomImage,
  TitleOverlay,
  TitleText,
  DetailsContainer,
  YearText,
  IMDBText,
} from './filmCardStyles';
import { useNavigate } from 'react-router-dom';

const FilmCard = ({ id,title, image, year, imdb }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/film/${id}`);
  };

  return (
    <CustomCard>
      <CardActionArea onClick={handleCardClick}>
        <CustomCardMedia>
          <CustomImage src={image} alt={title} />
          <TitleOverlay>
            <TitleText variant="h2" component="div">
              {title}
            </TitleText>
            <DetailsContainer>
              <YearText variant="body2">
                {year}
              </YearText>
              <IMDBText variant="body2">
                IMDb: {imdb}
              </IMDBText>
            </DetailsContainer>
          </TitleOverlay>
        </CustomCardMedia>
      </CardActionArea>
    </CustomCard>
  );
};

export default FilmCard;
