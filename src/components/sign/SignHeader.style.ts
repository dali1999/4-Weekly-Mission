import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;
export const HeaderText = styled.div`
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: var(--primary);
`;
