import React from "react";
import styled from "styled-components";
import Color from "../Defaults/Color";
import Font from "../Defaults/Font";
import MediaQuery from "../Defaults/MediaQuery";

export default function SectionHeader({ children }) {
  return <Header>{children}</Header>;
}

const Header = styled.h2`
  color: ${Color.primary500};
  font-size: ${Font.size[10] + "px"};
  padding-bottom: 0.8rem;

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[9] + "px"};
    padding-bottom: 0.6rem;
  }

  @media (max-width: ${MediaQuery.smartphone}) {
    text-align: center;
    font-size: ${Font.size[7] + "px"};
  }
`;
