import TextField from 'components/TextField';
import React, { FormEvent } from 'react';
import { Heading, StyledForm, Button, Container } from './form-components';

interface Form {
    heading: string;
    textfields: Array<TextField>;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function Form({ heading, textfields, onSubmit }: Form) {
    return (
        <Container>
            <StyledForm onSubmit={onSubmit}>
                <Heading>{heading}</Heading>

                {textfields.map(textfieldProps => <TextField key={textfieldProps.name} {...textfieldProps} />)}

                <Button type="submit">Submit</Button>
            </StyledForm>
        </Container>
    )
}

export default Form;
