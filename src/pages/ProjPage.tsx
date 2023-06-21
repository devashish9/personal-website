import Project from "../components/Project.js";
import { Body } from "../styles/general-styles.js";
import CarpoolImg from "../assets/images/carpool.png";
import EdulawImg from "../assets/images/edulaw.png";

export default function ProjPage() {
  return (
    <Body>
      <Project
        projName={"CarpoolNU"}
        title={"Carpooling app for Northeastern Co-ops and Interns"}
        description={
          "Built this at sandbox, for now just typing BS to see how wrapping works, i'm assuming I'll have to set a set width"
        }
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
        title={
          "Assisting parents in Massachusetts to learn about and fight educational violations"
        }
        description={
          "Also built this at Sandbox, need to do something about this wrapping soon lol. Actually I wanna see somethinug here. I think this should fix this. Nvm"
        }
        techStack={["Next", "React", "Typescript", "React Forms", "MongoDB"]}
        img={EdulawImg}
        githubLink={"https://github.com/sandboxnu/edulaw"}
      />
    </Body>
  );
}
