import React from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import binaryCode from "../../../public/Images/binaryCode.png";
import MediaQuery from "../../Defaults/MediaQuery";

export default function ProjectImages({ images, reversedOrder }) {
  return (
    <ImgDiv className={reversedOrder}>
      <Images>
        {images.map((element, index) => (
          <div className="image" key={`image${index}`}>
            <Image src={element}></Image>
          </div>
        ))}
      </Images>
      <div className="code">
        <Image src={binaryCode} layout="responsive" />
      </div>
    </ImgDiv>
  );
}

const ImgDiv = styled.div`
  width: 100%;
  position: relative;

  .code {
    position: absolute;
    z-index: 5;
    right: -1.3rem;
    top: -1rem;
    height: 90%;
    width: 95%;
    overflow: hidden;
  }

  &.reversedOrder {
    order: 1;
  }
`;

const Images = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 23rem;

  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 50px ${Color.shadow};
  background-color: ${Color.gray400};
  z-index: 10;

  .image {
    font-size: 0;
    z-index: 10;
    box-shadow: 0 0 10px ${Color.shadow2};
  }

  @media (max-width: ${MediaQuery.notebook}) {
    height: 17rem;
  }
`;
