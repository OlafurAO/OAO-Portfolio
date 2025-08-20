import { BulletList, SectionHeader } from '~/Components';

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
    <div className='text-sm lg:text-base'>
      <SectionHeader text='Overview' />
      <p>{descriptionSection.description}</p>

      {descriptionSection.features && (
        <>
          <SectionHeader text='Features' />
          <BulletList items={descriptionSection.features} />
        </>
      )}

      {descriptionSection.highlights && (
        <>
          <SectionHeader text='Highlights' />
          <BulletList items={descriptionSection.highlights} />
        </>
      )}

      {(descriptionSection.techDescription || descriptionSection.techBullets) && (
        <SectionHeader text='Technical Overview' />
      )}
      {descriptionSection.techDescription && (
        <p className='mb-1'>{descriptionSection.techDescription}</p>
      )}
      {descriptionSection.techBullets && (
        <BulletList items={descriptionSection.techBullets} />
      )}
    </div>
  );
}
