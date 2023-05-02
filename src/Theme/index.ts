import { createTheme } from '@mui/material';
// import AssistantExtraLight from 'Fonts/Assistant-ExtraLight.ttf';
// import AssistantLight from 'Fonts/Assistant-Light.ttf';
// import AssistantRegular from 'Fonts/Assistant-Regular.ttf';
// import AssistantMedium from 'Fonts/Assistant-Medium.ttf';
// import AssistantSemiBold from 'Fonts/Assistant-SemiBold.ttf';
// import AssistantBold from 'Fonts/Assistant-Bold.ttf';
// import AssistantExtraBold from 'Fonts/Assistant-ExtraBold.ttf';
import type { } from '@mui/x-data-grid/themeAugmentation';
import {
  outlinedInputClasses as outlinedClass,
  switchClasses,
} from '@mui/material';

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    MenuButtons?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    MenuButtons: true;
  }
}

const themeBreakpoints = createTheme();

const headerHeight = '120px';

export const Theme = createTheme({
  direction: 'rtl',
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Assistant', sans-serif",
    h1: {
      fontSize: '32px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '22px',
      },
    },
    h2: {
      fontSize: '30px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
    },
    h3: {
      fontSize: '28px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '14px',
      },
    },
    h4: {
      fontSize: '24px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '12px',
      },
    },
    h5: {
      fontSize: '22px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '14px',
      },
    },
    h6: {
      fontSize: '18px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '12px',
      },
    },
    body1: {
      fontSize: '16px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '10px',
      },
    },
    MenuButtons: {
      fontSize: '22px',
      textAlign: 'center',
      [themeBreakpoints.breakpoints.down('lg')]: {
        fontSize: '18px',
      },
    },
  },
  palette: {
    text: { primary: '#404040', secondary: '#494949' },
    primary: {
      main: '#cb0006',
    },
    secondary: {
      main: '#edeff0',
    },
    grey: {
      '100': '#F4F7F9',
      '400': '#DFDDDD',
    },
    error: { main: '#cb0006' },
  },

  shadows: [
    'none',
    '0 12px 28px 0 rgba(17, 43, 85, 0.1)',
    '-4px -2px 27px 0 rgba(17, 43, 85, 0.12)',
    '0 12px 28px 0 rgba(17, 43, 85, 0.08)',
    '0 8px 40px 0 rgba(17, 43, 85, 0.07)',
    '0 6px 25px 0 rgba(17, 43, 85, 0.06)',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          gap: '4px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          position: 'unset',
          transition: 'none',
          transform: 'none',
          textAlign: 'left',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
        },
        previousNext: {
          transform: 'rotate(180deg)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#DFDDDD',
          '&.Mui-checked': {
            '.MuiSvgIcon-root': {
              fill: '#cb0006',
            },
          },
          '.MuiSvgIcon-root': {
            borderRadius: '50%',
            fontSize: 26,
            fill: 'transparent',
            '&[data-testid="RadioButtonUncheckedIcon"]': {
              fill: '#dfdddd'
            },
            '&[data-testid="RadioButtonCheckedIcon"]': {
              transform: 'scale(1.1)'
            }
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          overflowX: 'auto',
          border: 'none',

          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
          },

          '& .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-row': {
            '& .MuiDataGrid-cell': {
              outline: 'none',
            },
            ':hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
              ':hover': {
                backgroundColor: 'transparent',
              },
            },
          },

          backgroundColor: 'transparent',
          '& .MuiButtonBase-root': {
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
              ':hover': {
                backgroundColor: 'transparent',
              },
            },
            '& .MuiTouchRipple-root': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiMenu-paper': {
            paddingBottom: '6px',
            border: '1px solid #40404099',
            borderRadius: '0 0 6px 6px',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          '.MuiTypography-root': {
            height: '16px',
            [themeBreakpoints.breakpoints.up('lg')]: {
              height: '22px',
            },
          },
          '&[aria-selected="true"]': {
            backgroundColor: '#f0f0f0',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#f0f0f0',
          },
          '&.Mui-selected:focus': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#404040',
          '&.Mui-checked': { color: '#10BDAB' },
          '&.Mui-disabled': { color: '#edeff0' },
          '& .MuiSvgIcon-root': {
            width: '18px',
            height: '18px',
          }
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          [`& .${switchClasses.switchBase}:hover`]: {
            backgroundColor: 'transparent',
          },
          [`& .${switchClasses.switchBase}`]: {
            [`&.${switchClasses.checked}:hover`]: {
              backgroundColor: 'transparent',
            },
          },

          [`& .${switchClasses.track}`]: {
            width: '32px',
            height: '18px',
            borderRadius: '9px',
            backgroundColor: '#D8D8D8',
            opacity: 1,
          },
          [`& .${switchClasses.thumb}`]: {
            backgroundColor: '#fff',
            width: '12px',
            height: '12px',
            marginTop: '6px',
            marginLeft: '7px',
          },
          [`& .${switchClasses.checked}`]: {
            paddingLeft: '2px',
            [`&.${switchClasses.checked} +.${switchClasses.track}`]: {
              opacity: 1,
            },
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButton-text': {
            ':hover': {
              backgroundColor: 'transparent',
            },
          },
          '.MuiTouchRipple-root': {
            '.MuiTouchRipple-rippleVisible': {
              backgroundColor: 'transparent',
              '.MuiTouchRipple-child': { backgroundColor: 'transparent' },
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '27px',
          '&.MuiButton-text': {
            ':hover': {
              backgroundColor: 'transparent',
            },
          },
          '.MuiTouchRipple-root': {
            '.MuiTouchRipple-rippleVisible': {
              backgroundColor: 'transparent',
              '.MuiTouchRipple-child': { backgroundColor: 'transparent' },
            },
          },
        },
        sizeLarge: {
          minWidth: '166px',
        },
        contained: {
          minHeight: '50px',
        },
        sizeMedium: {
          minWidth: '138px',

        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: headerHeight,
          flexDirection: 'row',
          alignItems: 'center',
        },
      },
      defaultProps: {
        position: 'sticky',
        color: 'inherit',
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            minWidth: 225,
            fontSize: 16,
            backgroundColor: '#F4F7F9',
            marginRight: '2px',
            fontWeight: 400,
          },
          '& .Mui-selected': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#F4F7F9',
          borderColor: 'transparent'
        }
      }
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          [themeBreakpoints.breakpoints.up('xl')]: {
            height: headerHeight,
            paddingRight: '152px',
            paddingLeft: '152px',
          },
          '@media all': {
            width: '100%',
          },
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: 'square',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '48px',
          borderRadius: '6px',
          ':hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#40404099',
            },
          },
          '.MuiSelect-select': {
            paddingBottom: 8,
          },
          [`&.${outlinedClass.disabled}`]: {
            backgroundColor: '#edeff0',
            [`.${outlinedClass.notchedOutline}`]: {
              borderWidth: '0px',
            },
          },
          '&.Mui-error': {
            backgroundColor: '',
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #40404099',
            },
          },
          '&.Custom-MuiSelect-root.Mui-focused': { // after mui update there is no "Mui-select-root" so here is custom one
            borderRadius: '6px 6px 0 0 ',
          },
          '&.MuiAutocomplete-inputRoot.Mui-focused': {
            borderRadius: '6px 6px 0 0 ',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#C9C9C9',
          },
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
          {
            display: 'none',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSelect-icon': {
            color: '#CB0006',
            fontSize: '20px',
          },
        },
      },
    },

    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       height: '48px',
    //       borderRadius: '6px',
    //     },
    //   },
    // },

    MuiCssBaseline: {
      // styleOverrides: `
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 200;
      //     src: url(${AssistantExtraLight}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 300;
      //     src: url(${AssistantLight}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 400;
      //     src: url(${AssistantRegular}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 500;
      //     src: url(${AssistantMedium}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 600;
      //     src: url(${AssistantSemiBold}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 700;
      //     src: url(${AssistantBold}) format('ttf');
      //   }
      //   @font-face {
      //     font-family: 'Assistant';
      //     font-weight: 800;
      //     src: url(${AssistantExtraBold}) format('ttf');
      //   }
      // `,
    },
  },
});
