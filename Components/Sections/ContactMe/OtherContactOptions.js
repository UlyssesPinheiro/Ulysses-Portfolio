import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import GitHubSVG from "../../Reusables/Icons/GitHubSVG";
import Gmail from "../../Reusables/Icons/Gmail";
import LinkedIn from "../../Reusables/Icons/LinkedIn";
import MediaQuery from "../../Defaults/MediaQuery";

export default function OtherContactOptions() {
  function openWindow(link) {
    window.open(link);
  }

  return (
    <OuterContainer>
      <p className="title">You can also contact me here:</p>
      <div className="buttonDiv">
        <ContactLink
          onClick={openWindow.bind(this, "mailto:ulyssespinheiro00@gmail.com")}
        >
          <Gmail fill={Color.gray800}></Gmail>Email
        </ContactLink>
        <ContactLink
          onClick={openWindow.bind(
            this,
            "https://www.linkedin.com/in/ulysses-pinheiro-8308b1171/?locale=en_US"
          )}
        >
          <LinkedIn fill={Color.gray800}></LinkedIn>LinkedIn
        </ContactLink>
        <ContactLink
          onClick={openWindow.bind(this, "https://github.com/UlyssesPinheiro")}
        >
          <GitHubSVG fill={Color.gray800}></GitHubSVG>
          GitHub
        </ContactLink>
      </div>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  font-size: ${Font.size[4] + "px"};
  color: ${Color.gray800};

  .title {
    opacity: 0.6;
  }

  .buttonDiv {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[3] + "px"};
    gap: 0.5rem;
  }
`;

const ContactLink = styled.button`
  background-color: ${Color.white};
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${Font.size[5] + "px"};
  color: ${Color.gray800};

  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 1rem;
  gap: 0.5rem;

  opacity: 0.6;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;

  svg {
    height: 2.5rem;
  }

  border-bottom: 2px solid transparent;

  &:focus {
    outline: none !important;
    border-bottom: 2px solid ${Color.primary500};
  }

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[4] + "px"};
    height: 3rem;

    svg {
      height: 2rem;
    }
  }
`;
