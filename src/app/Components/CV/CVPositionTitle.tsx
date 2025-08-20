import { Duration, DurationView } from '~/Components';

interface Props {
  title: string;
  duration: DurationView;
}

export const CVPositionTitle = ({ title, duration }: Props) => {
  return (
    <>
      <div className='flex mt-4'>
        <div className='w-2 h-2 mt-5 ml-[-8px] bg-cool-green rounded-full'/>
        <h3 className='text-base lg:text-xl ml-4 font-medium text-gray-400'>
          {title}
        </h3>
      </div>
      <div className='ml-4.5'>
        <Duration duration={duration} />
      </div>
    </>
  );
}
