import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface ICustomInputTypography {
  children: string | ReactNode | Element;
}
export const CustomInputTypography = (props: ICustomInputTypography) => {
  return (
    <Typography
      whiteSpace='nowrap'
      component={'label'}
      color={(theme) => theme.palette.text.primary}
      textAlign={'left'}
      fontWeight={400}
      lineHeight={'20.93px'}
      fontSize={'16px'}
    >
      {props.children}
    </Typography>
  );
};
