import projectData from '../projects.json' assert { type: 'json' };
import { ProjectList } from '~/Components';

export default function ProjectPage() {
  return (
    <ProjectList projects={projectData} />
  );
}