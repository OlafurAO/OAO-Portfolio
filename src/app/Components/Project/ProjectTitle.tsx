import Link from 'next/link';
import Image from 'next/image';

export interface ProjectTitleSectionView {
  title: string,
  logoPath: string;
  duration: ProjectDuration,
  url: string,
  urlDescription: string,
}

interface ProjectDuration {
  yearFrom: number
  yearTo?: number,
}

interface Props {
  titleSection: ProjectTitleSectionView,
}

interface ProjectLogoComponentProps {
  logoPath: string;
}

const ProjectLogoComponent = ({ logoPath }: ProjectLogoComponentProps) => {
  return (
    <Image
      width={0}
      height={0}
      className='rounded-xl w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] my-auto'
      src={logoPath}
      alt='project logo'
    />
  )
}

const TitleComponent = ({ titleSection }: Props) => {
  return (
    <div className='ml-4 lg:mt-2 text-sm lg:text-base'>
      <h2 className='text-base lg:text-xl font-bold cool-green'>
        {titleSection.title}
      </h2>
      <p>
        <strong className='cool-green'>
          Project Duration:{' '}
          {titleSection.duration.yearFrom} - {titleSection.duration.yearTo || 'Present'}
        </strong>
      </p>
      <Link
        className='font-medium cool-blue hover:underline'
        href={titleSection.url}
        target='_blank'
      >
        <p>{titleSection.urlDescription}</p>
      </Link>
    </div>
  );
}

export const ProjectTitle = ({ titleSection }: Props) => {
  return (
    <div className='flex'>
      <ProjectLogoComponent logoPath={titleSection.logoPath} />
      <TitleComponent titleSection={titleSection}/>
    </div>
  );
}
