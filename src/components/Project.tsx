import { SectionHeading, Pill } from "../styles/section-styles";

interface ProjectProps {
  projName: string;
  title: string;
  description: string;
  techStack: string[];
  img: string;
  githubLink?: string;
}

const renderTechStack = (techStackArray: string[]) => {
  return techStackArray.map((el, index) => <Pill key={index}>{el}</Pill>);
};

export default function Project(projectProps: ProjectProps) {
  return (
    <div>
      <SectionHeading>Test</SectionHeading>
      {renderTechStack(projectProps.techStack)}
    </div>
  );
}
