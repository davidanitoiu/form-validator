import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const handleChange = jest.fn();

const setUp = () => {
    const heading = 'TestHeading';
    const handleSubmit = jest.fn();

    const textFields = [
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter password', required: true, minLength: 6, errorMessage: 'Passwords must match', onChange: handleChange },
    ];

    const { getByLabelText } = render(
        <Form
            heading={heading}
            textfields={textFields}
            onSubmit={handleSubmit}
        />);

    return getByLabelText('Password', { exact: true });
}

describe('password', () => {
    it('should render correctly', () => {
        const password = setUp();

        expect(password).toBeInTheDocument();
    });

    it('should be required', () => {
        const password = setUp();

        expect(password).toBeRequired();
    });

    it('should have type text', () => {
        const password = setUp();

        expect(password).toHaveAttribute('type','password');
    })

    it('should handle change events', async () => {
        const password = setUp();
        const input = 'Ab123456'

        await userEvent.type(password,input);

        expect(handleChange).toHaveBeenCalled();
    });
})