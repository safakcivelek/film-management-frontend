import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

// Açık mavi renk kodu
const SELECTED_BORDER_COLOR = '#4FC3F7';

const StyledFormControl = styled(FormControl)(({ theme, selected }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3),
  backgroundColor: '#15161D',
  borderRadius: 4,
  '& .MuiInputLabel-root': {
    color: 'white',
    top: '-11%',
    '&.Mui-focused': {
      color: 'white',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${selected ? SELECTED_BORDER_COLOR : 'rgb(41 41 55)'}`, // Seçiliyse açık mavi, değilse varsayılan
    },
    '&:hover fieldset': {
      borderColor: '#D10024', // Hover durumunda kırmızı
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D10024', // Focus olduğunda kırmızı
    },
  },
  '& .MuiSelect-select': {
    backgroundColor: '#15161D',
    color: 'white',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: '#4FC3F7', // Seçili öğe arka plan rengi
    color: 'white', // Seçili öğe metin rengi
    '&:hover': {
      backgroundColor: '#4FC3F7', // Seçili öğe hover arka plan rengi
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.18)', // Seçili olmayan öğeler için gri hover arka plan rengi
    color: 'white', // Hover sırasında metin rengi
  },
}));

const FilterSelect = ({ label, value, handleChange, options }) => {
  return (
    <StyledFormControl fullWidth variant="outlined" selected={!!value}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value || ''}
        onChange={handleChange}
        label={label}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '200px',
              overflowY: 'auto',
              marginTop: '10px', // Menü ile Select arasında boşluk bırakır
              backgroundColor: 'rgba(233, 233, 233, 0.5)', // Açık gri tonunda arka plan (şeffaf)
              backdropFilter: 'blur(10px)', // Blur oranı ayarlandı
              border: '1px solid rgba(105, 105, 105, 0.3)', // Hafif bir gri kenarlık
            }
          }                    
        }}
      >
        <StyledMenuItem value="">
          <em>Tümü</em>
        </StyledMenuItem>
        {options.map((option, index) => (
          <StyledMenuItem key={index} value={option.value || option}>
            {option.label || option}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default FilterSelect;
