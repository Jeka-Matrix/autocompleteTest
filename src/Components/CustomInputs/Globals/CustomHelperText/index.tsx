import { InfoOutlined } from '@mui/icons-material';
import {
  Box,
  Typography,
} from '@mui/material';
interface ICustomHelperText {
  text?: string;
}
export const CustomHelperText = (props: ICustomHelperText) => {

  return (
    <>
      {props.text && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 500,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <Box>

          </Box>
        </Box>
      )}
    </>
  );
};
