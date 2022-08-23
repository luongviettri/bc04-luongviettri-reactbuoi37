import styled from "styled-components";
import React from 'react'

const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    min-height:35px;
    height:35px;
    font-size:17px;
    width:auto;
    display:initial;
    &:focus-visible {
        border: ${props => props.theme.hoverBgColor};
        outline-color:${props => props.theme.hoverBgColor};
    }
`

const Label = styled.span`
    color:${props => props.theme.color};
    width:auto;
    background-color: ${props => props.theme.bgColor}
`
const CheckLoi = styled.span`
    color:red;
    
`
export const TextField = ({ label, loi, ...props }) => {
    return (
        <span className="d-flex flex-column my-2" >
            <Label>
                {label}
            </Label>
            <Input {...props}
                className="px-2 rounded"
            />
            <CheckLoi>
                {loi}
            </CheckLoi>
        </span>
    )
}
