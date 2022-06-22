import React from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import binaryCode from "../../../public/Images/binaryCode.png";
import ButtonRounded from "../../Reusables/Buttons/ButtonRounded";
import Github from "../../Reusables/Icons/Github";
import ComputerMouse from "../../Reusables/Icons/ComputerMouse";

export default function Project({
  title,
  description,
  techStack = [],
  linkView,
  linkGithub,
  images,
  reversedOrder = "",
}) {
  function openLink(link) {
    window.open(link);
  }

  return (
    <Grid>
      <ImgDiv className={reversedOrder}>
        <ProjectImages>
          {images.map((element, index) => (
            <div className="image" key={`image${index}`}>
              <Image src={element}></Image>
            </div>
          ))}
        </ProjectImages>
        <div className="code">
          <Image src={binaryCode} layout="responsive" />
        </div>
      </ImgDiv>
      <div className="textDiv">
        <ProjectTitle>{title}</ProjectTitle>
        <p className="description">{description}</p>
        <strong>Tech Stack</strong>
        <TechDiv>
          {techStack.map((element, index) => (
            <div className="techStack" key={`techStack${index}`}>
              <Image src={element}></Image>
            </div>
          ))}
        </TechDiv>
        <ButtonsDiv>
          <ButtonRounded
            title="Try out the project"
            color="light"
            expand="expand"
            onClick={() => openLink(linkView)}
            icon={
              <ComputerMouse fill={Color.white} height={Font.size[7] + "px"} />
            }
          >
            Live View
          </ButtonRounded>
          <ButtonRounded
            title="Opens the project's source code"
            expand="expand"
            onClick={() => openLink(linkGithub)}
            icon={<Github fill={Color.white} height={Font.size[7] + "px"} />}
          >
            Code
          </ButtonRounded>
        </ButtonsDiv>
      </div>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  height: 20rem;

  .description {
    margin: 0.8rem 0 1rem;
  }

  .textDiv {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;

  .code {
    position: absolute;
    z-index: 5;
    right: -1rem;
    top: -1rem;
    height: 90%;
    width: 90%;
    overflow: hidden;
    /* border-radius: 1rem; */
  }

  &.reversedOrder {
    order: 1;
  }
`;

const ProjectImages = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  max-height: 20rem;
  display: flex;

  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 50px ${Color.shadow};

  gap: 3px;
  background-color: ${Color.primary500};
  z-index: 10;

  .image {
    font-size: 0;
    z-index: 10;
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${Font.size[7] + "px"};
  color: ${Color.primary500};
`;

const ButtonsDiv = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const TechDiv = styled.div`
  margin: 0.5rem 0 1rem;
  display: flex;
  gap: 0.6rem;

  .techStack {
    height: 2rem;
    width: 2rem;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 2px 2px ${Color.shadow};
  }
`;
