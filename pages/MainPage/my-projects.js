import React from "react";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import SectionHeader from "../../Components/Reusables/SectionHeader";

import Color from "../../Components/Defaults/Color";
import Project from "../../Components/Sections/Projects/Project/Project";
import styled from "styled-components";
import JavaScript from "../../public/Icons/TechStack/JavaScript.png";
import ReactImg from "../../public/Icons/TechStack/React.png";
import NextJS from "../../public/Icons/TechStack/NextJS.png";
import Expo from "../../public/Icons/TechStack/Expo.png";
import Html5 from "../../public/Icons/TechStack/Html5.png";
import Css3 from "../../public/Icons/TechStack/Css3.png";

import appExtra1 from "../../public/Images/Projects/extraIncome/appExtra1.jpg";
import appExtra2 from "../../public/Images/Projects/extraIncome/appExtra2.jpg";
import appExtra3 from "../../public/Images/Projects/extraIncome/appExtra3.jpg";

export default function ProjectsSection() {
  return (
    <SectionWrapper color={Color.primary50}>
      <ProjectsDiv id="my-projects">
        <SectionHeader>My Projects:</SectionHeader>
        <Project
          title="Extra Income App"
          description="The app allows the user
          to publish products and services, search them and reorder product listings. Local state storage managed with Redux Persist. Layout CSS developed with Styled-Components. "
          techStack={[ReactImg, Expo, JavaScript, Html5, Css3]}
          images={[appExtra1, appExtra2, appExtra3]}
          linkView="https://expo.dev/@ulyssespinheiro/CumbucaRendaExtra"
          linkGithub="https://github.com/UlyssesPinheiro/Cumbuca-Conceito-Renda-Extra"
        ></Project>
      </ProjectsDiv>
    </SectionWrapper>
  );
}

const ProjectsDiv = styled.div`
  width: 100%;
`;
