import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import MediaQuery from "../../Defaults/MediaQuery";
import Font from "../../Defaults/Font";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      const scrollingUp = this.oldScroll > this.scrollY;
      console.log(scrollingUp);
      this.oldScroll = this.scrollY;
      if (scrollingUp) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <NavUl className={scrolled ? (showNavBar ? "show" : "hidden") : ""}>
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
  padding: 1rem 5rem;
  gap: 4rem;
  z-index: 50;
  box-shadow: none;
  position: fixed;
  opacity: 1;

  transition: all 300ms;
  background-color: ${Color.white};
  width: 100%;

  &.show {
    box-shadow: 3px 3px 3px ${Color.shadow};
    opacity: 1;
    top: 0px;
  }
  &.hidden {
    opacity: 0;
    top: -80px;
  }

  @media (max-width: ${MediaQuery.tablet}) {
    padding: 1rem 5rem 0;
    justify-content: space-evenly;
  }

  @media (max-width: ${MediaQuery.smartphone}) {
    padding: 0.6rem 1rem;
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
