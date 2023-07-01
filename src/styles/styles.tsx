import styled, { css } from "styled-components";

export const ToDoWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  padding: 4rem;
  align-items: center;
  flex-direction: column;
`;
export const ToDoApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FlexContainer = styled.div<{ $setColumn: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  ${(props) => css`
    flex-direction: ${props.$setColumn};
  `}
`;

export const FormContainer = styled.form`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #75308e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TasksContainer = styled.div`
  background-color: #fff;
  font-weight: bold;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;

export const TaskComponent = styled.div<{ $background: string }>`
  width: 100%;
  background-color: black;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => css`
    background-color: ${props.$background};
  `}
`;

export const InputElement = styled.input`
  max-width: 200px;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid blue;
  padding: 5px;
  color: blue;
  &:focus {
    outline: #4d1461;
    caret-color: blue;
  }
`;

export const ContainerTitle = styled.h1`
  color: #000;
`;

export const TaskComponentBtnWrapper = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BtnDelete = styled.button`
  width: 80px;
  height: 20px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #ec3836;
    color: #fff;
  }
`;
export const BtnMove = styled.button`
  width: 80px;
  height: 20px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #68c12a;
    color: #fff;
  }
`;
