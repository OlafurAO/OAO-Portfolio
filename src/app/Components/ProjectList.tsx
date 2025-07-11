
import { Project, ProjectView } from './Project'

interface Props {
  projects: ProjectView[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <div className='mx-auto'>
      <p className='text-lg'>
        Developer portfolio
      </p>
      {projects.map((proj) => (
        <Project
          key={proj.id}
          project={proj} 
        />
      ))}
    </div>
  );
}
