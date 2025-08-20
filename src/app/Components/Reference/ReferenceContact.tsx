import { AtSign, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface Props {
  linkedIn?: string;
  email?: string;
}

interface ContactIconComponentProps {
  Icon: React.ElementType,
  url: string;
  urlText: string;
}

const ContactIconComponent = ({ Icon, url, urlText }: ContactIconComponentProps) => {
  return (
    <div className='flex mt-1'>
      <div className='mb-1 mr-1 bg-cool-green rounded-full p-1.5 opacity-90'>
        <Icon
          className='text-white'
          size={14}
        />
      </div>
      <Link
        className='cool-blue hover:underline'
        href={url}
        target='_blank'
      >
        <p>{urlText}</p>
      </Link>
    </div>
  );
}

export const ReferenceContact = ({ linkedIn, email }: Props) => {
  return (
    <div>
      {email && (
        <ContactIconComponent 
          Icon={AtSign}
          urlText={email}
          url={`mailto:${email}`}
        />
      )}
      {linkedIn && (
        <ContactIconComponent 
          url={linkedIn}
          urlText='LinkedIn'
          Icon={Linkedin}
        />
      )}
    </div>
  );
}
