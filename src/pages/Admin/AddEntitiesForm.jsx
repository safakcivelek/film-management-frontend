import React, { useState } from 'react';
import { Box, Button, Typography, Container, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import GenreService from '../../services/genreService';
import ActorService from '../../services/actorService';
import DirectorService from '../../services/directorService';

const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#1E1F29',
    width: '400px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid silver',
    marginTop: '50px',
    marginBottom: '50px',
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: '#15161D',
    borderRadius: '8px',
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
        },
    },
    width: '100%',
    marginBottom: '20px',
}));

const StyledButton = styled(Button)(() => ({
    backgroundColor: '#D10024',
    color: 'white',
    marginBottom: '16px',
    width: '100%',
    height: '40px',
    '&:hover': {
        backgroundColor: '#B0001B',
    },
}));

const AddEntities = () => {
    // Form tipi: Genre, Actor veya Director
    const [formType, setFormType] = useState('');

    // Her form için ayrı state'ler
    const [genreFormData, setGenreFormData] = useState({
        name: '',
        description: ''
    });

    const [actorFormData, setActorFormData] = useState({
        firstName: '',
        lastName: ''
    });

    const [directorFormData, setDirectorFormData] = useState({
        firstName: '',
        lastName: ''
    });

    // Form tipi değiştiğinde, state'leri sıfırlıyoruz
    const handleFormTypeChange = (e) => {
        setFormType(e.target.value);
        setGenreFormData({ name: '', description: '' });
        setActorFormData({ firstName: '', lastName: '' });
        setDirectorFormData({ firstName: '', lastName: '' });
    };

    // Form alanlarını handle eden fonksiyonlar
    const handleGenreInputChange = (e) => {
        const { name, value } = e.target;
        setGenreFormData({
            ...genreFormData,
            [name]: value
        });
    };

    const handleActorInputChange = (e) => {
        const { name, value } = e.target;
        setActorFormData({
            ...actorFormData,
            [name]: value
        });
    };

    const handleDirectorInputChange = (e) => {
        const { name, value } = e.target;
        setDirectorFormData({
            ...directorFormData,
            [name]: value
        });
    };

    // Submit fonksiyonları
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formType === 'genre') {
                await GenreService.add(genreFormData);
                console.log('Tür başarıyla eklendi!');
            } else if (formType === 'actor') {
                await ActorService.add(actorFormData);
                console.log('Aktör başarıyla eklendi!');
            } else if (formType === 'director') {
                await DirectorService.add(directorFormData);
                console.log('Yönetmen başarıyla eklendi!');
            }
        } catch (error) {
            console.error('Veri eklenemedi. Lütfen bilgilerinizi kontrol edin.', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
            <StyledContainer>
                <Typography variant="h4" sx={{ mt: 6, mb: 7, color: '#D10024' }}>Veri Ekle</Typography>

                {/* Form Tipi Seçimi */}
                <StyledTextField
                    select
                    label="Form Tipini Seçin..."
                    value={formType}
                    onChange={handleFormTypeChange}
                    variant="outlined"
                    InputLabelProps={{
                        style: { color: '#FFFF00' } 
                    }}
                >
                    <MenuItem value="genre">Tür Ekle</MenuItem>
                    <MenuItem value="actor">Aktör Ekle</MenuItem>
                    <MenuItem value="director">Yönetmen Ekle</MenuItem>
                </StyledTextField>


                <form onSubmit={handleSubmit}>
                    {/* Form Tipine Göre Dinamik Alanlar */}
                    {formType === 'genre' && (
                        <>
                            <StyledTextField
                                name="name"
                                label="Tür Adı"
                                variant="outlined"
                                value={genreFormData.name}
                                onChange={handleGenreInputChange}
                            />
                            <StyledTextField
                                name="description"
                                label="Açıklama"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={genreFormData.description}
                                onChange={handleGenreInputChange}
                            />
                        </>
                    )}

                    {formType === 'actor' && (
                        <>
                            <StyledTextField
                                name="firstName"
                                label="İsim"
                                variant="outlined"
                                value={actorFormData.firstName}
                                onChange={handleActorInputChange}
                            />
                            <StyledTextField
                                name="lastName"
                                label="Soyisim"
                                variant="outlined"
                                value={actorFormData.lastName}
                                onChange={handleActorInputChange}
                            />
                        </>
                    )}

                    {formType === 'director' && (
                        <>
                            <StyledTextField
                                name="firstName"
                                label="İsim"
                                variant="outlined"
                                value={directorFormData.firstName}
                                onChange={handleDirectorInputChange}
                            />
                            <StyledTextField
                                name="lastName"
                                label="Soyisim"
                                variant="outlined"
                                value={directorFormData.lastName}
                                onChange={handleDirectorInputChange}
                            />
                        </>
                    )}

                    <StyledButton type="submit" variant="contained" disabled={!formType}>
                        {formType ? (formType === 'genre' ? 'Tür Ekle' : formType === 'actor' ? 'Aktör Ekle' : formType === 'director' ? 'Yönetmen Ekle' : '') : ''}
                    </StyledButton>


                </form>
            </StyledContainer>
        </Box>
    );
};

export default AddEntities;
