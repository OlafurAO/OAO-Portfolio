
import { Project, ProjectView } from './Project'

interface Props {
  projects: ProjectView[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    projects.map((proj) => (
      <Project
        key={proj.id}
        project={proj} 
      />
    ))
  );
}
