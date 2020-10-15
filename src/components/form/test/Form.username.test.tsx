import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "../Form";

const setUp = () => {
    const { getByLabelText } = render(<Form />);

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

    it('should update correctly', async () => {
        const username = setUp();

        await userEvent.type(username,'bob dylan');

        expect(username).toHaveValue('bob dylan');
    });
})