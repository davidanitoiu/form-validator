import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const handleChange = jest.fn();

const setUp = () => {
    const heading = 'TestHeading';
    const handleSubmit = jest.fn();

    const textFields = [
        { name: 'confirm', type: 'password', label: 'Confirm Password', placeholder: 'Enter password again', required: true, minLength: 6, errorMessage: 'Passwords must match', onChange: handleChange },
    ];

    const { getByLabelText } = render(
        <Form
            heading={heading}
            textfields={textFields}
            onSubmit={handleSubmit}
        />);

    return getByLabelText('Confirm Password', { exact: true });
}

describe('confirm', () => {
    it('should render correctly', () => {
        const confirm = setUp();

        expect(confirm).toBeInTheDocument();
    });

    it('should be required', () => {
        const confirm = setUp();

        expect(confirm).toBeRequired();
    });

    it('should have type text', () => {
        const confirm = setUp();

        expect(confirm).toHaveAttribute('type','password');
    })

    it('should handle change events', async () => {
        const confirm = setUp();
        const input = 'Ab123456'

        await userEvent.type(confirm,input);

        expect(handleChange).toHaveBeenCalled();
    });
})