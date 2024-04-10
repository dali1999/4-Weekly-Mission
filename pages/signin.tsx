import * as S from "@pages/signin.style";
import SigninForm from "@src/components/sign/SigninForm";
import SignHeader from "@src/components/sign/SignHeader";
import SignSns from "@src/components/sign/SignSns";

function Signin() {
  return (
    <S.Container>
      <SignHeader
        memberText="회원이 아니신가요?"
        linkText="회원 가입하기"
        link="/signup"
      />
      <SigninForm />
      <SignSns />
    </S.Container>
  );
}

export default Signin;
