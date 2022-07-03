import React from "react";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import SectionHeader from "../../Components/Reusables/SectionHeader";

import Color from "../../Components/Defaults/Color";
import Project from "../../Components/Sections/Projects/Project";
import styled from "styled-components";
import JavaScript from "../../public/Icons/TechStack/JavaScript.png";
import ReactImg from "../../public/Icons/TechStack/React.png";
import NextJS from "../../public/Icons/TechStack/NextJS.png";
import Expo from "../../public/Icons/TechStack/Expo.png";
import Html5 from "../../public/Icons/TechStack/Html5.png";
import Css3 from "../../public/Icons/TechStack/Css3.png";
import StyledComponentsImg from "../../public/Icons/TechStack/StyledComponents.png";
import ReduxImg from "../../public/Icons/TechStack/Redux.png";

import appExtra1 from "../../public/Images/Projects/ExtraIncome/appExtra1.jpg";
import appExtra2 from "../../public/Images/Projects/ExtraIncome/appExtra2.jpg";
import appExtra3 from "../../public/Images/Projects/ExtraIncome/appExtra3.jpg";
import myHabits1 from "../../public/Images/Projects/MyHabits/myHabits1.png";
import memoryGame from "../../public/Images/Projects/MemoryGame/memoryGame.png";
import MediaQuery from "../../Components/Defaults/MediaQuery";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="my-projects" color={Color.primary50}>
      <SectionHeader>My Projects:</SectionHeader>
      <ProjectsDiv>
        <Project
          title="Incomefy - Extra Income App"
          subtitle="[React Native / Expo - Multiplatform App]"
          description="The app allows the user
          to publish products and services, search them and reorder product listings. Local state storage managed with Redux Persist. Layout CSS developed with Styled-Components."
          techStack={[
            ReactImg,
            Expo,
            ReduxImg,
            StyledComponentsImg,
            JavaScript,
            Html5,
            Css3,
          ]}
          images={[appExtra1, appExtra2, appExtra3]}
          linkView="https://incomefy.netlify.app/"
          linkGithub="https://github.com/UlyssesPinheiro/Cumbuca-Conceito-Renda-Extra"
        ></Project>
        <Project
          title="My Habits - Create new habits"
          description="Use of DOM manipulation to know how many objects to generate and display on screen. To create new habits, the user fills a form. Data is stored locally, and it is not lost after the page is closed."
          techStack={[JavaScript, Html5, Css3]}
          images={[myHabits1]}
          reversedOrder="reversedOrder"
          linkView="https://ulyssespinheiro.github.io/my-habits/"
          linkGithub="https://github.com/UlyssesPinheiro/my-habits"
        ></Project>
        <Project
          title="Memory Game"
          description="Classes and SRC attributes are used, with transitions and sound to flip the cards. The game creates a random array of cards. Then, after each click, compares the card shown aggainst the previous."
          techStack={[JavaScript, Html5, Css3]}
          images={[memoryGame]}
          reversedOrder=""
          linkView="https://ulyssespinheiro.github.io/Memory-Game/"
          linkGithub="https://github.com/UlyssesPinheiro/my-habits"
        ></Project>
      </ProjectsDiv>
    </SectionWrapper>
  );
}

const ProjectsDiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15rem;

  @media (max-width: ${MediaQuery.notebook}) {
    margin-top: 4rem;
    gap: 13rem;
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    gap: 9rem;
  }
`;
