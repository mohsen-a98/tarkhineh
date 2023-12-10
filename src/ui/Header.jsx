import styled from "styled-components";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  @media screen and (min-width: 1024px) {
    padding: 3.2rem 10.8rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Sidebar />
      <Logo />
      <Navbar />
      <HeaderIcons />
    </StyledHeader>
  );
}

export default Header;
