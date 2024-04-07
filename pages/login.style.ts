import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-background);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
`;

export const BaseInput = styled.input`
  font-size: 16px;
  width: 350px;
  height: 60px;
  padding: 0 15px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-bottom: 35px;
`;

export const TextInput = styled(BaseInput)<{ $hasError: boolean }>`
  border: ${({ $hasError }) =>
    $hasError ? "2px solid red" : "1px solid #ccc"};

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const SubmitButton = styled(BaseInput)`
  height: 50px;
  color: white;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  cursor: pointer;
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
