import React, { useState } from "react";
import * as S from "@/src/components/sign/SigninForm.style";
import { useForm } from "react-hook-form";
import Image from "next/image";
import eyeOnIcon from "@/assets/svg/eye-on.svg";
import eyeOffIcon from "@/assets/svg/eye-off.svg";
import { postSignIn } from "@/src/api";
import { useRouter } from "next/router";
import Input from "@/src/components/sign/Input";
import ERROR from "@/src/components/sign/ErrorMessages";

type FormType = {
  email: string;
  password: string;
};

function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormType>();

  const [inputType, setInputType] = useState("password");

  const onSubmit = async (data: FormType) => {
    try {
      await postSignIn(data);
      router.push("/folder");
    } catch (error) {
      setError("email", { type: "isValidData" });
      setError("password", { type: "isValidData" });
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
          {errors.email?.type === "isValidData" && ERROR.EMAIL_INVALID_DATA}
        </S.ErrorMessage>
      </div>

      <S.Label>비밀번호</S.Label>
      <div style={{ position: "relative" }}>
        <Input.TextInput
          type={inputType}
          register={register("password", { required: true })}
          placeholder="비밀번호를 입력해 주세요"
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
          {errors.password?.type === "isValidData" &&
            ERROR.PASSWORD_INVALID_DATA}
        </S.ErrorMessage>
      </div>

      <Input.SubmitButton value="로그인" />
    </S.Form>
  );
}

export default SigninForm;
