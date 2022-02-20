import styled from "styled-components";

export const MessageContainer = styled.div`
  top: 0;
  height: fit-content;
  width: 21vw;
  min-width: 20rem;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0px 16px 32px rgba(51, 51, 51, 0.1);
  border-radius: 7px;
  text-align: justify;
  text-align-last: left;
  h1 {
    color: var(--red-text);
    font-weight: bold;
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }
  p {
    margin: 1rem 0;
    span {
      font-weight: 800;
    }
  }
`;
