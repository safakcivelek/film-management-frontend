import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: 4,
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },
  '& .MuiSelect-select': {
    maxHeight: '100px',
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
              maxHeight: '200px',
            },
          },
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
