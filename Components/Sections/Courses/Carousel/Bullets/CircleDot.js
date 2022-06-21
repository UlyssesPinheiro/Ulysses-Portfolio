import * as React from "react";
import styled from "styled-components";
import Color from "../../../../Defaults/Color";

const SvgComponent = (props, onClick) => (
  <SvgSty
    onClick={onClick}
    fill={Color.primary500}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 96c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z" />
  </SvgSty>
);

export default SvgComponent;

const SvgSty = styled.svg`
  opacity: 0.4;
  &.circleDot:hover {
    opacity: 0.6;
  }
`;
