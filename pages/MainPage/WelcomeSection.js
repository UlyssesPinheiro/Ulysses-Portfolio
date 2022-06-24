import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import FirstSectionWrapper from "../../Components/Sections/Hello/FirstSectionWrapper";
import ProgrammerOnComputer from "../../Components/Sections/Hello/ProgrammerOnComputer";
import ButtonRounded from "../../Components/Reusables/Buttons/ButtonRounded";
import EnvelopeSolid from "../../Components/Reusables/Icons/EnvelopeSolid";
import Color from "../../Components/Defaults/Color";
import Font from "../../Components/Defaults/Font";
import MediaQuery from "../../Components/Defaults/MediaQuery";

export default function WelcomeSection() {
  return (
    <FirstSectionWrapper>
      <Grid id="welcome-section">
        <TextDiv>
          <div>
            <SectionHeader>Hi, I’m Ulysses,</SectionHeader>
            <p>
              I am a front-end web developer, using <strong>HTML, CSS </strong>
              and
              <strong> JavaScript</strong> as main languages. Graduated in
              Product Design by Puc-Rio in 2020. Currently, developing personal
              projects and responsive websites, using{" "}
              <strong>
                React, React-Native, Redux, GIT, GitHub, NPM, Bootstrap
              </strong>{" "}
              and <strong>jQuery</strong>.
            </p>
          </div>
          <ButtonDiv>
            <p>Want to contact me? Lets work together!</p>
            <ButtonRounded
              onClick={() =>
                document
                  .getElementById("contact-me")
                  .scrollIntoView({ behavior: "smooth" })
              }
              icon={
                <EnvelopeSolid
                  fill={Color.white}
                  height={Font.size[7] + "px"}
                />
              }
            >
              Send a Message
            </ButtonRounded>
          </ButtonDiv>
        </TextDiv>
        <Programmer>
          <ProgrammerOnComputer />
        </Programmer>
      </Grid>
    </FirstSectionWrapper>
  );
}

const TextDiv = styled.div`
  max-width: 35rem;

  @media (max-width: ${MediaQuery.tablet}) {
    order: 1;
    max-width: 100%;
    padding: 0 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[2] + "px"};
  }

  @media (max-width: ${MediaQuery.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ButtonDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Programmer = styled.div`
  @media (max-width: ${MediaQuery.tablet}) {
    padding: 0 5rem;
  }
`;
