
import { Project } from './Project'

interface Props {
  projects: ProjectView[];
}

export interface ProjectView {
  id: number,
  titleSection: ProjectTitleSection,
  descriptionSection: ProjectDescriptionSection,
  techStack: string[],
  images: ProjectScreenshot[]
}

export interface ProjectTitleSection {
  title: string,
  duration: ProjectDuration,
  url: string,
  urlDescription: string,
}

export interface ProjectDescriptionSection {
  description: string,
  features?: string[],
  techDescription?: string,
  techBullets?: string[],
  highlights?: string []
}

export interface ProjectScreenshot {
  caption?: string,
  path: string
}

interface ProjectDuration {
  yearFrom: number
  yearTo?: number,
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
