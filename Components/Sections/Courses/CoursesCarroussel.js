import React, { useState } from "react";
import Image from "next/dist/client/image";
import styled from "styled-components";
import Color from "../../Defaults/Color";

export default function CoursesCarroussel({ certificates, thumbnails }) {
  const [currentSlide, setCurrentSlide] = useState("");

  return (
    <CertificateWrapper>
      {certificates.map((el, index) => (
        <Certificate>
          <Image src={el}></Image>
          <p className="pZindex">{el.index}</p>
          {/* <Image src={thumbnails[index]}></Image> */}
        </Certificate>
      ))}
    </CertificateWrapper>
  );
}

const CertificateWrapper = styled.div`
  display: flex;
  /* width: 200%; */
  width: 100%;
  height: 100%;
`;

const Certificate = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.white};
  /* overflow: hidden; */
  border-radius: 1rem;

  .pZindex {
    z-index: 40;
  }
`;
