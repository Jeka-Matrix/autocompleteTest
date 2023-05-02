import { Autocomplete, Popper, styled, Typography } from '@mui/material';
import { CustomControlledInput, ICustomInput } from 'Components';
import { Dictionary } from 'Dictionary';
import React, { ChangeEvent, FocusEvent } from 'react';
import { useFormContext, useController } from 'react-hook-form';

interface ICustomControlledAutocompleteOptions {
    label: string;
    id: string;
    searchKeys: string[];
}

interface ICustomControlledAutocomplete extends ICustomInput {
    options?: ICustomControlledAutocompleteOptions[];
    changeableOptions?: boolean;
    name: string;
    nameId?: string;
    disabled?: boolean;
    onChange?: (val: string) => void;
    onBlur?: (val: string, id: string | 'NO-ID') => void;
}

/**
 * Autocomplete input controlled by useForm with MUI.
 *
 * depends on CustomInput component
 *
 * @param {ICustomControlledAutocompleteOptions[]} options The options array for autofill.
 * @param {string} name Name for using useForm controller.
 * @param {string} nameId <Optional> use if the name is bounded with an id.
 * @param {boolean} changeableOptions <Optional> use if the options changes dynamicly
 */
export const CustomControlledAutocomplete = ({
    options,
    label,
    name,
    nameId,
    onChange,
    onBlur,
    disabled,
    changeableOptions,
    ...CustomInputProps
}: ICustomControlledAutocomplete) => {
    const { setValue: SetValue } = useFormContext();

    const { field } = useController({ name: name });

    const setValue = (name: string, value: string) => {
        try {
            SetValue(name, value);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Autocomplete
            PopperComponent={CustomPopper}
            {...(disabled != undefined && { disabled: disabled })}
            id={name + '-combo-box'}
            disableClearable
            forcePopupIcon={false}
            autoHighlight
            disableListWrap
            noOptionsText={options!==undefined ? Dictionary.noResult.he : Dictionary.loading.he}
            //<When options is dynamicly changing -> prevent warning from mui
            {...(changeableOptions && { isOptionEqualToValue: () => true })}
            //>
            options={options ? options : []}
            ListboxProps={{ style: { maxHeight: '200px' } }}
            inputValue={field.value ? field.value : ''}
            onChange={(e, val) => {
                if (val) {
                    if (nameId) setValue(nameId, val.id);
                    field.onChange(val.label);
                }
            }}
            getOptionLabel={(option) => `${option.label}`}
            renderOption={(props, op) => {
                return (
                    <Typography
                        {...props}
                        onClick={() => {
                            field.onChange(op.label);
                            nameId && setValue(nameId, op.id);
                        }}
                        aria-selected={false}
                        key={op.id}
                        sx={{ width: '100%' }}>
                        {op.label}
                    </Typography>
                );
            }}
            filterOptions={(op, state) => {
                return op.filter((option) =>
                    option.label.startsWith(state.inputValue) ||
                    option.searchKeys.includes(state.inputValue) ||
                    option.searchKeys.find((x) => x.includes(state.inputValue))
                        ? true
                        : false
                );
            }}
            renderInput={(params) => {
                const { InputProps, id, inputProps } = params;

                const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e);
                    if (onChange) onChange(e.target.value);
                };

                const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
                    const value = e.target.value;

                    if (value === '') {
                        if (onBlur) onBlur(value, 'NO-ID');
                        if (nameId) setValue(nameId, '');
                        return;
                    }
                    const validOption = options?.find(
                        (op) => op.label.startsWith(value) || op.searchKeys.includes(value)
                    );
                    if (!validOption) {
                        if (onBlur) onBlur(value, 'NO-ID');
                        if (nameId) setValue(nameId, '');
                        return field.onChange('');
                    }
                    if (nameId) setValue(nameId, validOption.id);
                    if (onBlur) onBlur(value, validOption.id);
                    field.onChange(validOption.label);
                    field.onBlur();
                };

                return (
                    <CustomControlledInput
                        name={name}
                        Input={{
                            ...InputProps,
                            id: id,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            inputProps: {
                                ...inputProps,
                                //<disables the chrome autoComplete / autoFill
                                autoComplete: 'off',
                                form: {
                                    autocomplete: 'off',
                                },
                                //>
                            },
                        }}
                        label={label}
                        {...(disabled != undefined && { disabled: disabled })}
                        {...CustomInputProps}
                    />
                );
            }}
        />
    );
};

const CustomPopper = (props: any) => {
    const StyledPopper = styled(Popper)({
        border: '1px solid #40404099',
        borderRadius: '0 0 6px 6px',
    });

    const blurOnClick = () => {
        //blur the input element after click so it will hide the menu
        setTimeout(() => {
            const inpElm = props.anchorEl.getElementsByTagName('input');
            if (inpElm && inpElm[0]) inpElm[0].blur();
        }, 100);

        // another option suported by must browsers
        // (document.activeElement as any).blur();
    };
    return <StyledPopper {...props} onClick={blurOnClick} placement='bottom-start' />;
};
