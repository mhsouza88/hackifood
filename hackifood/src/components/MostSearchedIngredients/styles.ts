import styled from 'styled-components';

export const Section = styled.section`
  h1 {
    font-size: 22px;
    line-height: 27px;

    span {
      color: #EA1D2C;
    }
  }

  margin-bottom: 47px;
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

export const ChartWrapper = styled.div`
  width: 367px;
`;