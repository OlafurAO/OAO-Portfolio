import { 
  BulletList, 
  CVPositionTitle, 
  DurationView, 
  SectionHeader 
} from '~/Components';

interface Props {
  position: CVPositionView;
}

export interface CVPositionView {
  title: string;
  duration: DurationView;
  description: string;
  highlights: string[];
}

export const CVPosition = ({ position }: Props) => {
  return (
    <>
      <CVPositionTitle 
        title={position.title}
        duration={position.duration}
      />
      <div className='lg:ml-5 mt-2'>
        <p>{position.description}</p>
        <SectionHeader text='Highlights' />
        <BulletList 
          items={position.highlights}
        />
      </div>
    </>
  );
}
