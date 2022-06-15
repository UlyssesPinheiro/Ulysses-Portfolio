import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ color, children }) {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${color};
  `;

  return (
    <Wrapper>
      <MaxWidth>{children}</MaxWidth>
    </Wrapper>
  );
}

const MaxWidth = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
`;
