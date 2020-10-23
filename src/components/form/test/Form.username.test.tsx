import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const handleChange = jest.fn();

const setUp = () => {
    const heading = 'TestHeading';
    const handleSubmit = jest.fn();

    const textFields = [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter username', required: true, minLength: 3, onChange: handleChange, value: '' },
    ];

    const { getByLabelText } = render(
        <Form
            heading={heading}
            textfields={textFields}
            onSubmit={handleSubmit}
        />);

    return getByLabelText(/username/i);
}

describe('username', () => {
    it('should render correctly', () => {
        const username = setUp();

        expect(username).toBeInTheDocument();
    });

    it('should be required', () => {
        const username = setUp();

        expect(username).toBeRequired();
    });

    it('should have type text', () => {
        const username = setUp();

        expect(username).toHaveAttribute('type','text');
    })

    it('should update handle change events', async () => {
        const username = setUp();

        await userEvent.type(username,'bob dylan');

        expect(handleChange).toHaveBeenCalled();
    });
})