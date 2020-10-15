import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const setUp = () => {
    const { getByLabelText } = render(<Form />);

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

    it('should update correctly', async () => {
        const confirm = setUp();
        const input = 'Ab123456'

        await userEvent.type(confirm,input);

        expect(confirm).toHaveValue(input);
    });
})