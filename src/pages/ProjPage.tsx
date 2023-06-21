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
          "Northeastern University is known for its co-op program, where students get to work as interns for 4-6 months during academic semesters. Many of these positions are at companies far from campus, requiring a long commute.",
          "I led a 6-student team to build a carpooling web app for the university. We utilize student-provided information like home/work location and daily work schedules to generate carpool recommendations. Users can then connect with their recommendations and figure out carpooling details.",
        ]}
        techStack={[
          "React",
          "Typescript",
          "Next.js",
          "Prisma",
          "MySQL",
          "tRPC",
          "Mapbox",
          "CSS",
        ]}
        img={CarpoolImg}
        githubLink={"https://github.com/sandboxnu/nucarpool"}
      />
      <Project
        projName={"Edulaw"}
        description={[
          "Edlaw is an educational web app for parents in Massachusetts to easily file complaints with the state's Department of Education.",
          "As part of a 5-student team, I helped create a mult-section form that lets parents quickly identity educational violation that may have occured at their child's school, and create a PDF document that can be submitted to the DOE.",
        ]}
        techStack={["React", "Typescript", "Next.js", "MongoDB", "CSS"]}
        img={EdulawImg}
        githubLink={"https://github.com/sandboxnu/edulaw"}
      />
      <Project
        projName={"Personal Website"}
        description={["Pretty much covers it"]}
        techStack={["React", "Typescript", "Vite", "CSS"]}
        img={EdulawImg}
        githubLink={"https://github.com/sandboxnu/edulaw"}
      />
    </Body>
  );
}
