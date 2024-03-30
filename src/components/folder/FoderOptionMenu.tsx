import React, { ReactPortal, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import shareIcon from "@/src/assets/svg/share.svg";
import editIcon from "@/src/assets/svg/edit.svg";
import deleteIcon from "@/src/assets/svg/trash.svg";

// Modal
import Backdrop from "@/src/components/common/Backdrop";
import ModalWithInput from "@/src/components/Modal/ModalWithInput";
import ModalBase from "@/src/components/Modal/ModalBase";
import Image from "next/image";

const Container = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    display: flex;
    gap: 3px;
    text-decoration: none;
    color: var(--gray2);
    background-color: white;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const ListIconContainer = styled.div`
  position: relative;
  width: 17px;
  height: 17px;
`;

interface MenuList {
  optionTitle: string;
  icon: string;
  modalTitle: string;
  modalBtnText?: string;
}

const MENU_LIST: MenuList[] = [
  {
    optionTitle: "공유",
    icon: shareIcon,
    modalTitle: "폴더 공유",
  },
  {
    optionTitle: "이름 변경",
    icon: editIcon,
    modalTitle: "폴더 이름 변경",
    modalBtnText: "변경하기",
  },
  {
    optionTitle: "삭제",
    icon: deleteIcon,
    modalTitle: "폴더 삭제",
    modalBtnText: "삭제하기",
  },
];

function FoderOptionMenu() {
  const [active, setActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [btnText, setBtnText] = useState<string>("");
  const [isInputModal, setIsInputModal] = useState<boolean>(false);

  const backdropRef = useRef<ReactPortal | null>(null);
  const modalRef = useRef<ReactPortal | null>(null);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const handleModalTitle = (list: MenuList) => {
    setTitle(list.modalTitle);
    setBtnText(list.modalBtnText || "");
    setIsInputModal(list.modalTitle === "폴더 이름 변경");
  };

  const ModalInput = ModalWithInput(ModalBase);

  useEffect(() => {
    if (document) {
      backdropRef.current = createPortal(
        <Backdrop isClose={closeModal} />,
        document.getElementById("backdrop")!
      );
      modalRef.current = createPortal(
        isInputModal ? (
          <ModalInput isClose={closeModal} title={title} btntext={btnText} />
        ) : (
          <ModalBase isClose={closeModal} title={title} btntext={btnText} />
        ),
        document.getElementById("modal")!
      );
    }
  }, [title, active]);

  return (
    <Container>
      {MENU_LIST.map((list) => (
        <button
          key={list.optionTitle}
          onClick={() => {
            openModal();
            handleModalTitle(list);
          }}
        >
          <ListIconContainer>
            <Image fill src={list.icon} alt={list.optionTitle} />
          </ListIconContainer>
          <span>{list.optionTitle}</span>
        </button>
      ))}
      {active && backdropRef.current}
      {active && modalRef.current}
    </Container>
  );
}

export default FoderOptionMenu;
