import { 
  CVEntryTitle, 
  CVPosition, 
  CVPositionView, 
  DurationView, 
  TechStack 
} from '~/Components';

interface Props {
  cvEntry: CVEntryView;
}

export interface CVEntryView {
  id: number,
  employer: string;
  duration: DurationView;
  positions: CVPositionView[];
  techStack: string[];
}

export const CVEntry = ({ cvEntry }: Props) => {
  return (
    <div className='mb-20'>
      <CVEntryTitle
        employer={cvEntry.employer}
        duration={cvEntry.duration}
      />
      <div className='ml-5'>
        {cvEntry.positions.map((position, index) => (
          <CVPosition
            key={index}
            position={position}
          />
        ))}
      </div>
      <TechStack
        techStackSection={cvEntry.techStack}
      />
    </div>
  );
}
