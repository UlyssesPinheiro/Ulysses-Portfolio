import WelcomeSection from "./MainPage/welcome-section";
import NavBar from "../Components/Sections/NavBar/NavBar";
import ProjectsSection from "./MainPage/my-projects";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <WelcomeSection></WelcomeSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
