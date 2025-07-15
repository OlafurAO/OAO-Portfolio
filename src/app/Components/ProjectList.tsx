
import { Project, ProjectView } from './Project'

interface Props {
  projects: ProjectView[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <div className='lg:mx-auto'>
      <p className='text-xl mb-10'>
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
