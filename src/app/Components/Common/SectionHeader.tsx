interface Props {
  text: string;
}

export const SectionHeader = ({ text } : Props) => {
  return (
    <h2 className='lg:text-xl font-medium mt-4 cool-green'>
      {text}
    </h2>
  );
}
