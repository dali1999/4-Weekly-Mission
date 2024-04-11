import React from "react";
import * as S from "@components/sign/SignHeader.style";
import logo from "@assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";

function SignHeader({ memberText, linkText, link }) {
  return (
    <S.Container>
      <Link href="/">
        <Image src={logo} alt="로고" width={218} />
      </Link>
      <S.HeaderText>
        <span>{memberText} </span>
        <S.StyledLink href={link}>{linkText}</S.StyledLink>
      </S.HeaderText>
    </S.Container>
  );
}

export default SignHeader;
