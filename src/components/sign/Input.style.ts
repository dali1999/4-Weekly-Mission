import styled from "styled-components";

export const Input = styled.input`
  font-size: 16px;
  width: 400px;
  height: 60px;
  padding: 0 15px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-bottom: 35px;
`;

export const TextInput = styled(Input)<{ $hasError: boolean }>`
  border: ${({ $hasError }) =>
    $hasError ? "2px solid red" : "1px solid #ccc"};

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const SubmitButton = styled(Input)`
  font-size: 18px;
  height: 50px;
  color: white;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  cursor: pointer;
`;
