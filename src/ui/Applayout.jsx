import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  max-width: 144rem;
  margin: 0 auto;
`;

function Applayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default Applayout;
