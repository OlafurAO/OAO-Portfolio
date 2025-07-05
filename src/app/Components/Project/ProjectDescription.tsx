import { ProjectFeatureList } from './ProjectFeatureList';
import { ProjectSectionHeader } from './ProjectSectionHeader';

export interface ProjectDescriptionSectionView {
  description: string,
  features?: string[],
  techDescription?: string,
  techBullets?: string[],
  highlights?: string []
}

interface Props {
  descriptionSection: ProjectDescriptionSectionView;
}

export const ProjectDescription = ({ descriptionSection }: Props) => {
  return (
    <>
      <ProjectSectionHeader text='Overview' />
      <p>{descriptionSection.description}</p>

      {descriptionSection.features && (
        <>
          <ProjectSectionHeader text='Features' />
          <ProjectFeatureList items={descriptionSection.features} />
        </>
      )}

      {descriptionSection.highlights && (
        <>
          <ProjectSectionHeader text='Highlights' />
          <ProjectFeatureList items={descriptionSection.highlights} />
        </>
      )}

      {(descriptionSection.techDescription || descriptionSection.techBullets) && (
        <ProjectSectionHeader text='Technical Overview' />
      )}
      {descriptionSection.techDescription && (
        <p className='mb-1'>{descriptionSection.techDescription}</p>
      )}
      {descriptionSection.techBullets && (
        <ProjectFeatureList items={descriptionSection.techBullets} />
      )}
    </>
  );
}
