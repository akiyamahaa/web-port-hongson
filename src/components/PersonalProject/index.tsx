import Container from "../Container";
import Project from "./Project";
import StartedPart from "./StartedPart";

const PersonalProject = () => {
  return (
    <div id="personalproject">
      <Container>
        <h1 className="text-4xl md:text-5xl font-semibold text-primary-500 text-center">
          Personal Project
        </h1>
        <StartedPart />
      </Container>
      <Project />
    </div>
  );
};

export default PersonalProject;
