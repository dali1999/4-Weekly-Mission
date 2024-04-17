import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";

import { FolderContext } from "@/pages/folder";
import checkIcon from "@assets/svg/check.svg";
import Image from "next/image";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FolderList = styled.li<{ $isActive: boolean }>`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ $isActive }) =>
    $isActive && "var(--primary-background)"};
  cursor: pointer;
`;

const FolderName = styled.span<{ $isActive: boolean }>`
  font-size: 16px;
  padding: 0 10px;
  color: ${({ $isActive }) => $isActive && "var(--primary)"};
`;

const LinkCount = styled.span`
  font-size: 14px;
  color: var(--gray2);
`;

const CheckIcon = styled(Image)`
  position: absolute;
  right: 10px;
`;

function FolderAddList() {
  const { folders } = useContext(FolderContext);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleListClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      {folders.map((folder, index) => (
        <FolderList
          key={index}
          $isActive={activeIndex === index}
          onClick={() => handleListClick(index)}
        >
          <FolderName $isActive={activeIndex === index}>
            {folder.name}
          </FolderName>
          <LinkCount>{folder.link.count}개 링크</LinkCount>
          {activeIndex === index && (
            <CheckIcon src={checkIcon} alt="체크 아이콘" />
          )}
        </FolderList>
      ))}
    </Container>
  );
}

export default FolderAddList;
