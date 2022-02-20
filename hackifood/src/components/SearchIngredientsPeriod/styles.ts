import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    h1 {
      font-size: 26px;

      span {
        color: #EA1D2C;
      }
    }
  }
`;

export const FiltersWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 102px;

  .wrapper-search {
    display: flex;

    > div + div {
      margin-left: 24px;
    }
  }
`;
