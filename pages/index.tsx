import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  margin-right: 10px;
  font-weight: 900;
  font-size: 30px;
  border: 2px solid;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover {
    background-color: var(--primary-background);
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <StyledLink href="/shared">Shared</StyledLink>
        <StyledLink href="/folder">Folders</StyledLink>
        <StyledLink href="/login">Login(test)</StyledLink>
      </Container>
    </>
  );
}
