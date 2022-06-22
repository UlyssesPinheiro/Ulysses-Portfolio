import WelcomeSection from "./MainPage/welcome-section";
import NavBar from "../Components/Sections/NavBar/NavBar";
import ProjectsSection from "./MainPage/my-projects";
import CompletedCourses from "./MainPage/completedCourses";
import ContactMe from "./MainPage/ContactMe";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <WelcomeSection></WelcomeSection>
      <ProjectsSection></ProjectsSection>
      <CompletedCourses></CompletedCourses>
      <ContactMe></ContactMe>
    </div>
  );
}
