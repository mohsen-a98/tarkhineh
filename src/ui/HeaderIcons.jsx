import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & img {
    width: 3rem;
  }

  & > a:first-child {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

function HeaderIcons() {
  return (
    <StyledHeaderIcons>
      <Link to="#">
        <img src="./assets/svg/search-icon.svg" alt="آیکون جستجو" />
      </Link>
      <Link to="shoppingCart">
        <img src="./assets/svg/cart-icon.svg" alt="آیکون سبدخرید" />
      </Link>
      <Link to="#">
        <img src="./assets/svg/profile-icon.svg" alt="آیکون پروفایل" />
      </Link>
    </StyledHeaderIcons>
  );
}

export default HeaderIcons;
