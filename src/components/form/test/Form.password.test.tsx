import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const setUp = () => {
    const { getByLabelText } = render(<Form />);

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

    it('should update correctly', async () => {
        const password = setUp();
        const input = 'Ab123456'

        await userEvent.type(password,input);

        expect(password).toHaveValue(input);
    });
})