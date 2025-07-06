interface Props {
  text: string;
}

export const ProjectSectionHeader = ({ text } : Props) => {
  return (
    <h2 className='text-xl font-medium mt-4 cool-green'>
      {text}
    </h2>
  );
}
