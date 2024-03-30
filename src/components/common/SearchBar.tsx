import React, { ChangeEvent } from "react";
import styled from "styled-components";
import searchIcon from "@/src/assets/svg/search.svg";
import Image from "next/image";

const Container = styled.div`
  position: relative;
  margin: 40px 0;
  display: flex;
  padding: 0px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;

  input {
    height: 54px;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 16px;
    background-color: #f5f5f5;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 767px) {
    input {
      height: 43px;
      padding: 0 16px;
      font-size: 14px;
    }
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const SearchBar = ({ inputValue, setInputValue }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <SearchIconContainer>
        <Image src={searchIcon} alt="검색 아이콘" />
      </SearchIconContainer>

      <input
        type="text"
        placeholder="링크를 검색해 보세요"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default SearchBar;
