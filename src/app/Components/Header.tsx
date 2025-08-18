import React from 'react';
import Image from 'next/image';
import { AtSign, Github, Linkedin } from 'lucide-react';

interface UrlProps {
  urlText: string;
  href: string;
  Icon: React.ElementType;
  skipMargin?: boolean;
  float?: boolean;
}

const urls: UrlProps[] = [
  {
    Icon: AtSign,
    href: 'mailto:oli.ammendrup@gmail.com',
    urlText: 'oli.ammendrup@gmail.com'
  },
  {
    Icon: Github,
    href: 'https://github.com/OlafurAO',
    urlText: 'Github',
    float: true
  },
  {
    Icon: Linkedin,
    urlText: 'LinkedIn',
    href: 'https://se.linkedin.com/in/oliamm',
    skipMargin: true,
  }
];

const UrlComponent = ({ 
  urlText,
  href,
  Icon,
  skipMargin,
  float,
} : UrlProps) => {
  return (
    <a
      className={float ? 'float-left mr-2' : ''}
      href={href}
    >
      <div className='flex cool-green'>
        <Icon
          className={`${skipMargin ? 'mt-[-1px]' : 'mt-[1px]'} mr-1`}
          width={20} 
        />
        <p className='font-bold hover:underline'>
          {urlText}
        </p>
      </div>
    </a>
  );
}

export const Header = () => {
  return (
    <div className='lg:fixed z-100 lg:right-0 lg:pt-5 lg:top-0 lg:px-6 lg:h-full'>
      <div className='mb-2 w-full'>
        <Image
          src='/images/oli/oli.jpg'
          alt='image of a handsome boy'
          className='rounded-md mx-auto'
          width='200'
          height='100'
        />
        <div>
          <h1 className='text-lg lg:text-2xl mt-2'>
            Ólafur Ammendrup
          </h1>
          {urls.map((url, index) => (
            <UrlComponent
              key={index}
              Icon={url.Icon}
              urlText={url.urlText}
              href={url.href}
              skipMargin={url.skipMargin}
              float={url.float}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
