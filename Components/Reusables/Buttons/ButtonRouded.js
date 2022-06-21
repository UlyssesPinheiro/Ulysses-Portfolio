import Image from "next/dist/client/image";
import React from "react";
import styled from "styled-components";
import Font from "../../Defaults/Font";
import Color from "../../Defaults/Color";

export default function ButtonRouded({
  icon,
  children,
  color = "dark",
  expand = "",
  onClick,
  title,
}) {
  return (
    <BackgroundDiv
      title={title}
      onClick={onClick}
      className={`${color} ${expand}`}
    >
      {icon}
      {children}
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled.div`
  padding: 0.6rem 1.2rem;
  border-radius: 100rem;
  color: ${Color.white};
  font-size: ${Font.size[7] + "px"};
  font-weight: 400;
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: fit-content;
  user-select: none;
  cursor: pointer;

  &.dark {
    background-color: ${Color.gray700};
  }
  &.dark:hover {
    background-color: ${Color.gray800};
  }

  &.light {
    background-color: ${Color.gray400};
  }
  &.light:hover {
    background-color: ${Color.gray500};
  }

  &.expand {
    max-width: none;
  }
`;
