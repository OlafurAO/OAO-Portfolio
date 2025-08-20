import { CVEntry, CVEntryView } from '~/Components';

interface Props {
  cvData: CVEntryView[]
}

export const CVList = ({ cvData }: Props) => {
  return (
    <>
      <p className='text-xl mb-10'>
        Curriculum Vitae
      </p>
      {cvData.map((entry) => (
        <CVEntry
          key={entry.id}
          cvEntry={entry} 
        />
      ))}
    </>
  );
}
