import React, { useState } from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../Defaults/Color";

export default function CoursesCarousel({ certificates, thumbnails }) {
  const [currentSlide, setCurrentSlide] = useState("");

  return (
    <CertificateWrapper>
      {certificates.map((el, index) => (
        <Certificate>
          <div className="cropCertificate">
            <Image src={el} layout="responsive"></Image>
          </div>
          {thumbnails[index] && (
            <div className="cropThumbnail">
              <Image src={thumbnails[index]} layout="responsive"></Image>
            </div>
          )}
        </Certificate>
      ))}
    </CertificateWrapper>
  );
}

const CertificateWrapper = styled.div`
  display: flex;

  overflow: hidden;
  position: relative;
  flex: 1;
  height: 100%;
  width: 80%;

  /* overflow: hidden; */
`;

const Certificate = styled.div`
  width: 100%;
  padding: 2rem 5rem 3rem;
  transform: translateX(-000%);
  overflow: hidden;

  flex-shrink: 0;
  font-size: 0;

  .cropCertificate {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 40px ${Color.shadow};
  }

  .cropThumbnail {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 20px ${Color.shadow};

    width: 33%;
    height: fit-content;

    position: absolute;
    right: 4rem;
    bottom: 2rem;
  }
`;
