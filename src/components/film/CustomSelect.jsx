import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3),
  backgroundColor: '#15161D',
  borderRadius: 4,
  '& .MuiInputLabel-root': {
   // color: theme.palette.primary.main,
   color: 'white', // Label rengini beyaz olarak ayarladık
    top: '-11%', 
    '&.Mui-focused': {
      color: 'white', // Focus durumunda label rengini beyaz tutar
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      //borderColor: theme.palette.primary.main,
      //borderColor:'rgb(41 41 55)',
      border: '1px solid rgb(41 41 55)',
     
    },
    '&:hover fieldset': {
      //borderColor: theme.palette.primary.dark,
      borderColor: '#D10024',
     
    },
    '&.Mui-focused fieldset': {
      //borderColor: theme.palette.primary.dark,
      borderColor:'#D10024'
     
    },
  },
  '& .MuiSelect-select': {
    backgroundColor: '#15161D',
    color: 'white', // Metin rengini beyaz olarak ayarladık
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),   
  },
}));

const CustomSelect = ({ label, value, handleChange, options }) => {
  return (
    <CustomFormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '200px', // Dropdown menüsünün maksimum yüksekliği
            },
          },
        }}
        sx={{
          display: 'flex',
          alignItems: 'center', // Select bileşeni içinde metni dikey ortalamak için
        }}
      >
        <MenuItem value="">
          <em>Tümü</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  );
};

export default CustomSelect;
