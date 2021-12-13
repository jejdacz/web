import * as S from "./styles";
import { CardRow } from "components/layout";
import { PortalProject } from "lib/portal-types";
import strings from "content/strings.json";

export type Props = {
  projects: PortalProject[];
};

const Projects: React.FC<Props> = ({ projects }) => {
  const msg = strings.components.sections.projects;
  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>{msg.ourProjects}</S.Title>
        <S.ShowAll to={"/projekty"}>{msg.showAll}</S.ShowAll>
      </S.TitleRow>
      <S.CardWrapper>
        <CardRow>
          {projects.map((project, index) => (
            <S.ProjectCard
              key={index}
              title={project.name}
              description={project.tagline}
              cover={project.coverImageUrl}
              logo={project.logoUrl}
              link={`/projekty/${project.slug}`}
              tags={[] /* TBD */}
            />
          ))}
        </CardRow>
      </S.CardWrapper>
    </S.Container>
  );
};

export default Projects;