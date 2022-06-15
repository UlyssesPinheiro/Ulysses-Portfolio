import React from "react";
import styled from "styled-components";
import Color from "../Defaults/Color";
import Font from "../Defaults/Font";

const Header = styled.h2`
  color: ${Color.primary500};
  font-size: ${Font.size[10] + "px"};
  padding-bottom: 0.8rem;
`;

export default function SectionHeader({ children }) {
  return <Header>{children}</Header>;
}
