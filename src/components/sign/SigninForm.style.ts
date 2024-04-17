import styled from "styled-components";

export const Form = styled.form`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  width: 100%;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 10px;
  font-size: 14px;
  color: var(--red);
`;

export const EyeIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  top: 21px;
  right: 22px;
  position: absolute;
  cursor: pointer;
`;
