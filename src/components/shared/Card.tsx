import styled from "styled-components";
import defaultCardImg from "@/src/assets/image/default_card_img.jpg";
import { formatDate, formatTimeAgo } from "@/src/utils/dateUtils";

import starIcon from "@/src/assets/svg/star.svg";
import selectedStarIcon from "@/src/assets/svg/selected_star.svg";
import kebabIcon from "@/src/assets/svg/kebab.svg";
import { FC, createContext, useState } from "react";
import Dropdown from "@/src/components/folder/Dropdown";
import Image from "next/image";

const Container = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  a {
    text-decoration: none;
  }
`;

const CardImgWrapper = styled.div`
  width: 340px;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  img {
    object-fit: cover;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const CardContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  font-size: 14px;
  color: var(--gray1);
`;

const Description = styled.p<{ $hasDescription?: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
  color: ${({ $hasDescription }) =>
    $hasDescription ? "var(--black)" : "var(--gray3)"};
  height: 40px;
`;

const BaseButton = styled.button`
  position: absolute;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  border: none;
  padding: 0;
`;

const StarButton = styled(BaseButton)`
  top: 15px;
  right: 15px;
  width: 30px;
`;

const KebabButton = styled(BaseButton)`
  top: 213px;
  right: 12px;
  width: 25px;
`;

interface Link {
  url: string;
  imageSource?: string;
  image_source?: string;
  description?: string;
  createdAt?: string;
  created_at?: string;
}

interface CardLinkContextType {
  url: string;
}

export const CardLinkContext = createContext<CardLinkContextType | undefined>(
  undefined
);

const Card: FC<{ link: Link }> = ({ link }) => {
  let { url, imageSource, image_source, description, createdAt, created_at } =
    link;
  const [active, setActive] = useState(false);
  const [view, setView] = useState(false);

  const handleStarClick = () => {
    setActive(!active);
  };

  if (!image_source?.includes("http")) {
    image_source = undefined;
  }

  return (
    <CardLinkContext.Provider value={{ url }}>
      <Container>
        <StarButton onClick={handleStarClick}>
          <Image src={active ? selectedStarIcon : starIcon} alt="" />
        </StarButton>

        <KebabButton>
          <Image
            src={kebabIcon}
            onClick={(e) => {
              e.stopPropagation();
              setView(!view);
            }}
            alt=""
          />
          {view && <Dropdown />}
        </KebabButton>

        <a href={url} target="_blank" rel="noreferrer">
          <CardImgWrapper>
            {image_source !== undefined ? (
              <img
                src={image_source}
                width={340}
                height={200}
                alt="카드 이미지"
              />
            ) : (
              <Image src={defaultCardImg} alt="카드 기본 이미지" />
            )}
          </CardImgWrapper>
          <CardContentWrapper>
            <p>{formatTimeAgo(created_at)}</p>
            <Description $hasDescription={!!description}>
              {description || "No Description"}
            </Description>
            <p>{formatDate(createdAt || created_at)}</p>
          </CardContentWrapper>
        </a>
      </Container>
    </CardLinkContext.Provider>
  );
};

export default Card;
