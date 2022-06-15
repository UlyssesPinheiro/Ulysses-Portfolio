import React from "react";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import SectionHeader from "../../Components/Reusables/SectionHeader";

import Color from "../../Components/Defaults/Color";
import Project from "../../Components/Sections/Projects/Project/Project";
import styled from "styled-components";

export default function ProjectsSection() {
  return (
    <SectionWrapper color={Color.primary50}>
      <ProjectsDiv id="my-projects">
        <SectionHeader>My Projects:</SectionHeader>
        <Project></Project>
      </ProjectsDiv>
    </SectionWrapper>
  );
}

const ProjectsDiv = styled.div`
  width: 100%;
`;
