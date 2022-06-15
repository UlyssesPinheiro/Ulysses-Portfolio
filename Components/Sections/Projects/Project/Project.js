import React from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../../Defaults/Color";
import Font from "../../../Defaults/Font";
import binaryCode from "../../../../public/Images/binaryCode.png";
import ButtonRouded from "../../../Reusables/Buttons/ButtonRouded";
import Github from "../../../Reusables/Icons/Github";
import ComputerMouse from "../../../Reusables/Icons/ComputerMouse";

export default function Project({
  title,
  description,
  techStack = [],
  linkView,
  linkGithub,
  images,
}) {
  function openLink(link) {
    window.open(link);
  }

  return (
    <Grid>
      <ImgDiv>
        <ProjectImages>
          {images.map((element) => (
            <div className="image">
              <Image src={element}></Image>
            </div>
          ))}
        </ProjectImages>
        <div className="code">
          <Image src={binaryCode} layout="responsive" />
        </div>
      </ImgDiv>
      <div>
        <ProjectTitle>{title}</ProjectTitle>
        <p className="description">{description}</p>
        <strong>Tech Stack</strong>
        <TechDiv>
          {techStack.map((element) => (
            <div className="techStack">
              <Image src={element}></Image>
            </div>
          ))}
        </TechDiv>
        <ButtonsDiv>
          <ButtonRouded
            color="light"
            expand="expand"
            onClick={() => openLink(linkView)}
            icon={
              <ComputerMouse fill={Color.white} height={Font.size[8] + "px"} />
            }
          >
            Live View
          </ButtonRouded>
          <ButtonRouded
            expand="expand"
            onClick={() => openLink(linkGithub)}
            icon={<Github fill={Color.white} height={Font.size[8] + "px"} />}
          >
            Github Code
          </ButtonRouded>
        </ButtonsDiv>
      </div>
    </Grid>
  );
}

const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  height: 20rem;

  .description {
    margin: 0.8rem 0 1rem;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
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
`;

const ProjectImages = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  display: flex;

  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 50px ${Color.shadow};

  gap: 3px;
  background-color: ${Color.primary500};
  z-index: 10;

  .image {
    z-index: 10;
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${Font.size[7] + "px"};
  color: ${Color.primary500};
`;

const ButtonsDiv = styled.div`
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
