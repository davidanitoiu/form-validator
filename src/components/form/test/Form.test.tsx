import { render } from '@testing-library/react';
import React from "react";
import Form from "../Form";

const setUp = () => {
    const { getByRole, container } = render(<Form />);

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