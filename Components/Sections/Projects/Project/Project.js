import React from "react";
import styled from "styled-components";
import Color from "../../../Defaults/Color";
import Font from "../../../Defaults/Font";

export default function Project() {
  return (
    <div>
      <div></div>
      <ProjectTitle>Project Title</ProjectTitle>
    </div>
  );
}

const ProjectTitle = styled.h3`
  font-size: ${Font.size[7] + "px"};
  color: ${Color.primary500};
`;
