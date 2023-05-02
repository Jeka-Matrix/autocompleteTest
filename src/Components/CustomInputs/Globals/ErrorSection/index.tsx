import { Box, FormHelperText, Typography } from '@mui/material';

export interface IErrorSection {
  message: string | undefined;
  fieldName?: string;
  variant?: 'initial' | 'absolute';
}

export const ErrorSection = ({
  message,
  fieldName,
  variant = 'absolute',
}: IErrorSection) => {
  const error = fieldName ? `${fieldName} - ${message}` : message;
  return (
    <Box sx={{ position: 'relative' }}>
      <FormHelperText
        sx={{ position: variant, bottom: '-12px', left: 0, m: 0, ml: 1, p: 0 }}
        children={
          message && (
            <Typography
              whiteSpace={'nowrap'}
              component={'label'}
              fontWeight={600}
              textAlign={'left'}
              fontSize='12px'
              color={(theme) => theme.palette.error.main}
            >
              {message && error}
            </Typography>
          )
        }
      />
    </Box>
  );
};
