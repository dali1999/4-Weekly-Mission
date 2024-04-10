import * as S from "@/pages/signin.style";
import SignHeader from "@/src/components/sign/SignHeader";
import SignSns from "@/src/components/sign/SignSns";
import SignupForm from "@/src/components/sign/SignupForm";

function Signup() {
  return (
    <S.Container>
      <SignHeader
        memberText="이미 회원이신가요?"
        linkText="로그인 하기"
        link="/signin"
      />
      <SignupForm />
      <SignSns />
    </S.Container>
  );
}

export default Signup;
