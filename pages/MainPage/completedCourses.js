import React from "react";
import SectionWrapper from "../../Components/Reusables/SectionWrapper";
import SectionHeader from "../../Components/Reusables/SectionHeader";
import Color from "../../Components/Defaults/Color";
import CoursesCarroussel from "../../Components/Sections/Courses/CoursesCarroussel";
import styled from "styled-components";

import HtmlCss from "../../public/Images/Courses/HtmlCSs.jpg";
import JavaScriptImg from "../../public/Images/Courses/JavaScript.jpg";

import thumbHtmlCss from "../../public/Images/Courses/Thumbnails/thumbHtmlCss.jpg";
import thumbJS from "../../public/Images/Courses/Thumbnails/thumbJS.jpg";
import thumbReact from "../../public/Images/Courses/Thumbnails/thumbReact.jpg";

export default function completedCourses() {
  return (
    <SectionWrapper id="completedCourses" color={Color.primary100}>
      <CenteredDiv>
        <SectionHeader>Completed courses</SectionHeader>
        <CoursesCarroussel
          certificates={[HtmlCss, JavaScriptImg]}
          thumbnails={(thumbHtmlCss, thumbJS)}
        ></CoursesCarroussel>
      </CenteredDiv>
      <div>
        {/* https://www.udemy.com/certificate/UC-75fd9955-27ff-4c99-84ae-57b87b7b8378/ */}
        {/* https://www.udemy.com/certificate/UC-2536efa8-07db-4540-8a0e-6cbeb82ce824/ */}
        {/* https://www.udemy.com/certificate/UC-0e6a3d45-8827-4b55-a6c7-9dd7bb5b977b/ */}
      </div>
    </SectionWrapper>
  );
}

const CenteredDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
