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
    <h2 className='text-xl font-bold mt-4 text-[#044B7F]'>
      {titleSection.title}
    </h2>
    <p>
      <strong>Project Duration: </strong>
      {titleSection.duration.yearFrom} - {titleSection.duration.yearTo}
    </p>
    <Link
      className='cool-green font-bold hover:underline'
      href={titleSection.url}
    >
      {titleSection.urlDescription}
    </Link>
    </>
  );
}
