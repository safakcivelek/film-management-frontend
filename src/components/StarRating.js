import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useFilmDetail } from '../contextApi/FilmDetailContext';
import ConfirmationDialog from '../pages/FilmDetail/ConfirmationDialog';
import LoginDialog from '../pages/FilmDetail/LoginDialog';
import { useAuth } from '../contextApi/AuthContext';

const StarRatingComponent = ({ onRatingSelect }) => {
  const { film, fetchFilmDetail } = useFilmDetail();
  const {user}=useAuth();
  const [hover, setHover] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [tempRating, setTempRating] = useState(null);
  const [openLoginAlert, setOpenLoginAlert] = useState(false); // LoginAlert için durum

  const handleRatingClick = (starRatingValue) => {
    if (user) {
      setTempRating(starRatingValue);
      setShowConfirmDialog(true);
    } else {
      setOpenLoginAlert(true); // Giriş yapılmamışsa LoginAlert modalını aç
    }
  };

  const handleConfirm = async () => {
    try {   
      await onRatingSelect(tempRating);   
      await fetchFilmDetail(); // Puanlamayı yenile
    } catch (error) {
      console.error('Puanlama sırasında bir hata oluştu:', error);
    }
    setShowConfirmDialog(false);
  };

  const handleCancel = () => {
    setTempRating(null);
    setShowConfirmDialog(false);
  };

  const renderStar = (index) => {
    const starRatingValue = index + 1;
    const fillPercentage = (hover || film?.score) - index > 0 ? Math.min(((hover || film?.score) - index) * 100, 100) : 0;

    return (
      <label key={index} style={{ position: 'relative', cursor: 'pointer' }}>
        <input
          type="radio"
          name="rating"
          value={starRatingValue}
          onClick={() => handleRatingClick(starRatingValue)}
          style={{ display: 'none' }}
        />
        <AiFillStar
          size={30}
          color="#d3d3d3"
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
          }}
        />
        <AiFillStar
          size={30}
          color="#ffc107"
          style={{
            clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
            position: 'relative',
            zIndex: 2,
            marginRight: '6px'
          }}
          onMouseEnter={() => setHover(starRatingValue)}
          onMouseLeave={() => setHover(null)}
        />
      </label>
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h5" component="span" sx={{ color: 'white', marginRight: '18px' }}>
        Puan:
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {[...Array(5)].map((_, index) => renderStar(index))}
        <Typography variant="h5" component="span" sx={{ color: 'white', marginLeft: '8px' }}>
          ({(film?.score ? film.score.toFixed(1) : '0')})
        </Typography>
      </div>

      {/* Confirm Modal */}
      <ConfirmationDialog
        open={showConfirmDialog} // Modal açık mı?
        handleClose={handleCancel} // Modal kapandığında yapılacak işlemler
        tempRating={tempRating} // Kullanıcının seçtiği puan
        handleConfirm={handleConfirm} // Onaylandığında yapılacak işlemler
        action="rating"
      />

      {/* Login Alert Modal */}
      <LoginDialog
        open={openLoginAlert}
        handleClose={() => setOpenLoginAlert(false)}
        action="rating"
      />
    </div>
  );
};

export default StarRatingComponent;
