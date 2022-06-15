import Image from "next/dist/client/image";
import React from "react";
import styled from "styled-components";
import Font from "../../Defaults/Font";
import Color from "../../Defaults/Color";

export default function ButtonDark({ icon, children }) {
  return (
    <BackgroundDiv>
      {icon}
      {children}
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 100rem;
  background-color: ${Color.gray700};
  color: ${Color.white};
  font-size: ${Font.size[7] + "px"};
  font-weight: 400;
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: fit-content;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${Color.gray800};
  }
`;
