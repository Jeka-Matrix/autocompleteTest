import { SxProps } from '@mui/material';

export const SpecialInputSx: SxProps = {
  borderRadius: '47.5px',
  boxSizing: 'border-box',
  boxShadow: '0 8px 40px 0 rgba(17, 43, 85, 0.07)',
  border: '2px solid #e9eff2',
  padding: '2px',
  ':hover': {
    border: '4px solid #e9eff2',
    padding: 0,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none',
  },
};
