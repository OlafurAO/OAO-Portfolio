import React from 'react';
import Image from 'next/image';
import { AtSign, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface Props {
  info: InfoView;
}

interface InfoView {
  title: string;
  description: string;
  description2: string;
}

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

export const Home = ({ info }: Props) => {
  return (
    <div className='lg:pt-5 lg:px-6 lg:flex'>
      <div className='mb-5'>
        <Image
          src='/images/oli/oli.jpg'
          alt='image of a handsome boy'
          className='rounded-md mx-auto lg:mx-0'
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
      <div>
        <p className='text-lg font-bold cool-green'>
          {info.title}
        </p>
        <p>{info.description}</p>
        <p className='my-2'>
          {info.description2}
        </p>
        <Link 
          href='/projects'
          className='cool-blue hover:underline font-medium'
        >
          <p>Check it out!</p>
        </Link>
      </div>
    </div>
  );
}
