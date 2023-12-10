import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { navData } from "../../data/navData";
import Dropdown from "./Dropdown";

const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 180%;
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  & a {
    text-decoration: none;
    color: var(--color-grey-700);
  }

  & > a.active {
    color: var(--color-primary);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.6rem;
    @media screen and (min-width: 1024px) {
      text-underline-offset: 0.8rem;
    }
  }

  & > img {
    width: 1.6rem;
  }

  & button {
    color: var(--color-grey-700);
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavMenu>
        {navData?.map((item, index) => {
          return (
            <NavItem key={index}>
              {!item.subNav ? (
                <NavLink to={item.path}>{item.title}</NavLink>
              ) : (
                <Dropdown>
                  <Dropdown.Button>{item.title}</Dropdown.Button>
                  <Dropdown.Content>
                    <Dropdown.List>
                      {item.subNav.map((item, index) => {
                        return (
                          <Dropdown.Item key={index}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.List>
                  </Dropdown.Content>
                </Dropdown>
              )}
            </NavItem>
          );
        })}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
