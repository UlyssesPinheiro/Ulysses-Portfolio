import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import Freepik from "../../Reusables/Icons/Freepik";
import MediaQuery from "../../Defaults/MediaQuery";

export default function ImageCredits({ className }) {
  function openLink(link) {
    window.open(link);
  }

  return (
    <RightDiv className={className}>
      <p>
        Images created by:{" "}
        <span
          onClick={openLink.bind(
            this,
            "https://www.freepik.com/author/stories"
          )}
        >
          Storyset
        </span>
        ,{" "}
        <span
          onClick={openLink.bind(
            this,
            "https://www.freepik.com/author/pikisuperstar"
          )}
        >
          Pikisuperstar
        </span>{" "}
        and{" "}
        <span
          onClick={openLink.bind(
            this,
            "https://www.freepik.com/author/starline"
          )}
        >
          Starline
        </span>
        <br /> on
        <Freepik
          onClick={openLink.bind(this, "https://www.freepik.com/")}
          className="freepik"
          height="1.5rem"
          fill={Color.primary500}
        />
      </p>
    </RightDiv>
  );
}

const RightDiv = styled.div`
  display: grid;
  max-width: 13rem;
  justify-self: flex-end;
  align-self: center;
  font-size: ${Font.size[2] + "px"};
  position: relative;
  text-align: right;

  span {
    cursor: pointer;
    color: ${Color.primary400};
  }

  .freepik {
    cursor: pointer;
  }

  @media (max-width: ${MediaQuery.smartphone}) {
    p {
      font-size: ${Font.size[0] + "px"};
      line-height: 1.5rem;
    }
  }
`;
