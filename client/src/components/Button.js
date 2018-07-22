import styled from 'styled-components';

const Button = styled.button`
    padding-left: 1em;
    padding-right: 1em;
    padding-top: .75em;
    padding-bottom: .75em;
    background-color: transparent;
    border: 2px solid #2b6aaf;
    border-radius: 4px;    
    font-size: 1rem;
    font-family: 'Work Sans', sans-serif;
    color: #2b6aaf;

    &:hover {
        color: #ffffff;
        background-color: #2b6aaf;
    } 
    
`;

export default Button;