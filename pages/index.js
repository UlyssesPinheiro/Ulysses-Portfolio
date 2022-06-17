import WelcomeSection from "./MainPage/welcome-section";
import NavBar from "../Components/Sections/NavBar/NavBar";
import ProjectsSection from "./MainPage/my-projects";
import CompletedCourses from "./MainPage/completedCourses";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <WelcomeSection></WelcomeSection>
      <ProjectsSection></ProjectsSection>
      <CompletedCourses></CompletedCourses>
    </div>
  );
}
