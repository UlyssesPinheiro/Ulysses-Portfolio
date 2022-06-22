import React from "react";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import ContactImg from "../../public/Images/ContactMe/ContactMe.jpg";
import Image from "next/dist/client/image";

export default function ContactMe() {
  return (
    <div>
      <SectionWrapper>
        <SectionHeader>Let's work together!</SectionHeader>
        <p>Send me a message, and i’ll get back to you as fast as possible</p>
        <Image src={ContactImg} />
      </SectionWrapper>
    </div>
  );
}
