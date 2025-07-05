interface Props {
  items: string[];
}

export const ProjectFeatureList = ({ items }: Props) => {
  return (
    <ul className='list-[circle] marker:text-[#107E7D]'>
      {items.map((item, index) => (
        <li 
          key={index}
          className='ml-10'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
