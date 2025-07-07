import { ProjectDescription, ProjectDescriptionSectionView } from './ProjectDescription';
import { ProjectScreenshotView, ProjectScreenshots } from './ProjectScreenshots';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectTitle, ProjectTitleSectionView } from './ProjectTitle';

interface Props {
  project: ProjectView;
}

export interface ProjectView {
  id: number,
  titleSection: ProjectTitleSectionView,
  descriptionSection: ProjectDescriptionSectionView,
  techStack: string[],
  images: ProjectScreenshotView[]
}

export const Project = ({ project } : Props) => {
  return (
    <div className='mb-20'>
      <ProjectTitle
        titleSection={project.titleSection} 
      />
      <ProjectDescription
        descriptionSection={project.descriptionSection} 
      />
      <ProjectTechStack
        techStackSection={project.techStack}
      />
      <ProjectScreenshots
        images={project.images}
      />
    </div>
  );
}
