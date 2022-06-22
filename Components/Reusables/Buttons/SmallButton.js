import Image from "next/dist/client/image";
import React from "react";
import styled from "styled-components";
import Font from "../../Defaults/Font";
import Color from "../../Defaults/Color";

export default function ButtonRounded({
  icon,
  children,
  color = "dark",
  expand = "",
  onClick,
  title,
}) {
  return (
    <ButtonSty
      title={title}
      onClick={onClick}
      className={`button ${color} ${expand}`}
    >
      {children}
      {icon}
    </ButtonSty>
  );
}

const ButtonSty = styled.button`
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 100rem;
  color: ${Color.white};
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.8rem;
  max-width: fit-content;
  align-items: center;
  user-select: none;
  cursor: pointer;

  font-size: ${Font.size[5] + "px"};

  &:focus {
    outline: 2px solid ${Color.primary700} !important;
  }

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

  .icon {
    height: ${Font.size[5] + "px"};
  }
`;
