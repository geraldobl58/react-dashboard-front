import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const ContainerMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
  padding: 20px;
`;

export const ContainerSeparator = styled.div`
  min-height: 64px;
`;

export const ContainerSteps = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerPayments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 300px 0;
  line-height: 20px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
