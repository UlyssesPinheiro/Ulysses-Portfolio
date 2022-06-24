import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import MediaQuery from "../../Defaults/MediaQuery";
import Font from "../../Defaults/Font";

export default function NavBar() {
  return (
    <NavUl>
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
    </NavUl>
  );
}

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 2rem 5rem;
  gap: 4rem;

  @media (max-width: ${MediaQuery.tablet}) {
    margin: 2rem 5rem 0;
    justify-content: space-evenly;
  }

  @media (max-width: ${MediaQuery.smartphone}) {
    margin: 1rem 1rem 0;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${Color.primary500};
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    p {
      font-size: ${Font.size[1] + "px"};
      line-height: 2rem;
    }
  }
`;
