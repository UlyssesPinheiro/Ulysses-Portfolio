import React from "react";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import ComputerMouse from "../../Reusables/Icons/ComputerMouse";
import ButtonRounded from "../../Reusables/Buttons/ButtonRounded";
import GitHubSVG from "../../Reusables/Icons/GitHubSVG";

import styled from "styled-components";

export default function ProjectButtons({ linkView, linkGithub }) {
  function openLink(link) {
    window.open(link);
  }

  return (
    <ButtonsDiv>
      <ButtonRounded
        title="Try out the project"
        color="light"
        expand="expand"
        onClick={() => openLink(linkView)}
        icon={<ComputerMouse fill={Color.white} height={Font.size[8] + "px"} />}
      >
        Live View
      </ButtonRounded>
      <ButtonRounded
        title="Opens the project's source code"
        expand="expand"
        onClick={() => openLink(linkGithub)}
        icon={<GitHubSVG fill={Color.white} height={Font.size[8] + "px"} />}
      >
        Code
      </ButtonRounded>
    </ButtonsDiv>
  );
}

const ButtonsDiv = styled.div`
  bottom: 0;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;
