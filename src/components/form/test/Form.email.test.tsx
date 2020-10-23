import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const handleChange = jest.fn();

const setUp = () => {
    const heading = 'TestHeading';
    const handleSubmit = jest.fn();

    const textFields = [
        { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter email', required: true, onChange: handleChange },
    ];

    const { getByLabelText } = render(
        <Form
            heading={heading}
            textfields={textFields}
            onSubmit={handleSubmit}
        />);

    return getByLabelText(/email/i);
}

describe('email', () => {
    it('should render correctly', () => {
        const email = setUp();

        expect(email).toBeInTheDocument();
    });

    it('should be required', () => {
        const email = setUp();

        expect(email).toBeRequired();
    });

    it('should have type text', () => {
        const email = setUp();

        expect(email).toHaveAttribute('type','email');
    })

    it('should handle change events', async () => {
        const email = setUp();

        await userEvent.type(email,'bob@dylan.com');

        expect(handleChange).toHaveBeenCalled();
    });

    it('should accept only email as input', async () => {
        const email = setUp();

        await userEvent.type(email,'bob dylan');

        expect(email).toBeInvalid();
    });
})