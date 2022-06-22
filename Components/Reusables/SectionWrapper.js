import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ id, color, children }) {
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MaxWidth id={id}>{children}</MaxWidth>
    </div>
  );
}

const MaxWidth = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
`;
