import styled from 'styled-components';

interface ContainerProps {
  percent: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #161616;
  font-weight: bold;
  font-size: 16px;

  > span {
    margin-left: 18px;
  }
`;

export const Progress = styled.div<ContainerProps>`
  max-width: 224px;
  width: ${({ percent }) => percent > 100 ? 100 + '%' : percent + '%'};
  height: 40px;
  background: #EA1D2C;
  border-radius: calc(40px * 2);

  position: relative;

  span {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);

    color: #FFFFFF;
    font-weight: bold;

    width: 124px;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
  }

  margin-bottom: 8px;
`;