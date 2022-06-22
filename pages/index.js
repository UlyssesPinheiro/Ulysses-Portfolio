import WelcomeSection from "./MainPage/welcome-section";
import NavBar from "../Components/Sections/NavBar/NavBar";
import ProjectsSection from "./MainPage/my-projects";
import CompletedCourses from "./MainPage/completedCourses";
import ContactMe from "./MainPage/ContactMe";
import styled from "styled-components";
import Color from "../Components/Defaults/Color";

export default function Home() {
  return (
    <Container>
      <NavBar></NavBar>
      <WelcomeSection></WelcomeSection>
      <ProjectsSection></ProjectsSection>
      <CompletedCourses></CompletedCourses>
      <ContactMe></ContactMe>
    </Container>
  );
}

const Container = styled.div`
  *:focus {
    outline: 4px solid ${Color.primary700};
  }
`;
