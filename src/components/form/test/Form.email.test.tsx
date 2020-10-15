import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const setUp = () => {
    const { getByLabelText } = render(<Form />);

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

    it('should update correctly', async () => {
        const email = setUp();

        await userEvent.type(email,'bob@dylan.com');

        expect(email).toHaveValue('bob@dylan.com');
    });

    it('should accept only email as input', async () => {
        const email = setUp();

        await userEvent.type(email,'bob dylan');

        expect(email).toBeInvalid();
    });
})