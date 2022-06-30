import React from "react";
import styled from "styled-components";
import MediaQuery from "../../Defaults/MediaQuery";

export default function FirstSectionWrapper({
  id,
  color = "#ffffff",
  children,
}) {
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
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;

  @media (max-width: ${MediaQuery.tablet}) {
    padding: 2rem 2rem;
  }
`;
