import { AtSign, PhoneIcon } from 'lucide-react';

interface Props {
  phone?: string;
  email?: string;
}

interface ContactIconComponentProps {
  Icon: React.ElementType
}

const ContactIconComponent = ({ Icon }: ContactIconComponentProps) => {
  return (
    <div className='mr-1 bg-cool-green rounded-full p-1.5 mb-1 opacity-90'>
      <Icon
        className='text-white'
        size={14}
      />
    </div>
  );
}

export const ReferenceContact = ({ phone, email }: Props) => {
  return (
    <div>
      {email && (
        <div className='flex mt-1'>
          <ContactIconComponent Icon={AtSign} />
          <p>{email}</p>
        </div>
      )}
      {phone && (
        <div className='flex mt-1'>
          <ContactIconComponent Icon={PhoneIcon}/>
          <p>{phone}</p>
        </div>
      )}
    </div>
  );
}
