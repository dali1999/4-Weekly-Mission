import styled from "styled-components";
import linkIcon from "@assets/svg/link.svg";
import { ChangeEvent, ReactPortal, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "@components/common/Backdrop";
import ModalBase from "@components/Modal/ModalBase";
import Image from "next/image";

const Container = styled.div`
  background-color: var(--primary-background);
  width: 100%;
  height: 220px;
  padding: 60px 32px 0 32px;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    height: 153px;
  }
`;

const AddLinkBar = styled.div`
  position: relative;
  width: 800px;
  @media (max-width: 767px) {
    height: 153px;
  }
`;

const AddLinkBarInput = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  outline: none;
  font-size: 16px;
  padding: 0 120px 0 60px;
`;

const Icon = styled(Image)`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 20px;
`;

const AddButton = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  top: 17px;
  right: 20px;
  color: var(--white);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

function AddLink() {
  const [active, setActive] = useState(false);
  const [link, setLink] = useState("");
  const modalRef = useRef<ReactPortal | null>(null);
  const backdropRef = useRef<ReactPortal | null>(null);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  useEffect(() => {
    if (document) {
      backdropRef.current = createPortal(
        <Backdrop isClose={closeModal} />,
        document.getElementById("backdrop")!
      );

      modalRef.current = createPortal(
        <ModalBase
          isClose={closeModal}
          title={"폴더에 추가"}
          btntext={"추가하기"}
          addLink={link}
        />,
        document.getElementById("modal")!
      );
    }
  }, [active, link]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <Container>
      <AddLinkBar>
        <Icon src={linkIcon} alt="" />
        <AddLinkBarInput
          placeholder="링크를 추가해 보세요"
          onChange={handleInputChange}
        />
        <AddButton onClick={openModal}>추가하기</AddButton>
      </AddLinkBar>
      {active && modalRef.current}
      {active && backdropRef.current}
    </Container>
  );
}

export default AddLink;
