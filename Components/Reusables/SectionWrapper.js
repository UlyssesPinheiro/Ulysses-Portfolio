import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 5rem;
`;
