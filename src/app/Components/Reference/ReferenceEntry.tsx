import Link from 'next/link';
import { ReferenceContact, ReferenceTitle } from '~/Components';

interface Props {
  reference: ReferenceEntryView;
}

export interface ReferenceEntryView {
  id: number;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  refLetterUrl?: string;
}

export const ReferenceEntry = ({ reference }: Props) => {
  return (
    <div className='mb-10'>
      <ReferenceTitle 
        name={reference.name}
        title={reference.title}
      />
      <ReferenceContact 
        phone={reference.phone}
        email={reference.email}
      />
      {reference.refLetterUrl && (
        <Link
          className='cool-blue'
          href={reference.refLetterUrl}
          target='_blank'
        >
          Reference Letter (PDF)
        </Link>
      )}
    </div>
  );
}
