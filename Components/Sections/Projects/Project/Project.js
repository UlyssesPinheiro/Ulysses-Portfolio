import React from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../../Defaults/Color";
import Font from "../../../Defaults/Font";
import binaryCode from "../../../../public/Images/binaryCode.png";
import ButtonRouded from "../../../Reusables/Buttons/ButtonRouded";
import Github from "../../../Reusables/Icons/Github";
import ComputerMouse from "../../../Reusables/Icons/ComputerMouse";

export default function Project() {
  return (
    <Grid>
      <ImgDiv>
        <ProjectImages>
          <div className="firstDiv"></div>
          <div className="secondDiv"></div>
          <div className="code">
            <Image src={binaryCode} layout="responsive" />
          </div>
        </ProjectImages>
      </ImgDiv>
      <div>
        <ProjectTitle>Project Title</ProjectTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <strong>Tech Stack</strong>
        <ButtonsDiv>
          <ButtonRouded
            color="light"
            expand="expand"
            icon={
              <ComputerMouse fill={Color.white} height={Font.size[8] + "px"} />
            }
          >
            Live View
          </ButtonRouded>
          <ButtonRouded
            expand="expand"
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
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectImages = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;

  .firstDiv,
  .secondDiv {
    width: 100%;
    height: 100%;
    background-color: ${Color.primary100};
    z-index: 10;
  }
  .firstDiv {
    border-radius: 1rem 0 0 1rem;
  }
  .secondDiv {
    border-radius: 0 1rem 1rem 0;
    background-color: ${Color.primary200};
  }

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

const ProjectTitle = styled.h3`
  font-size: ${Font.size[7] + "px"};
  color: ${Color.primary500};
`;

const ButtonsDiv = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;
