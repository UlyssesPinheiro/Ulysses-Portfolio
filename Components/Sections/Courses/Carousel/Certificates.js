import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Color from "../../../Defaults/Color";
import MediaQuery from "../../../Defaults/MediaQuery";

export default function Certificates({
  certificates,
  thumbnails,
  currentSlide,
  links,
}) {
  function visitCertificatePage(index) {
    window.open(links[index], "_blank");
  }

  return (
    <CertificateWrapper>
      {certificates.map((el, index) => (
        <Certificate
          className={`slide${currentSlide}`}
          key={`Certificate${index}`}
        >
          <CropCertificate
            title="Link to the original certificate"
            onClick={() => visitCertificatePage(index)}
          >
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
  );
}

const Certificate = styled.div`
  width: 100%;
  padding: 2rem 5rem 3rem;
  overflow: hidden;

  flex-shrink: 0;
  font-size: 0;
  transition: all 400ms ease-out;

  &.slide1 {
    transform: translateX(0%);
    opacity: 1;
  }
  &.slide2 {
    transform: translateX(-100%);
    opacity: 1;
  }
  &.slide3 {
    transform: translateX(-200%);
    opacity: 1;
  }
  &.slide4 {
    transform: translateX(-400%);
    opacity: 1;
  }

  @media (max-width: ${MediaQuery.tablet}) {
    padding: 1rem 2rem 2.4rem;
  }

  @media (max-width: ${MediaQuery.smartphone}) {
    padding: 0;
  }
`;

const CertificateWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;

  @media (max-width: ${MediaQuery.smartphone}) {
    margin-bottom: 2rem;
  }
`;

const CropCertificate = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 40px ${Color.shadow};

  @media (max-width: ${MediaQuery.smartphone}) {
    border-radius: 0.7rem;
    box-shadow: none;
  }
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

  @media (max-width: ${MediaQuery.smartphone}) {
    right: 0.3rem;
    bottom: 0.3rem;
    box-shadow: 2px 2px 5px ${Color.shadow};
    border-radius: 0.5rem;
  }
`;
