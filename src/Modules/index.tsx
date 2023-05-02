import { Stack, useAutocomplete, Typography, styled, Box, Button } from '@mui/material';
import { CustomControlledAutocomplete, ErrorSection, ICustomInput } from 'Components';
import { useCitiesList } from 'Hooks';
import { useEffect, useRef, useState } from 'react';
import { useForm, FormProvider, useController, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export const Main = () => {
    const methods = useForm({ defaultValues: { City2: '' }, resolver:yupResolver(schema) });

    const cities = useCitiesList();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((d) => console.log(d))}>
                <Stack width='500px' gap={4} mt={2} mx='auto'>
                    <CustomControlledAutocomplete name='City1' label='error' nameId='CityId1' options={cities} />
                    <AutoCompleteTest2 name='City2' label='unstyled' nameId='CityId2' options={cities} />
                    <AutoCompleteTest3 name='City3' label='styled' nameId='CityId3' options={cities} />
                </Stack>
                <Button type='submit'>submit</Button>
            </form>
        </FormProvider>
    );
};

const AutoCompleteTest2 = (props: ICustomControlledAutocomplete) => {
    const { field, fieldState } = useController({ name: props.name });
    const { setValue } = useFormContext();

    const setId = (val: string) => {
        if (props.nameId) setValue(props.nameId, val);
    };

    const { getRootProps, getInputLabelProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
        useAutocomplete({
            options: props.options ? props.options : [],
            getOptionLabel: (option) => `${option.label}`,
            filterOptions: (op, state) => {
                return op.filter((option) =>
                    option.label.startsWith(state.inputValue) ||
                    option.searchKeys.includes(state.inputValue) ||
                    option.searchKeys.find((x) => x.includes(state.inputValue))
                        ? true
                        : false
                );
            },
            onChange: (event, value) => {
                if (value) field.onChange(value.label);
            },
            inputValue: field.value,
        });

    const inpProps: () => React.InputHTMLAttributes<HTMLInputElement> = () => {
        const { style, onBlur, ...rest } = getInputProps();

        return {
            ...rest,
            onBlur: (e) => {
                if (onBlur) onBlur(e);
                field.onBlur();
                const inpVal = e.currentTarget.value;
                if (inpVal && inpVal.length > 0) {
                    const val = props.options?.find((op) => op.label === inpVal);
                    if (val) {
                        setId(val.id);
                    } else {
                        setId('');
                        field.onChange('');
                    }
                }
            },
            onChange: ({ target }) => {
                field.onChange(target.value);
            },

            name: field.name,
            style: { style, width: '500px', marginBottom: '5px' },
        };
    };

    return (
        <Box position='relative' pb='5px'>
            <div {...getRootProps()}>
                <Typography {...getInputLabelProps()}>useAutocomplete</Typography>
                <input {...inpProps()} value={field.value} />
            </div>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {(groupedOptions as any).map((option: any, index: any) => (
                        <li {...getOptionProps({ option, index })}>{option.label}</li>
                    ))}
                </Listbox>
            ) : null}
            <ErrorSection message={fieldState.error?.message} />
        </Box>
    );
};

const AutoCompleteTest3 = (props: ICustomControlledAutocomplete) => {
    return <div>hi3</div>;
};

interface ICustomControlledAutocomplete extends ICustomInput {
    options?: ICustomControlledAutocompleteOption[];
    changeableOptions?: boolean;
    name: string;
    nameId?: string;
    disabled?: boolean;
    onChange?: (val: string) => void;
    onBlur?: (val: string, id: string | 'NO-ID') => void;
}

interface ICustomControlledAutocompleteOption {
    label: string;
    id: string;
    searchKeys: string[];
}

interface ICustomControlledAutocomplete extends ICustomInput {
    options?: ICustomControlledAutocompleteOption[];
    changeableOptions?: boolean;
    name: string;
    nameId?: string;
    disabled?: boolean;
    onChange?: (val: string) => void;
    onBlur?: (val: string, id: string | 'NO-ID') => void;
}

const Listbox = styled('ul')(({ theme }) => ({
    width: '100%',
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li.Mui-focused': {
        backgroundColor: '#4a8df6',
        color: 'white',
        cursor: 'pointer',
    },
    '& li:active': {
        backgroundColor: '#2977f5',
        color: 'white',
    },
}));

const schema = yup.object().shape({
    City1: yup.string().required('required'),
    City2: yup.string().required('required'),
});
