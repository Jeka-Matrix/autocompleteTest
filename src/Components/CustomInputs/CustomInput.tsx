import {
    FormControl,
    FormControlProps,
    InputLabel,
    InputLabelProps,
    OutlinedInput,
    OutlinedInputProps,
} from '@mui/material';
import { ChangeEvent, FocusEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { CustomHelperText } from './Globals/CustomHelperText';
import { CustomInputTypography } from './Globals/CustomInputsTypography';
import { ErrorSection } from './Globals/ErrorSection';

export interface ICustomInput {
    label?: string;
    Label?: InputLabelProps;
    important?: boolean;
    FormControl?: FormControlProps;
    errorMessage?: string;
    Input?: OutlinedInputProps;
    helperText?: string;
    disabled?: boolean;
}

export const CustomInput = (props: ICustomInput) => {
    return (
        <FormControl sx={{ position: 'relative' }} fullWidth {...props.FormControl}>
            <CustomHelperText text={props.helperText} />
            <InputLabel
                shrink={true}
                disableAnimation
                children={
                    <CustomInputTypography>
                        {props.important && (
                            <span style={{ color: 'red', paddingLeft: '4px', fontWeight: 'bold' }}>*</span>
                        )}
                        {props.label}
                    </CustomInputTypography>
                }
            />
            <OutlinedInput disabled={props.disabled} {...props.Input} />
            <ErrorSection fieldName={props.label} message={props.errorMessage} />
        </FormControl>
    );
};

interface ICustomControlledInput extends ICustomInput {
    name: string;
    onChange?: (value: string | number) => void;
    onBlur?: (value: string | number) => void;
}

export const CustomControlledInput = ({
    name,
    onChange: changeCallBack,
    onBlur: blurCallBack,
    ...props
}: ICustomControlledInput) => {
    const { control } = useFormContext();

    const { field, fieldState } = useController({
        name: name,
        control: control,
    });
    const { ref, value, onChange, onBlur, ...rest } = field;
    const { Input, ...inputProps } = props;

    const numberOrString = (val: string): string | number => {
        const isNumber = props.Input?.type === 'number';
        return val && isNumber ? parseInt(val) : val;
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(numberOrString(e.target.value));
        if (changeCallBack) changeCallBack(numberOrString(e.target.value));
    };

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
        onBlur();
        if (blurCallBack) blurCallBack(numberOrString(e.target.value));
    };

    return (
        <CustomInput
            errorMessage={fieldState.error?.message}
            {...inputProps}
            Input={{
                inputRef: ref,
                onChange: changeHandler,
                onBlur: blurHandler,
                error: fieldState.error?.message ? true : false,
                value: value || value === 0 ? value : '',
                ...rest,
                ...Input,
            }}
        />
    );
};
