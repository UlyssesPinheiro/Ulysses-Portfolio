import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import Whatsapp from "../../Reusables/Icons/Whatsapp";
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
          <Gmail fill={Color.gray800}></Gmail>E-mail
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
          onClick={openWindow.bind(this, "https://wa.me/5521979211446")}
        >
          <Whatsapp fill={Color.gray800}></Whatsapp>
          Whatsapp
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
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 0;
    justify-content: center;
  }

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[3] + "px"};
    gap: 0.5rem;
    row-gap: 0;
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    font-size: ${Font.size[2] + "px"};
    .buttonDiv {
      gap: 2rem;
      row-gap: 0;
      width: 100%;
      /* justify-content: space-between; */
    }
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

  @media (max-width: ${MediaQuery.smartphone}) {
    font-size: ${Font.size[3] + "px"};
    padding: 0;
    gap: 0.5rem;
  }
`;
