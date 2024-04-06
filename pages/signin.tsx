import React, { useState } from "react";
import * as S from "@/pages/signin.style";
import { useForm } from "react-hook-form";
import Image from "next/image";
import eyeOnIcon from "@/assets/svg/eye-on.svg";
import eyeOffIcon from "@/assets/svg/eye-off.svg";
import { postSignIn } from "@/src/api";
import { useRouter } from "next/router";
import Input from "@/src/components/sign/Input";

const ERROR = {
  EMAIL_REQUIRE: "이메일 입력은 필수입니다.",
  EMAIL_INVALID_PATTERN: "올바른 이메일 형식이 아닙니다.",
  EMAIL_INVALID_DATA: "이메일을 확인해 주세요.",

  PASSWORD_REQUIRE: "비밀번호 입력은 필수입니다.",
  PASSWORD_LENGTH: "비밀번호는 8자 이상이어야 합니다.",
  PASSWORD_INVALID_DATA: "비밀번호를 확인해 주세요.",
};

type FormType = {
  email: string;
  password: string;
};

function Test() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormType>();

  const [inputType, setInputType] = useState("password");

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const result = await postSignIn(data);
      console.log(result);
      router.push("/folder");
    } catch (error) {
      setError("email", { type: "isValidData" });
      setError("password", { type: "isValidData" });
      console.error(error);
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
    <S.Container>
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
            register={register("password", { required: true, minLength: 8 })}
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
            {errors.password?.type === "minLength" && ERROR.PASSWORD_LENGTH}
            {errors.password?.type === "required" && ERROR.PASSWORD_REQUIRE}
            {errors.password?.type === "isValidData" &&
              ERROR.PASSWORD_INVALID_DATA}
          </S.ErrorMessage>
        </div>

        <Input.SubmitButton value="로그인" />
      </S.Form>
    </S.Container>
  );
}

export default Test;
