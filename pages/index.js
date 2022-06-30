import WelcomeSection from "./MainPage/WelcomeSection";
import NavBar from "../Components/Sections/NavBar/NavBar";
import ProjectsSection from "./MainPage/MyProjects";
import CompletedCourses from "./MainPage/CompletedCourses";
import ContactMe from "./MainPage/ContactMe";
import Credits from "./MainPage/Credits";
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
      <Credits></Credits>
    </Container>
  );
}

const Container = styled.div`
  *:focus {
    outline: 4px solid ${Color.primary300};
  }
`;
