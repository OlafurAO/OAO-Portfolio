interface Props {
  text: string;
}

export const ProjectSectionHeader = ({ text } : Props) => {
  return (
    <h2 className='text-xl font-medium mt-4 text-[#044B7F]'>
      {text}
    </h2>
  );
}
