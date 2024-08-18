import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const FilmVideoPlayer = ({ videoUrl, videoRef }) => {
    return (
        <Paper ref={videoRef} sx={{ p: 3, backgroundColor: '#1E1F29', color: 'white' }}>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Filmi İzle
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe
                    src={videoUrl || ''} 
                    title="Film Video"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: 2
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Box>
        </Paper>
    );
};

export default FilmVideoPlayer;
