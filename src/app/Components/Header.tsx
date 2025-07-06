import { AtSign } from 'lucide-react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='mb-2 flex w-full'>
      <div>
        <h1 className='text-2xl'>
          Ólafur Ammendrup Ólafsson
        </h1>
        <a href='mailto:oli.ammendrup@gmail.com'>
          <div className='flex cool-green'>
            <AtSign
              className='mt-[1px] mr-1'
              width={20} 
            />
            <p className='font-bold hover:underline'>
              oli.ammendrup@gmail.com
            </p>
          </div>
        </a>
        <p>Developer portfolio</p>
      </div>
      <Image
        src='/images/img.webp'
        alt='Image of a handsome boy'
        className='ml-auto rounded-md'
        width='200'
        height='100'
      />
    </div>
  );
}
