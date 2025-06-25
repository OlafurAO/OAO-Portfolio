import Link from 'next/link';
import Image from 'next/image';
import { ProjectView, ProjectTitleSection, ProjectDescriptionSection, ProjectScreenshot } from './ProjectList';

interface Props {
  project: ProjectView
}

interface TitleSectionProps {
  titleSection: ProjectTitleSection,
}

interface DescriptionSectionProps {
  descriptionSection: ProjectDescriptionSection
}

interface TechStackSectionProps {
  techStackSection: string[]
}

interface ScreenshotSectionProps {
  images: ProjectScreenshot[]
}

const SectionHeader = ({ text } : { text: string }) => {
  return (
    <h2 className='text-xl font-medium mt-4'>
      {text}
    </h2>
  );
}

const ListComponent = ({ items }: { items: string[] }) => {
  return (
    <ul className='list-[circle]'>
      {items.map((item, index) => (
        <li 
          key={index}
          className='ml-10'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

const TitleSectionComponent = ({ titleSection }: TitleSectionProps) => {
  return (
    <>
    <h2 className='text-xl font-bold'>
      {titleSection.title}
    </h2>
    <p>
      <strong>Project Duration: </strong>
      {titleSection.duration.yearFrom} - {titleSection.duration.yearTo}
    </p>
    <Link
      className='text-blue-500'
      href={titleSection.url}
    >
      {titleSection.urlDescription}
    </Link>
    </>
  );
}

const DescriptionSectionComponent = ({ descriptionSection }: DescriptionSectionProps) => {
  return (
    <>
      <SectionHeader text='Overview' />
      <p>{descriptionSection.description}</p>

      {descriptionSection.features && (
        <>
          <SectionHeader text='Features' />
          <ListComponent items={descriptionSection.features} />
        </>
      )}

      {descriptionSection.highlights && (
        <>
          <SectionHeader text='Highlights' />
          <ListComponent items={descriptionSection.highlights} />
        </>
      )}

      {(descriptionSection.techDescription || descriptionSection.techBullets) && (
        <SectionHeader text='Technical Overview' />
      )}
      {descriptionSection.techDescription && (
        <p className='mb-1'>{descriptionSection.techDescription}</p>
      )}
      {descriptionSection.techBullets && (
        <ListComponent items={descriptionSection.techBullets} />
      )}
    </>
  );
}

const TechStackComponent = ({ techStackSection }: TechStackSectionProps) => {
  return (
    <div className='bg-gray-100 py-4 px-5 rounded-2xl text-sm mt-6'>
      <strong>Tech Stack:</strong>
      <div className='flex'>
        {techStackSection.map((tech, index) => (
          <p 
            key={index}
            className='mr-1'
          >
            {tech}{index < techStackSection.length - 1 ? ',' : ''}
          </p>
        ))}
      </div>
    </div>
  );
}

const ScreenshotSectionComponent = ({ images }: ScreenshotSectionProps) => {
  return (
    <>
      {images.map((image, index) => (
        <div 
          key={index}
          className="duration-700 ease-in-out" 
          data-carousel-item
        >
          <Image
            src={image.path}
            alt={image.caption || ''}
            width={500}
            height={500}
          />
        </div>
      ))}
    </>
  );
}

export const Project = ({ project } : Props) => {
  return (
    <div className='mb-3'>
      <TitleSectionComponent 
        titleSection={project.titleSection} 
      />
      <DescriptionSectionComponent 
        descriptionSection={project.descriptionSection} 
      />
      <TechStackComponent 
        techStackSection={project.techStack}
      />
      <ScreenshotSectionComponent 
        images={project.images}
      />
    </div>
  );
}
