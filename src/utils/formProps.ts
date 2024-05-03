export const emailTextInputProps = {
  type: "text",
  registerOptions: {
    required: true,
    pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
  },
  placeholder: "이메일을 입력해 주세요",
};

export const passwordTextInputProps = (inputType: string) => ({
  type: inputType,
  registerOptions: {
    required: true,
    pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
  },
  placeholder: "영문, 숫자를 조합해 8자 이상 입력해 주세요",
});
