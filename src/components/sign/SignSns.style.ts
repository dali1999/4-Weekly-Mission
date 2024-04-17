import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  width: 400px;
  height: 68px;
  padding: 0 24px;
  background-color: var(--gray4);
  border: 1px solid var(--gray3);
  border-radius: 8px;

  span {
    font-size: 14px;
    color: #373740;
  }
`;

export const SnsLists = styled.ul`
  display: flex;
  gap: 18px;
`;

export const SnsList = styled.li`
  width: 42px;
  height: 42px;
`;
