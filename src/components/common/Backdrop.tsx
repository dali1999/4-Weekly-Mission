import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  top: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.4);
`;

interface Props {
  isClose: () => void;
}

function Backdrop({ isClose }: Props) {
  return <Container onClick={isClose}></Container>;
}

export default Backdrop;
