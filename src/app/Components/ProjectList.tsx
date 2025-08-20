import { Project, ProjectView } from '~/Components';

interface Props {
  projects: ProjectView[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <>
      <p className='text-xl mb-10'>
        Developer portfolio
      </p>
      {projects.map((proj) => (
        <Project
          key={proj.id}
          project={proj} 
        />
      ))}
    </>
  );
}
