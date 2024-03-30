import React, { ReactNode } from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--gray3);
  font-size: 16px;
  padding: 15px;
  &:focus {
    outline: 1px solid var(--primary);
  }
  &::placeholder {
    color: var(--gray2);
  }
`;

interface ModalProps {
  children?: ReactNode;
  title: string;
  isClose: () => void;
  btntext?: string;
}

function ModalWithInput(Component: React.ComponentType<ModalProps>) {
  return (props: ModalProps) => {
    return (
      <React.Fragment>
        <Component {...props}>
          <Input type="text" placeholder="내용 입력" />
        </Component>
      </React.Fragment>
    );
  };
}

export default ModalWithInput;