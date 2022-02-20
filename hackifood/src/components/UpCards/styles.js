import styled from "styled-components"

export const MainBox = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 20rem;
    height: 10rem;
    padding: 0.5rem;
    margin: 4rem 4rem;
    -webkit-box-shadow: 0px 0px 14px -3px rgba(0,0,0,0.21); 
    box-shadow: 0px 0px 14px -3px rgba(0,0,0,0.21);

    h4 {
        font-weight: 300;
    }

    h1 {
        color: var(--red-text);
        font-size: 25pt;
        font-weight: 500;
    }

    p {
        color: var(--red-text);
        font-size: 11pt;
        font-weight: 300;
    }
`

export const AlignItems = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        width: 2.5rem;
        margin-left: 1rem;
    }
`