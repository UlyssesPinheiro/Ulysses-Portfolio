import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Color from "../../Defaults/Color";

export default function NavBar() {
  return (
    <NavDivUl>
      <NavItem>
        <Link href="#my-projects">
          <p>My Projects</p>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#completed-courses">
          <p>Completed Courses</p>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#contact-me">
          <p>Contact Me</p>
        </Link>
      </NavItem>
    </NavDivUl>
  );
}

const NavDivUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 2rem 5rem;
  gap: 4rem;
`;

const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${Color.primary500};
  }
`;
