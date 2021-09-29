import styled from 'styled-components'

export const Button = styled.button`

    margin: 1em;
    padding: 0.25em 1.2em;
    border: 2px solid rebeccapurple;
    border-radius: 3px;

    font-size: 1.5em;
    background: ${props => props.primary ? "rebeccapurple" : "white"};
    color: ${props => props.primary ? "white" : "rebeccapurple"};

    cursor: pointer;

     &:hover {
     background: tomato;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.5em;
    color: tomato;
`;