import styled from "styled-components";

const StyledLogo = styled.div`
  @media screen and (max-width: 1024px) {
    & > img {
      width: 10.2rem;
    }
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <img src="./assets/svg/logo.svg" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
