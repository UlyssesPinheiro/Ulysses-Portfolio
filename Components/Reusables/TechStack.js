import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";

import Color from "../Defaults/Color";

export default function TechStack({ techStack, children = "Tech Stack" }) {
  return (
    <div>
      <strong>{children}</strong>
      <TechDiv>
        {techStack.map((element, index) => (
          <div className="techStack" key={`techStack${index}`}>
            <Image src={element}></Image>
          </div>
        ))}
      </TechDiv>
    </div>
  );
}

const TechDiv = styled.div`
  margin: 0.5rem 0 0;
  display: flex;
  gap: 0.6rem;

  flex-wrap: wrap;

  .techStack {
    height: 2rem;
    width: 2rem;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 2px 2px ${Color.shadow};
  }
`;
