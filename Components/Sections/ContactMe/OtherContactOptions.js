import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import GitHub from "../../Reusables/Icons/GitHub";
import Gmail from "../../Reusables/Icons/Gmail";
import LinkedIn from "../../Reusables/Icons/LinkedIn";

export default function OtherContactOptions() {
  function openWindow(link) {
    window.open(link);
  }

  return (
    <OuterContainer>
      You can also contact me here:
      <div className="buttonDiv">
        <ContactLink
          onClick={openWindow.bind(this, "mailto:ulyssespinheiro00@gmail.com")}
        >
          <Gmail fill={Color.gray500}></Gmail>Email
        </ContactLink>
        <ContactLink
          onClick={openWindow.bind(
            this,
            "https://www.linkedin.com/in/ulysses-pinheiro-8308b1171/?locale=en_US"
          )}
        >
          <LinkedIn fill={Color.gray500}></LinkedIn>LinkedIn
        </ContactLink>
        <ContactLink
          onClick={openWindow.bind(this, "https://github.com/UlyssesPinheiro")}
        >
          <GitHub fill={Color.gray500}></GitHub>
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
  color: ${Color.gray500};

  .buttonDiv {
    display: flex;
    gap: 2rem;
  }
`;

const ContactLink = styled.button`
  background-color: ${Color.white};
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${Font.size[5] + "px"};
  color: ${Color.gray500};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 1rem;
  gap: 0.5rem;

  svg {
    height: 2.5rem;
  }

  &:focus {
    outline: 4px solid ${Color.primary200};
  }
`;
