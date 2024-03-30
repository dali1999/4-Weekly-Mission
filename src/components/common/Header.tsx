import styled from "styled-components";
import logo from "@/src/assets/svg/logo.svg";
import Image from "next/image";

const Container = styled.header<{ $isHeader: boolean }>`
  display: flex;
  padding: 20px 200px;
  flex-direction: column;
  position: ${({ $isHeader }) => ($isHeader ? "relative" : "sticky")};
  background-color: var(--primary-background);
  top: 0;
  height: 93px;
  z-index: 9990;

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    height: 63px;
    padding: 17px 32px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.a`
  width: 133px;
  height: 24px;

  @media (max-width: 767px) {
    width: 88px;
    height: 16px;
  }
  img {
    @media (max-width: 767px) {
      width: 88px;
      height: 16px;
    }
  }
`;

const LoginButton = styled.a`
  color: var(--white);
  font-weight: 600;
  font-size: 18px;
  width: 128px;
  height: 53px;
  padding: 16px 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  @media (max-width: 767px) {
    width: 80px;
    height: 37px;
    font-size: 14px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  gap: 10px;
  p {
    color: #535353;
    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    height: 28px;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  cursor: pointer;
  overflow: hidden;
`;

interface UserInfo {
  email: string;
  image_source: string;
}

interface HeaderProps {
  userInfo: UserInfo;
  $isHeader: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  userInfo,
  $isHeader,
}) => {
  const { image_source, email } = userInfo;
  const isUserInfoEmpty = Object.keys(userInfo).length === 0;

  return (
    <Container $isHeader={$isHeader}>
      <HeaderWrapper>
        <Logo href="/">
          <Image src={logo} alt="로고" />
        </Logo>
        {isUserInfoEmpty ? (
          <LoginButton className="login-btn" href="/signin">
            로그인
          </LoginButton>
        ) : (
          <Profile>
            <ProfileImage>
              {image_source && (
                <Image src={image_source} fill alt="유저 프로필 이미지" />
              )}
            </ProfileImage>
            <p>{email}</p>
          </Profile>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
