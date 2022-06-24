import React, { useState } from "react";
import styled from "styled-components";
import AngleLeft from "./Carousel/AngleLeft";
import AngleRight from "./Carousel/AngleRight";
import BulletCarousel from "./BulletCarousel";
import Certificates from "./Carousel/Certificates";
import MediaQuery from "../../Defaults/MediaQuery";

export default function CoursesCarousel({ certificates, thumbnails, links }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  function slideBack() {
    setCurrentSlide((e) => (e > 1 ? e - 1 : thumbnails.length));
  }
  function slideForward() {
    setCurrentSlide((e) => (e < certificates.length ? e + 1 : 1));
  }

  return (
    <Carousel>
      <Certificates
        certificates={certificates}
        thumbnails={thumbnails}
        currentSlide={currentSlide}
        links={links}
      />
      <Switch onClick={slideBack} className="left">
        <AngleLeft />
      </Switch>
      <Switch onClick={slideForward} className="right">
        <AngleRight />
      </Switch>
      <BulletCarousel
        amount={certificates}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </Carousel>
  );
}

const Carousel = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  width: 80%;

  justify-content: center;
  align-items: center;

  @media (max-width: ${MediaQuery.tablet}) {
    width: 100%;
  }
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
  &.right:hover,
  &.left:hover {
    opacity: 0.6;
  }
  &.right:active,
  &.left:active {
    opacity: 0.8;
  }

  @media (max-width: ${MediaQuery.tablet}) {
    width: 2.5rem;

    &.right {
      right: -2rem;
    }
    &.left {
      left: -2rem;
    }
  }
  @media (max-width: ${MediaQuery.tablet}) {
    width: 1rem;

    &.right {
      right: 0rem;
    }
    &.left {
      left: 0rem;
    }
    bottom: -1rem;
    z-index: 40;
  }
`;
