import React from "react";
import styled from "styled-components";
import CircleDotSolid from "./Carousel/Bullets/CircleDotSolid";
import CircleDot from "./Carousel/Bullets/CircleDot";
import MediaQuery from "../../Defaults/MediaQuery";

export default function BulletCarousel({
  amount,
  currentSlide,
  setCurrentSlide,
}) {
  function goToPage(page) {
    console.log(page);
    setCurrentSlide(page);
  }

  return (
    <BulletDiv>
      {amount.map((e, index) =>
        index + 1 === currentSlide ? (
          <CircleDotSolid key={`CircleDotSolid${index}`} />
        ) : (
          <CircleDot
            key={`CircleDot${index}`}
            className={"circleDot"}
            onClick={() => goToPage(index + 1)}
          />
        )
      )}
    </BulletDiv>
  );
}

const BulletDiv = styled.div`
  position: absolute;
  bottom: -1.5rem;
  display: flex;
  justify-content: center;
  height: 1rem;
  gap: 0.6rem;

  @media (max-width: ${MediaQuery.tablet}) {
    bottom: 0rem;
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    height: 0.8rem;
    gap: 1.2rem;
  }
`;
