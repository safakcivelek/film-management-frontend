import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1e1f29',
      }}
    >
      <CircularProgress sx={{ color: 'white' }} />
      <Typography variant="h6" component="div" sx={{ color: '#D10024', fontWeight: 'bold', fontSize: '1.3rem', ml: 2 }}>
        ELECTROFILM
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
