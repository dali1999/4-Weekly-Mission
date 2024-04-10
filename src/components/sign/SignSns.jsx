import React from "react";
import * as S from "@/components/sign/SignSns.style";
import googleIcon from "@/assets/image/sign-google.png";
import kakaoIcon from "@/assets/image/sign-kakao.png";
import Image from "next/image";
import Link from "next/link";

const SNS_LIST = [
  {
    icon: googleIcon,
    url: "https://www.google.com",
  },
  {
    icon: kakaoIcon,
    url: "https://www.kakaocorp.com/page",
  },
];

function SignSns() {
  return (
    <S.Container>
      <span>다른 방식으로 가입하기</span>
      <S.SnsLists>
        {SNS_LIST.map((list, idx) => (
          <S.SnsList key={idx}>
            <Link href={list.url}>
              <Image src={list.icon} alt="" />
            </Link>
          </S.SnsList>
        ))}
      </S.SnsLists>
    </S.Container>
  );
}

export default SignSns;
