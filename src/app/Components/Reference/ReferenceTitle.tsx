interface Props {
  name: string;
  title: string;
}

export const ReferenceTitle = ({ name, title }: Props) => {
  return (
    <div className='cool-green'>
      <p className='font-bold'>
        {name}
      </p>
      <p>
        {title}
      </p>
    </div>
  );
}
