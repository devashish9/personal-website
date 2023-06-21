import {
  SectionHeading,
  SectionTitle,
  Pill,
  SectionImage,
  SectionContainer,
} from "../styles/section-styles";
import { Text } from "../styles/general-styles";

interface ProjectProps {
  projName: string;
  title: string;
  description: string;
  img: string;
  githubLink: string;
  techStack: string[];
}

const renderTechStack = (techStack: string[]) => {
  return techStack.map((el, index) => <Pill key={index}>{el}</Pill>);
};

export default function Project(projectProps: ProjectProps) {
  return (
    <SectionContainer>
      <div className="flex-grow">
        <SectionHeading>{projectProps.projName}</SectionHeading>
        {renderTechStack(projectProps.techStack)}
        <SectionTitle>{projectProps.title}</SectionTitle>
        <Text>{projectProps.description}</Text>
      </div>
      <div className="flex-shrink-0 pr-10 flex items-center justify-center">
        {projectProps.githubLink ? (
          <a href={projectProps.githubLink}>
            <SectionImage src={projectProps.img} />
          </a>
        ) : (
          <SectionImage src={projectProps.img} />
        )}
      </div>
    </SectionContainer>
  );
}
