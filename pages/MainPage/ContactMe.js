import React from "react";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import ContactImg from "../../public/Images/ContactMe/ContactMe.jpg";
import Image from "next/dist/client/image";
import styled from "styled-components";
import MessageForm from "../../Components/Sections/ContactMe/MessageForm";
import OtherContactOptions from "../../Components/Sections/ContactMe/OtherContactOptions";

export default function ContactMe() {
  return (
    <SectionWrapper id="contact-me">
      <TitleWrapper>
        <SectionHeader>Let's work together!</SectionHeader>
        <p>Send me a message, and i’ll get back to you as fast as possible</p>
      </TitleWrapper>
      <Wrapper>
        <Image src={ContactImg} />
        <MessageForm>a</MessageForm>
      </Wrapper>
      <OtherContactOptions />
    </SectionWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  max-width: 80rem;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
