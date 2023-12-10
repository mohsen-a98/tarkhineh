import { useState } from "react";
import styled, { css } from "styled-components";
import { navData } from "../../data/navData";
import { useOutsideClick } from "../hooks/useOutsideClick";
import SubMenu from "./SubMenu";

const Overlay = styled.div`
  &::before {
    content: "";
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px);
    transform: translateX(150%);
    transition: all 0.3s;
  }

  ${(props) =>
    props.open === "open" &&
    css`
      &::before {
        transform: translateX(0);
      }
    `}
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SidebarIcon = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: transparent;
  border: none;

  & > img {
    max-width: 100%;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  transform: translateX(150%);
  transition: all 0.3s;
  background-color: var(--color-white);

  ${(props) =>
    props.open === "open" &&
    css`
      transform: translateX(0);
    `}
`;

const NavMenu = styled.ul`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 180%;
  list-style: none;
`;
const NavItem = styled.li`
  margin-bottom: 0.8rem;
  &:not(:first-child) {
    padding: 0 1.6rem;
  }

  &:last-child > a {
    border-bottom: none;
  }
`;

const BackImg = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("./assets/images/top-frame.png") no-repeat;
  background-size: cover;
  width: 25.6rem;
  height: 10.4rem;
  position: relative;

  & > img {
    position: absolute;
    top: 3.2rem;
    right: 1.6rem;
    width: 8rem;
  }

  & > button {
    border: none;
    background-color: transparent;
    color: var(--color-white);
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    font-size: xx-large;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  const close = () => setShowNav(false);
  const ref = useOutsideClick(close);

  const handleToggleNav = () => {
    setShowNav((show) => !show);
  };

  return (
    <Overlay open={showNav ? "open" : "close"}>
      <SidebarIcon onClick={handleToggleNav}>
        <img
          src="../../public/assets/svg/burger-menu.svg"
          alt="burger menu icon"
        />
      </SidebarIcon>
      <Nav open={showNav ? "open" : "close"} ref={ref}>
        <NavMenu>
          <NavItem>
            <BackImg>
              <img src="./assets/svg/logo-white.svg" alt="logo" />
              <button type="button" onClick={handleToggleNav}>
                &times;
              </button>
            </BackImg>
          </NavItem>

          {navData?.map((item, index) => (
            <NavItem key={index}>
              <SubMenu item={item} onClick={handleToggleNav} />
            </NavItem>
          ))}
        </NavMenu>
      </Nav>
    </Overlay>
  );
}

export default Sidebar;
