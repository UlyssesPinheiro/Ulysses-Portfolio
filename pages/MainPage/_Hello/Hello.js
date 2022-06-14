import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SectionHeader from "../../../Components/Reusables/SectionHeader";
import SectionWrapper from "../../../Components/Reusables/SectionWrapper";
import Mesa from "../../../public/Images/mesaDeTrabalho.png";
import ButtonDark from "../../../Components/Reusables/Buttons/ButtonDark";

export default function HelloSection() {
  return (
    <SectionWrapper>
      <Grid>
        <TextDiv>
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
          <p>Want to contact me? Lets work together!</p>
          <ButtonDark>Send a Message</ButtonDark>
        </TextDiv>
        <Image
          src={Mesa}
          layout="responsive"
          alt="Programmer with computer art"
        />
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
`;
