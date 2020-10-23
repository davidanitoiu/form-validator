import styled from "styled-components";
import { palette } from "utils/theme";

export const Container = styled.div`
    background-color: transparent;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
`;

export const StyledForm = styled.form`
    padding: 30px 40px;
`;

export const FormControl = styled.div<{ valid: boolean }>`
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;

    label {
        color: #777;
        display: block;
        margin-bottom: 5px;
    }

    input {
        border: 2px solid ${palette.divider};
        border-radius: 4px;
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        &:focus {
            outline: 0;
            border-color: ${palette.focus};
        }
        &:valid {
            outline: 0;
            border-color: ${props => props?.valid ? palette.success : palette.error};
        }
    }
`;

export const Heading = styled.h2`
    text-align: center;
    margin: 0 0 20px;
`;

export const ErrorText = styled.small`    
    color: ${palette.error};
    position: absolute;
    bottom: 0;
    left: 0;
    & + input:valid {
        visibility: hidden;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: ${palette.primary};
    border: 2px solid ${palette.primary};
    border-radius: 4px;
    color: ${palette.textContrast};
    display: block;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
`