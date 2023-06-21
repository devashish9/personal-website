import { SectionHeading, SectionTitle, Pill } from "../styles/section-styles";
import { Text } from "../styles/general-styles";

interface ProjectProps {
  projName: string;
  title: string;
  description: string;
  img: string;
  techStack: string[];
}

const renderTechStack = (techStack: string[]) => {
  return techStack.map((el, index) => <Pill key={index}>{el}</Pill>);
};

export default function Project(projectProps: ProjectProps) {
  return (
    <div>
      <SectionHeading>{projectProps.projName}</SectionHeading>
      {renderTechStack(projectProps.techStack)}
      <SectionTitle>{projectProps.title}</SectionTitle>
      <Text>{projectProps.description}</Text>
    </div>
  );
}
