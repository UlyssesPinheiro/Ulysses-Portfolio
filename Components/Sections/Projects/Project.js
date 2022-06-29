import React from "react";
import styled from "styled-components";
import Color from "../../Defaults/Color";
import Font from "../../Defaults/Font";
import MediaQuery from "../../Defaults/MediaQuery";
import ProjectButtons from "./ProjectButtons";
import TechStack from "./TechStack";
import ProjectImages from "./ProjectImages";

export default function Project({
  title,
  description,
  techStack = [],
  linkView,
  linkGithub,
  images,
  reversedOrder = "",
}) {
  return (
    <Grid>
      <ProjectImages
        linkView={linkView}
        images={images}
        reversedOrder={reversedOrder}
      />
      <div className="textDiv">
        <ProjectTitle>{title}</ProjectTitle>
        <p className="description">{description}</p>
        <TechStack techStack={techStack} />
        <ProjectButtons linkView={linkView} linkGithub={linkGithub} />
      </div>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  height: fit-content;

  .description {
    margin: 0.8rem 0 1rem;
  }

  .textDiv {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;

    @media (max-width: ${MediaQuery.notebook}) {
      font-size: ${Font.size[2] + "px"};

      p {
        line-height: 1.5rem;
      }
    }
  }

  @media (max-width: ${MediaQuery.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${Font.size[7] + "px"};
  color: ${Color.primary500};

  @media (max-width: ${MediaQuery.notebook}) {
    font-size: ${Font.size[6] + "px"};
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    font-size: ${Font.size[5] + "px"};
  }
`;
