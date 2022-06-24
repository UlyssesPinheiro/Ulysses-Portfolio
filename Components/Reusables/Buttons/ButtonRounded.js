import Image from "next/dist/client/image";
import React from "react";
import styled from "styled-components";
import Font from "../../Defaults/Font";
import Color from "../../Defaults/Color";
import MediaQuery from "../../Defaults/MediaQuery";

export default function ButtonRounded({
  icon,
  children,
  color = "dark",
  expand = "",
  onClick,
  title,
}) {
  return (
    <ButtonSty title={title} onClick={onClick} className={`${color} ${expand}`}>
      {icon}
      {children}
    </ButtonSty>
  );
}

const ButtonSty = styled.button`
  border: none;
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

  @media (max-width: ${MediaQuery.notebook}) {
    padding: 0.5rem 1rem;

    font-size: ${Font.size[6] + "px"};
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    font-size: ${Font.size[5] + "px"};
  }
`;
