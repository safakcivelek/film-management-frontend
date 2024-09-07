import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

const FilterFormControl = styled(FormControl)(({ theme }) => ({
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
      border: '1px solid rgb(41 41 55)',
    },
    '&:hover fieldset': {
      borderColor: '#D10024',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D10024',
    },
  },
  '& .MuiSelect-select': {
    backgroundColor: '#15161D',
    color: 'white', 
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}));

export default FilterFormControl;
