import styled from "styled-components"

export const MainBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    border-radius: 0.5rem;
    width: 100%;
    height: 312px;
    padding: 1.5rem 1rem;
    -webkit-box-shadow: 0px 0px 14px -3px rgba(0,0,0,0.21); 
    box-shadow: 0px 0px 14px -3px rgba(0,0,0,0.21);

    h3 {
        color: var(--red-text);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 11pt;
        font-weight: 300;
        margin-bottom: 1rem;
    }
`