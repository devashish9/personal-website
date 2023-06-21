import Project from "../components/Project.js";
import { Body } from "../styles/general-styles.js";
import CarpoolImg from "../assets/images/carpool.png";
import EdulawImg from "../assets/images/edulaw.png";

export default function ProjPage() {
  return (
    <Body>
      <Project
        projName={"CarpoolNU"}
        description={[
          "Led a 6-student team to design and launch a carpooling web app for Northeastern co-ops and interns.",
          "We utilize student-provided information such as home and work location, daily work schedules, and more to generate carpooling recommendations. Users can then connect each other and figure out more carpooling details by themselves.",
        ]}
        techStack={[
          "Next",
          "React",
          "Typescript",
          "tRPC",
          "Mapbox",
          "Prisma",
          "MySQL",
        ]}
        img={CarpoolImg}
        githubLink={"https://github.com/sandboxnu/nucarpool"}
      />
      <Project
        projName={"Edulaw"}
        description={[
          "Also built this at Sandbox, need to do something about this wrapping soon lol. Actually I wanna see somethinug here. I think this should fix this. Nvm",
        ]}
        techStack={["Next", "React", "Typescript", "React Forms", "MongoDB"]}
        img={EdulawImg}
        githubLink={"https://github.com/sandboxnu/edulaw"}
      />
    </Body>
  );
}
