import React from "react";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import Color from "../../Components/Defaults/Color";
import CoursesCarroussel from "../../Components/Sections/Courses/CoursesCarousel";
import styled from "styled-components";

import HtmlCss from "../../public/Images/Courses/HtmlCss.jpg";
import JavaScriptImg from "../../public/Images/Courses/JavaScript.jpg";
import ReactImg from "../../public/Images/Courses/React.jpg";

import thumbHtmlCss from "../../public/Images/Courses/Thumbnails/thumbHtmlCss.jpg";
import thumbJS from "../../public/Images/Courses/Thumbnails/thumbJS.jpg";
import thumbReact from "../../public/Images/Courses/Thumbnails/thumbReact.jpg";

export default function CompletedCourses() {
  return (
    <SectionWrapper id="completed-courses" color={Color.primary100}>
      <CenteredDiv>
        <SectionHeader>Completed courses</SectionHeader>
        <CoursesCarroussel
          certificates={[HtmlCss, JavaScriptImg, ReactImg]}
          links={[
            "https://www.udemy.com/certificate/UC-75fd9955-27ff-4c99-84ae-57b87b7b8378/",
            "https://www.udemy.com/certificate/UC-2536efa8-07db-4540-8a0e-6cbeb82ce824/",
            "https://www.udemy.com/certificate/UC-0e6a3d45-8827-4b55-a6c7-9dd7bb5b977b/",
          ]}
          thumbnails={[thumbHtmlCss, thumbJS, thumbReact]}
        ></CoursesCarroussel>
      </CenteredDiv>
    </SectionWrapper>
  );
}

const CenteredDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
