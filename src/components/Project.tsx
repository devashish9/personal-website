import {
  SectionHeading,
  Pill,
  SectionImage,
  SectionContainer,
} from "../styles/section-styles";
import { RegularText } from "../styles/general-styles";
import { IStyledComponent } from "styled-components";

interface ProjectProps {
  projName: string;
  description: string[];
  img: string;
  githubLink: string;
  techStack: string[];
}

const abstractComponentMapper = (
  Comp: IStyledComponent<"web", "div", {}, never>,
  contentList: string[]
) => {
  return contentList.map((el, index) => <Comp key={index}>{el}</Comp>);
};

export default function Project(projectProps: ProjectProps) {
  return (
    <SectionContainer>
      <div className="flex-grow pr-10">
        <SectionHeading>{projectProps.projName}</SectionHeading>
        {abstractComponentMapper(Pill, projectProps.techStack)}
        {abstractComponentMapper(RegularText, projectProps.description)}
      </div>
      <div className="flex-shrink-0 pr-5 pt-5 flex items-center justify-center">
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
