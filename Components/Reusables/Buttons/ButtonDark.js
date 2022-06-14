import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";

export default function ButtonDark({ children }) {
  return <BackgroundDiv>{children}</BackgroundDiv>;
}

const BackgroundDiv = styled.div`
  padding: 0.8rem;
  border-radius: 100rem;
  background-color: ${Color.gray700};
  color: ${Color.white};
`;
