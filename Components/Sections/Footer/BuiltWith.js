import React from "react";
import styled from "styled-components";
import TechStack from "../../Reusables/TechStack";
import JSImg from "../../../public/Icons/TechStack/JavaScript.png";
import ReactImg from "../../../public/Icons/TechStack/React.png";
import NextJSImg from "../../../public/Icons/TechStack/NextJS.png";
import StyledComponentsImg from "../../../public/Icons/TechStack/StyledComponents.png";
import CssImg from "../../../public/Icons/TechStack/Css3.png";
import HtmlImg from "../../../public/Icons/TechStack/Html5.png";
import MediaQuery from "../../Defaults/MediaQuery";

export default function BuiltWith({ className }) {
  return (
    <LeftDiv className={className}>
      <TechStack
        techStack={[
          NextJSImg,
          ReactImg,
          StyledComponentsImg,
          JSImg,
          HtmlImg,
          CssImg,
        ]}
      >
        Built With
      </TechStack>
    </LeftDiv>
  );
}

const LeftDiv = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
`;
