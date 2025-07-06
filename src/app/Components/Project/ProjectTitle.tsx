import Link from 'next/link';

export interface ProjectTitleSectionView {
  title: string,
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

export const ProjectTitle = ({ titleSection }: Props) => {
  return (
    <>
    <h2 className='text-xl font-bold mt-4 cool-green'>
      {titleSection.title}
    </h2>
    <p>
      <strong className='cool-green'>
        Project Duration:{' '}
        {titleSection.duration.yearFrom} - {titleSection.duration.yearTo}
      </strong>
    </p>
    <Link
      className='font-bold cool-blue hover:underline'
      href={titleSection.url}
      target='_blank'
    >
      {titleSection.urlDescription}
    </Link>
    </>
  );
}
