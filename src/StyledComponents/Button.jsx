import styled from "styled-components";
export const Button = styled.button`
    background-color:${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.borderButton};
    transition: .3s;
    &:hover {
        background-color: ${props => props.theme.hoverBgColor};+
        border: ${props => props.theme.hoverBgColor};
    }
`