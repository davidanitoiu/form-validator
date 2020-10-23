import { ErrorText, FormControl } from 'components/form/form-components';
import React, { InputHTMLAttributes } from 'react';

interface TextField extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id?: string;
    label: string;
    valid?: boolean;
    errorMessage?: string;
}

function TextField({ id, name, label, errorMessage, valid = true, ...props }: TextField) {
    return (
        <FormControl valid={valid}>
            <label htmlFor={id ?? name}>{label}</label>
            <input id={id ?? name} name={name} {...props} />
            <ErrorText hidden={valid}>{errorMessage}</ErrorText>
        </FormControl>
    );
}

export default TextField;
