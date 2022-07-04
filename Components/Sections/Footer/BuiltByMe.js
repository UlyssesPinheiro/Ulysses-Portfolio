import React from "react";
import styled from "styled-components";
import Github from "../../Reusables/Icons/GitHubSVG";
import SmallButton from "../../Reusables/Buttons/SmallButton";
import Color from "../../Defaults/Color";
import MediaQuery from "../../Defaults/MediaQuery";
import Font from "../../Defaults/Font";

export default function BuiltByMe({ className }) {
  function openLink() {
    window.open("https://github.com/UlyssesPinheiro/Ulysses-Portfolio");
  }

  return (
    <MiddleDiv className={className}>
      <div>
        <p>This Website was also built by me, from the ground up.</p>
        <p>All rights reserved, view project bellow:</p>
      </div>
      <SmallButton
        color="white"
        onClick={openLink}
        icon={<Github className="icon" fill={Color.gray600} />}
      >
        Code
      </SmallButton>
    </MiddleDiv>
  );
}

const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  gap: 0.8rem;

  @media (max-width: ${MediaQuery.smartphone}) {
    p {
      font-size: ${Font.size[1] + "px"};
      line-height: 1.5rem;
    }
  }
`;
