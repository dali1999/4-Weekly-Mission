import React, { useState } from "react";
import * as S from "@/src/components/sign/SigninForm.style";
import { useForm } from "react-hook-form";
import Image from "next/image";
import eyeOnIcon from "@/assets/svg/eye-on.svg";
import eyeOffIcon from "@/assets/svg/eye-off.svg";
import { postCheckEmailDuplicate, postSignIn } from "@/src/api";
import { useRouter } from "next/router";
import Input from "@/src/components/sign/Input";
import ERROR from "@/src/components/sign/ErrorMessages";

type FormType = {
  email: string;
  password: string;
  checkPassword: string;
};

function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormType>();

  const [inputType, setInputType] = useState("password");

  const handleCheckPasswordMatch = (data: FormType): boolean => {
    if (data.password !== data.checkPassword) {
      setError("checkPassword", { type: "invalidPasswordMatch" });
      return false;
    }
    return true;
  };

  const handleCheckEmailDuplicate = async (
    data: FormType
  ): Promise<boolean> => {
    try {
      const emailData = { email: data.email };
      await postCheckEmailDuplicate(emailData);
      return true;
    } catch (error) {
      setError("email", { type: "isDuplicateEmail" });
      return false;
    }
  };

  const onSubmit = async (data: FormType) => {
    const isPasswordMatch = handleCheckPasswordMatch(data);
    const isEmailDuplicate = await handleCheckEmailDuplicate(data);

    if (isPasswordMatch && isEmailDuplicate) {
      router.push("/folder");
    }
  };

  const handleEyeIconClick = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label>이메일</S.Label>
      <div style={{ position: "relative" }}>
        <Input.TextInput
          type="text"
          register={register("email", {
            required: true,
            pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
          })}
          placeholder="이메일을 입력해 주세요"
          $hasError={!!errors.email}
        />
        <S.ErrorMessage>
          {errors.email?.type === "required" && ERROR.EMAIL_REQUIRE}
          {errors.email?.type === "pattern" && ERROR.EMAIL_INVALID_PATTERN}
          {errors.email?.type === "isDuplicateEmail" && ERROR.EMAIL_DUPLICATE}
          {errors.email?.type === "isValidData" && ERROR.EMAIL_INVALID_DATA}
        </S.ErrorMessage>
      </div>

      <S.Label>비밀번호</S.Label>
      <div style={{ position: "relative" }}>
        <Input.TextInput
          type={inputType}
          register={register("password", {
            required: true,
            pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
          })}
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
          $hasError={!!errors.password}
        />
        <S.EyeIconWrapper onClick={handleEyeIconClick}>
          <Image
            fill
            src={inputType === "password" ? eyeOffIcon : eyeOnIcon}
            alt="눈 아이콘"
          />
        </S.EyeIconWrapper>
        <S.ErrorMessage>
          {errors.password?.type === "required" && ERROR.PASSWORD_REQUIRE}
          {errors.password?.type === "pattern" &&
            ERROR.PASSWORD_INVALID_PATTERN}
        </S.ErrorMessage>
      </div>

      <S.Label>비밀번호 확인</S.Label>
      <div style={{ position: "relative" }}>
        <Input.TextInput
          type={inputType}
          register={register("checkPassword", {
            required: true,
          })}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          $hasError={!!errors.checkPassword}
        />
        <S.EyeIconWrapper onClick={handleEyeIconClick}>
          <Image
            fill
            src={inputType === "password" ? eyeOffIcon : eyeOnIcon}
            alt="눈 아이콘"
          />
        </S.EyeIconWrapper>
        <S.ErrorMessage>
          {errors.checkPassword?.type === "required" &&
            ERROR.PASSWORD_INVALID_DATA}
          {errors.checkPassword?.type === "invalidPasswordMatch" &&
            ERROR.PASSWORD_INVALID_MATCH}
        </S.ErrorMessage>
      </div>

      <Input.SubmitButton value="회원가입" />
    </S.Form>
  );
}

export default SignupForm;
