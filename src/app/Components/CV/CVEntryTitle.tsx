import { Duration, DurationView } from '~/Components';

interface Props {
  employer: string;
  duration: DurationView
}

export const CVEntryTitle = ({ employer, duration }: Props) => {
  return (
    <>
      <h2 className='text-base lg:text-2xl font-bold cool-green'>
        {employer}
      </h2>
      <Duration 
        text='Duration'
        duration={duration}
      />
    </>
  );
}
