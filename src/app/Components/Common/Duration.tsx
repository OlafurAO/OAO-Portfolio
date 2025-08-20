interface Props {
  text?: string;
  duration: DurationView;
}

export interface DurationView {
  yearFrom: number
  yearTo?: number,
}

export const Duration = ({ text, duration }: Props) => {
  return (
    <p>
      <strong className='cool-green'>
        {text ? `${text}: ` : ''}
        {duration.yearFrom} - {duration.yearTo || 'Present'}
      </strong>
    </p>
  );
}
