import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const ContainerGroup = styled.div`
  margin: 20px 10px 0 0;
  width: 100%;

  .MuiFormControl-marginNormal {
    margin: 0 !important;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    margin-left: 20px;
  }

  button {
    height: 55px;
  }
`;

export const AlertContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
