import React from "react";
import * as S from "@/components/sign/SignHeader.style";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";

function SignHeader() {
  return (
    <S.Container>
      <Image src={logo} alt="로고" width={218} />
      <S.HeaderText>
        <span>회원이 아니신가요? </span>
        <S.StyledLink href="/signup">회원 가입하기</S.StyledLink>
      </S.HeaderText>
    </S.Container>
  );
}

export default SignHeader;
