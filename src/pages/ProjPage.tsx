import Project from "../components/Project.js";
import { Body } from "../styles/general-styles.js";

export default function ProjPage() {
  return (
    <Body>
      <Project
        projName={"TEStTEst"}
        title={"TEstTEst"}
        description={"yada yada"}
        techStack={["React", "Typescript"]}
        img={"idk"}
      ></Project>
    </Body>
  );
}
