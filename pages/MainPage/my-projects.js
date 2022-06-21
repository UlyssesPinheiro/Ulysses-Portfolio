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

import appExtra1 from "../../public/Images/Projects/ExtraIncome/appExtra1.jpg";
import appExtra2 from "../../public/Images/Projects/ExtraIncome/appExtra2.jpg";
import appExtra3 from "../../public/Images/Projects/ExtraIncome/appExtra3.jpg";
import myHabits1 from "../../public/Images/Projects/MyHabits/myHabits1.png";
import myHabits2 from "../../public/Images/Projects/MyHabits/myHabits2.png";
import memoryGame from "../../public/Images/Projects/MemoryGame/MemoryGame.png";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="my-projects" color={Color.primary50}>
      <SectionHeader>My Projects:</SectionHeader>
      <ProjectsDiv>
        <Project
          title="Extra Income App"
          subtitle="[React Native / Expo - Multiplatform App]"
          description="The app allows the user
          to publish products and services, search them and reorder product listings. Local state storage managed with Redux Persist. Layout CSS developed with Styled-Components."
          techStack={[ReactImg, Expo, JavaScript, Html5, Css3]}
          images={[appExtra1, appExtra2, appExtra3]}
          linkView="https://expo.dev/@ulyssespinheiro/CumbucaRendaExtra"
          linkGithub="https://github.com/UlyssesPinheiro/Cumbuca-Conceito-Renda-Extra"
        ></Project>
        <Project
          title="My Habits - Create new habits"
          description="Use of DOM
          manipulation to know how many objects to generate and display on screen. To create new habits, the user fills a form. Data is stored locally, and it is not lost after a page reload."
          techStack={[JavaScript, Html5, Css3]}
          images={[myHabits1, myHabits2]}
          reversedOrder="reversedOrder"
          linkView="https://ulyssespinheiro.github.io/my-habits/"
          linkGithub="https://github.com/UlyssesPinheiro/my-habits"
        ></Project>
        <Project
          title="Memory Game"
          description="Use of classes and image SRC attribute, to flip cards, applying transition durations and sounds. A random array of cards is created. Mouse clicks detects the card displayed aggainst the previous one to create the game logic."
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
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;
