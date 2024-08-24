import React from 'react';
import { Box, Button } from '@mui/material';

const LoadMoreButton = ({ onLoadMore, isVisible }) => {
  if (!isVisible) return null;

  return (
    <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
      <Button
        variant="outlined"
        sx={{
          mt: 4,
          color: 'white',
          borderColor: '#D10024',
          backgroundColor: '#15161D',
          padding: '8px 24px',
          borderWidth: '2px',
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#1E1F29',
            borderColor: '#D10024',
          },
        }}
        onClick={onLoadMore}
      >
        Daha fazla
      </Button>
    </Box>
  );
};

export default LoadMoreButton;
