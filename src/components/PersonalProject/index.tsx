import Container from "../Container";
import Project from "./Project";
import StartedPart from "./StartedPart";

const PersonalProject = () => {
  return (
    <div id="project" className="pt-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-semibold text-primary-500 text-center">
          Personal Project
        </h1>
        <p className="text-base md:text-xl text-gray-500 text-center mx-auto mt-4">
          Son's Helpful App Project started as a hope to provide a reliable
          companion that offers <br /> medical knowledge and useful advice to
          the elderly.
        </p>
        <StartedPart />
      </Container>
      <Project />
    </div>
  );
};

export default PersonalProject;
