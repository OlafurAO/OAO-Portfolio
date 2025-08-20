import { ReferenceEntry, ReferenceEntryView } from '~/Components';

interface Props {
  references: ReferenceEntryView[]
}

export const ReferenceList = ({ references }: Props) => {
  return (
    <div className='mr-auto'>
      <p className='text-xl mb-10'>
        References
      </p>
      {references.map((ref) => (
        <ReferenceEntry 
          key={ref.id}
          reference={ref}
        />
      ))}
    </div>
  );
}
