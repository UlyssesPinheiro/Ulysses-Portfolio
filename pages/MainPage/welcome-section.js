import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import ProgrammerOnComputer from "../../Components/Sections/Hello/ProgrammerOnComputer";
import ButtonRouded from "../../Components/Reusables/Buttons/ButtonRouded";
import EnvelopeSolid from "../../Components/Reusables/Icons/EnvelopeSolid";
import Color from "../../Components/Defaults/Color";
import Font from "../../Components/Defaults/Font";

export default function WelcomeSection() {
  return (
    <SectionWrapper>
      <Grid>
        <TextDiv id="welcome-section">
          <SectionHeader>Hi, I’m Ulysses,</SectionHeader>
          <p>
            I am a front-end web developer, using <strong>HTML, CSS </strong>and
            <strong> JavaScript</strong> as main languages. Graduated in Product
            Design by Puc-Rio in 2020. Currently, developing personal projects
            and responsive websites, using{" "}
            <strong>
              React, React-Native, Redux, GIT, GitHub, NPM, Bootstrap
            </strong>{" "}
            and <strong>jQuery</strong>.
          </p>
          <ButtonDiv>
            <p>Want to contact me? Lets work together!</p>
            <ButtonRouded
              icon={
                <EnvelopeSolid
                  fill={Color.white}
                  height={Font.size[7] + "px"}
                />
              }
            >
              Send a Message
            </ButtonRouded>
          </ButtonDiv>
        </TextDiv>
        <ProgrammerOnComputer />
      </Grid>
    </SectionWrapper>
  );
}

const TextDiv = styled.div`
  max-width: 35rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const ButtonDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
