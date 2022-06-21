import React from "react";
import styled from "styled-components";
import CircleDotSolid from "./Carousel/Bullets/CircleDotSolid";
import CircleDot from "./Carousel/Bullets/CircleDot";

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
          <CircleDotSolid />
        ) : (
          <CircleDot
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
`;
