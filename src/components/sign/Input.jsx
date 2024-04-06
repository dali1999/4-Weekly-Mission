import * as S from "@/components/sign/Input.style";

function Input() {
  return <S.Input />;
}

function TextInput({ placeholder, type = "text", register, $hasError }) {
  return (
    <S.TextInput
      {...register}
      type={type}
      placeholder={placeholder}
      $hasError={$hasError}
    />
  );
}

function SubmitButton({ value }) {
  return <S.SubmitButton type="submit" value={value} />;
}

Input.TextInput = TextInput;
Input.SubmitButton = SubmitButton;

export default Input;
