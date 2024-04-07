import React, { useState } from "react";
import * as S from "@/pages/login.style";
import { useForm } from "react-hook-form";
import Image from "next/image";
import eyeOnIcon from "@/assets/svg/eye-on.svg";
import eyeOffIcon from "@/assets/svg/eye-off.svg";

const ERROR = {
  EMAIL_REQUIRE: "이메일 입력은 필수입니다.",
  EMAIL_INVALID_PATTERN: "올바른 이메일 형식이 아닙니다.",

  PASSWORD_REQUIRE: "이메일 입력은 필수입니다.",
  PASSWORD_LENGTH: "비밀번호는 8자 이상이어야 합니다.",
};

type FormType = {
  email: string;
  password: string;
};

function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const [inputType, setInputType] = useState("password");

  const onSubmit = (data: any) => console.log(data);

  const handleEyeIconClick = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>이메일</S.Label>
        <div style={{ position: "relative" }}>
          <S.TextInput
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
            })}
            placeholder="이메일"
            $hasError={!!errors.email}
          />
          <S.ErrorMessage>
            {errors.email?.type === "required" && ERROR.EMAIL_REQUIRE}
            {errors.email?.type === "pattern" && ERROR.EMAIL_INVALID_PATTERN}
          </S.ErrorMessage>
        </div>

        <S.Label>비밀번호</S.Label>
        <div style={{ position: "relative" }}>
          <S.TextInput
            type={inputType}
            {...register("password", { required: true, minLength: 8 })}
            placeholder="비밀번호"
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
            {errors.password?.type === "minLength" && ERROR.PASSWORD_LENGTH}
            {errors.password?.type === "required" && ERROR.PASSWORD_REQUIRE}
          </S.ErrorMessage>
        </div>

        <S.SubmitButton type="submit" value="로그인" />
      </S.Form>
    </S.Container>
  );
}

export default Test;
