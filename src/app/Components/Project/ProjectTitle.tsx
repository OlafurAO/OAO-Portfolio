import Link from 'next/link';
import Image from 'next/image';
import { Duration, DurationView } from '~/Components';

export interface ProjectTitleSectionView {
  title: string,
  shortTitle: string,
  logoPath: string;
  logoDimensions?: LogoDimensions;
  duration: DurationView,
  url: string,
  urlDescription: string,
}

interface LogoDimensions {
  width: number;
  height: number;
}

interface Props {
  titleSection: ProjectTitleSectionView,
}

interface ProjectLogoComponentProps {
  logoPath: string;
  logoDimensions?: LogoDimensions;
}

const ProjectLogoComponent = ({ logoPath, logoDimensions }: ProjectLogoComponentProps) => {
  return (
    <Image
      width={logoDimensions?.width || 0}
      height={logoDimensions?.height || 0}
      className={`rounded-xl ${logoDimensions ? '' : 'w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]'} my-auto`}
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
      <Duration 
        text='Project Duration'
        duration={titleSection.duration}
      />
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
      <ProjectLogoComponent 
        logoPath={titleSection.logoPath}
        logoDimensions={titleSection.logoDimensions}
      />
      <TitleComponent titleSection={titleSection}/>
    </div>
  );
}
