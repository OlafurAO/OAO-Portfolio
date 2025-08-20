import { 
  ProjectDescription, 
  ProjectDescriptionSectionView, 
  ProjectScreenshotView, 
  ProjectScreenshots, 
  TechStack, 
  ProjectTitle, 
  ProjectTitleSectionView
} from '~/Components';

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
      <TechStack
        techStackSection={project.techStack}
      />
      <ProjectScreenshots
        images={project.images}
      />
    </div>
  );
}
