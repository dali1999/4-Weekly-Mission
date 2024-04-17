import React from "react";
import * as S from "@components/sign/SignHeader.style";
import logo from "@assets/svg/logo.svg";
import Image from "next/image";

function SignHeader({ memberText, linkText, link }) {
  return (
    <S.Container>
      <Image src={logo} alt="로고" width={218} />
      <S.HeaderText>
        <span>{memberText} </span>
        <S.StyledLink href={link}>{linkText}</S.StyledLink>
      </S.HeaderText>
    </S.Container>
  );
}

export default SignHeader;
