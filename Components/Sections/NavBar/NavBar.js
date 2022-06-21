import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";

export default function NavBar() {
  return (
    <NavDivUl>
      <NavItem>
        <div
          onClick={() =>
            document
              .getElementById("my-projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <p>My Projects</p>
        </div>
      </NavItem>
      <NavItem>
        <div
          onClick={() =>
            document
              .getElementById("completed-courses")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <p>Completed Courses</p>
        </div>
      </NavItem>
      <NavItem>
        <div
          onClick={() =>
            document
              .getElementById("contact-me")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <p>Contact Me</p>
        </div>
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
