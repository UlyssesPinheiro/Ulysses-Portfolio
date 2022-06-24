import React from "react";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import ContactImg from "../../public/Images/ContactMe/ContactMe.jpg";
import Image from "next/dist/client/image";
import styled from "styled-components";
import MessageForm from "../../Components/Sections/ContactMe/MessageForm";
import OtherContactOptions from "../../Components/Sections/ContactMe/OtherContactOptions";
import MediaQuery from "../../Components/Defaults/MediaQuery";
import Font from "../../Components/Defaults/Font";

export default function ContactMe() {
  return (
    <SectionWrapper id="contact-me">
      <TitleWrapper>
        <SectionHeader>Let&apos;s work together!</SectionHeader>
        <p>
          Send me a message, and I will get back to you as fast as possible.
        </p>
      </TitleWrapper>
      <Grid>
        <ImageDiv>
          <Image src={ContactImg} />
        </ImageDiv>
        <MessageForm />
      </Grid>
      <OtherContactOptions />
    </SectionWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: ${MediaQuery.tablet}) {
    p {
      font-size: ${Font.size[2] + "px"};
    }
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    p {
      font-size: ${Font.size[1] + "px"};
      line-height: 1.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  max-width: 80rem;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${MediaQuery.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ImageDiv = styled.div`
  @media (max-width: ${MediaQuery.tablet}) {
    padding: 0 4rem;
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    padding: 0;
  }
`;
