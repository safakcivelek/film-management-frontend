import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Container, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FilmService from '../../services/filmService';
import GenreService from '../../services/genreService';
import ActorService from '../../services/actorService';
import DirectorService from '../../services/directorService';
import { toast } from 'react-toastify';


const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#1E1F29',
    width: '900px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid silver',
    [theme.breakpoints.down('sm')]: {
        width: '95%',
        height: 'auto',
    },
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
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: '20px',
    },
    width: '100%',
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

// Yup doğrulama şeması
const validationSchema = Yup.object({
    name: Yup.string().required('Film adı zorunludur*'),
    year: Yup.number().required('Yıl zorunludur*'),
    price: Yup.number().required('Fiyat zorunludur*'),
    duration: Yup.number()
        .required('Süre zorunludur*')
        .min(1, 'Süre 0 dan büyük olmalıdır*')
        .max(600, 'Süre en fazla 600 dakika olabilir*'), 
    directorId: Yup.string().required('Yönetmen seçimi zorunludur*'),
    actorIds: Yup.array().min(1, 'En az bir aktör seçilmelidir*').required('Aktör seçimi zorunludur*'),
    genreIds: Yup.array().min(1, 'En az bir tür seçilmelidir*').required('Tür seçimi zorunludur*'),
    image: Yup.string().url('Geçerli bir URL formatı olmalıdır.').nullable(), 
    video: Yup.string().url('Geçerli bir URL formatı olmalıdır.').nullable(), 
    description: Yup.string().max(1000, 'Açıklama en fazla 1000 karakter olabilir').nullable(), // Zorunlu değil
});

const AddFilmForm = () => {
    const [directors, setDirectors] = useState([]);
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const directorResponse = await DirectorService.getAll();
                setDirectors(directorResponse.data || []);

                const actorResponse = await ActorService.getAll();
                setActors(actorResponse.data || []);

                const genreResponse = await GenreService.getAll();
                setGenres(genreResponse.data || []);
            } catch (error) {
                console.error('Veriler yüklenemedi:', error);
            }
        };
        fetchOptions();
    }, []);

    const handleAddFilm = async (values, { setSubmitting }) => {
        try {
            await FilmService.add(values);
            toast.success('Film başarıyla eklendi!');
        } catch (error) {
            toast.error('Film eklenemedi. Lütfen bilgilerinizi kontrol edin.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#15161D' }}>
            <StyledContainer>
                <Typography variant="h4" sx={{ mt: 6, mb: 7, color: '#D10024' }}>Film Ekle</Typography>

                <Formik
                    initialValues={{
                        name: '',
                        year: '',
                        price: '',
                        duration: '',
                        description: '',
                        score:'',
                        image: '',
                        video: '',
                        directorId: '',
                        actorIds: [],
                        genreIds: []
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleAddFilm}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Film Adı ve Yıl */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="name" as={StyledTextField} label="Film Adı" variant="outlined" fullWidth />
                                    <ErrorMessage name="name" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="year" as={StyledTextField} label="Yıl" variant="outlined" fullWidth />
                                    <ErrorMessage name="year" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                            </Box>

                            {/* Fiyat ve Süre */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="price" as={StyledTextField} label="Fiyat" variant="outlined" fullWidth />
                                    <ErrorMessage name="price" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="duration" as={StyledTextField} label="Süre" variant="outlined" fullWidth />
                                    <ErrorMessage name="duration" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                            </Box>

                            {/* Image URL ve Video URL (opsiyonel) */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="image" as={StyledTextField} label="Görsel URL" variant="outlined" fullWidth />
                                    <ErrorMessage name="image" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                                <Box sx={{ width: '48%' }}>
                                    <Field name="video" as={StyledTextField} label="Video URL" variant="outlined" fullWidth />
                                    <ErrorMessage name="video" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                            </Box>

                            {/* Açıklama (Opsiyonel) */}
                            <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                <Field
                                    name="description"
                                    as={StyledTextField}
                                    label="Açıklama"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                                <ErrorMessage name="description" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                            </Box>

                            {/* Yönetmen, Aktör ve Tür Seçimi */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px', gap: '20px' }}>
                                <Box sx={{ width: '30%' }}>
                                    <Field
                                        name="directorId"
                                        as={StyledTextField}
                                        select
                                        label="Yönetmen Seçin"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) => setFieldValue('directorId', e.target.value)}
                                    >
                                        {directors.map((director) => (
                                            <MenuItem key={director.id} value={director.id}>
                                                {`${director.firstName} ${director.lastName}`}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="directorId" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>

                                <Box sx={{ width: '30%' }}>
                                    <Field
                                        name="actorIds"
                                        as={StyledTextField}
                                        select
                                        label="Aktör Seçin"
                                        variant="outlined"
                                        SelectProps={{ multiple: true }}
                                        fullWidth
                                        onChange={(e) => setFieldValue('actorIds', [...e.target.value])}
                                    >
                                        {actors.map((actor) => (
                                            <MenuItem key={actor.id} value={actor.id}>
                                                {`${actor.firstName} ${actor.lastName}`}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="actorIds" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>

                                <Box sx={{ width: '30%' }}>
                                    <Field
                                        name="genreIds"
                                        as={StyledTextField}
                                        select
                                        label="Tür Seçin"
                                        variant="outlined"
                                        SelectProps={{ multiple: true }}
                                        fullWidth
                                        onChange={(e) => setFieldValue('genreIds', [...e.target.value])}
                                    >
                                        {genres.map((genre) => (
                                            <MenuItem key={genre.id} value={genre.id}>
                                                {genre.name}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="genreIds" component="div" style={{ color: 'red', marginTop: '4px', fontSize: '0.875em' }} />
                                </Box>
                            </Box>

                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <StyledButton type="submit" variant="contained" disabled={isSubmitting}>
                                    Film Ekle
                                </StyledButton>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </StyledContainer>
        </Box>
    );
};

export default AddFilmForm;
