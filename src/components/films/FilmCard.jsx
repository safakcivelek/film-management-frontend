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
} from './FilmCardStyles';
import { Link, useNavigate } from 'react-router-dom';

const FilmCard = ({ id, name, image, year, score }) => {
  // const navigate = useNavigate();
  // const handleCardClick = () => {
  //   navigate(`/film/${id}`);
  // };


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
              <IMDBText variant="body2">
                IMDb: {score}
              </IMDBText>
            </DetailsContainer>
          </TitleOverlay>
        </CustomCardMedia>
      </CardActionArea>
    </CustomCard>
  );
};

export default FilmCard;
