import React, { useState } from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import AngleLeft from "../../../public/Icons/Carousel/AngleLeft";
import AngleRight from "../../../public/Icons/Carousel/AngleRight";

export default function CoursesCarousel({ certificates, thumbnails }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  function slideBack() {
    setCurrentSlide((e) => (e > 1 ? e - 1 : thumbnails.length));
  }
  function slideForward() {
    setCurrentSlide((e) => (e < certificates.length ? e + 1 : 1));
  }

  const Certificate = styled.div`
    width: 100%;
    padding: 2rem 5rem 3rem;
    transform: ${"translateX(-" + (currentSlide - 1).toString() + "00%)"};
    overflow: hidden;

    flex-shrink: 0;
    font-size: 0;
  `;

  return (
    <Carousel>
      <CertificateWrapper>
        {certificates.map((el, index) => (
          <Certificate>
            <CropCertificate>
              <Image src={el} layout="responsive"></Image>
            </CropCertificate>
            {thumbnails[index] && (
              <CropThumbnail>
                <Image src={thumbnails[index]} layout="responsive"></Image>
              </CropThumbnail>
            )}
          </Certificate>
        ))}
      </CertificateWrapper>
      <Switch onClick={slideBack} className="left">
        <AngleLeft />
      </Switch>
      <Switch onClick={slideForward} className="right">
        <AngleRight />
      </Switch>
    </Carousel>
  );
}

const CertificateWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
`;

const Carousel = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  width: 80%;

  justify-content: center;
  align-items: center;
`;

const Switch = styled.div`
  width: 3rem;
  opacity: 0.4;

  &.right {
    position: absolute;
    right: -5rem;
  }
  &.left {
    position: absolute;
    left: -5rem;
  }
`;

const CropCertificate = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 40px ${Color.shadow};
`;

const CropThumbnail = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px ${Color.shadow};

  width: 33%;
  height: fit-content;

  position: absolute;
  right: 4rem;
  bottom: 2rem;
`;
