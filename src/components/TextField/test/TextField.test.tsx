import { render } from '@testing-library/react';
import React from "react";
import TextField from '../TextField';

const setUp = (args: TextField) => {
    const { getByLabelText, container } = render(<TextField {...args} />)

    const textfield = getByLabelText(args.label);

    return { textfield, container }
}

describe('TextField', () => {
    const attrs: TextField = {
        id: 'test',
        name: 'name',
        label: 'test field',
        placeholder: 'test field placeholder',
        required: true,
        type: 'password',
        errorMessage: 'test error'
    }    

    it('should render the component correctly', () => {
        const { textfield } = setUp(attrs);

        expect(textfield).toBeInTheDocument();        
    });
    it('should have proper attributes', () => {
        const { textfield } = setUp(attrs);

        expect(textfield).toBeRequired();
        expect(textfield).toHaveAttribute('id',attrs.id);
        expect(textfield).toHaveAttribute('type',attrs.type);
        expect(textfield).toHaveAttribute('placeholder',attrs.placeholder);
       
    });
    it('should display the error message correctly', () => {
        const { container } = setUp(attrs);

        const error = container.querySelector('small');
        expect(error).toHaveTextContent('test error');
    })
})