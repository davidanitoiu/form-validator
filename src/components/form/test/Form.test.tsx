import { render } from '@testing-library/react';
import React from "react";
import Form from "../Form";

const heading = 'TestHeading';
const handleChange = jest.fn();
const handleSubmit = jest.fn();

const setUp = () => {
    const textFields = [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter username', required: true, minLength: 3, onChange: handleChange, value: '' },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter email', required: true, onChange: handleChange },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter password', required: true, minLength: 6, errorMessage: 'Passwords must match', onChange: handleChange },
        { name: 'confirm', type: 'password', label: 'Confirm Password', placeholder: 'Enter password again', required: true, minLength: 6, errorMessage: 'Passwords must match', onChange: handleChange },
    ];

    const { getByRole, container } = render(<Form
        heading={heading}
        textfields={textFields}
        onSubmit={handleSubmit}
    />);

    return {
        heading: getByRole('heading'),
        inputs: container.querySelectorAll('input'),
        button: getByRole('button')
    }
}

describe('Form', () => {
    describe('heading', () => {
        it('should render the header correctly', () => {
            const { heading } = setUp();

            expect(heading).toBeInTheDocument();
        });
    })

    describe('inputs', () => {
        it('should have 4 inputs', () => {
            const { inputs } = setUp();

            expect(inputs.length).toBe(4);
        })
    });


    describe('button', () => {
        it('should have a submit button', () => {
            const { button } = setUp();

            expect(button).toBeInTheDocument()
        });

        it("should have type 'submit'", () => {
            const { button } = setUp();

            expect(button).toHaveAttribute('type','submit');
        })
    })

})