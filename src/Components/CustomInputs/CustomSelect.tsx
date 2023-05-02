import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Typography,
} from '@mui/material';
import {
  ErrorSection,
  CustomInputTypography,
  CustomHelperText,
} from './Globals';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Controller, useFormContext } from 'react-hook-form';

export interface MenuItems {
  value: string | number;
  text: string;
}

interface ICustomSelect {
  important?: boolean;
  name?: string;
  label?: string;
  FormControl?: FormControlProps;
  Input?: SelectProps;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  menuItems?: MenuItems[];
  constValue?: any;
  emptyOption?: boolean;
  onChange?: (value: any) => void;
}

export const CustomSelect = (props: ICustomSelect) => {
  const onChangeHandler = (e: any) => {
    if (props.onChange) props.onChange(e.target.value);
  };

  return (
    <FormControl
      sx={{ position: 'relative' }}
      disabled={props.disabled}
      fullWidth
      {...props.FormControl}
    >
      <CustomHelperText text={props.helperText} />
      <InputLabel
        disableAnimation
        children={
          <CustomInputTypography>
            {props.important && (
              <span
                style={{ color: 'red', paddingLeft: '4px', fontWeight: 'bold' }}
              >
                *
              </span>
            )}
            {props.label && props.label}
          </CustomInputTypography>
        }
      />
      <Select
        onChange={onChangeHandler}
        className='Custom-MuiSelect-root'
        IconComponent={KeyboardArrowDownIcon}
        {...props.Input}
        {...(props.constValue != undefined
          ? { value: props.constValue }
          : null)}
        sx={{
          "& .MuiTypography-root": {
            overflow: "hidden",
            pr: "20%",
            boxSizing: "border-box",
            maxWidth: "100%"
          }
        }}
      >
        {props.emptyOption && (
          <MenuItem key={'emptyItem'} value={''}>
            <Typography />
          </MenuItem>
        )}

        {props.Input?.children ||
          props.menuItems?.map((menuItem) => (
            <MenuItem key={menuItem.value} value={menuItem.value}>
              <Typography textAlign={'left'} maxWidth='80%'>
                {menuItem.text}
              </Typography>
            </MenuItem>
          ))}
      </Select>
      <ErrorSection fieldName={props.label} message={props.errorMessage} />
    </FormControl>
  );
};

interface ICustomControlledSelect extends ICustomSelect {
  name: string;
}
export const CustomControlledSelect = ({
  name,
  onChange: changeCallBack,
  ...props
}: ICustomControlledSelect) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field, fieldState }) => {
        const { Input, ...rest } = props;
        const isEmpty = !props.menuItems || props.menuItems.length == 0;
        const { value, onChange, ...restOfField } = field;
        const val = isEmpty || (value === undefined || value === null) ? '' : value;

        const changeHandler = (val: any) => {
          onChange(val);
          if (changeCallBack) changeCallBack(val);
        };
        return (
          <CustomSelect
            onChange={changeHandler}
            errorMessage={fieldState.error?.message}
            Input={{ ...restOfField, value: val, ...Input }}
            name={name}
            {...rest}
          />
        );
      }}
      name={name}
      control={control}
    />
  );
};
