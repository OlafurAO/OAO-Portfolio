'use client';

import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ProjectSectionHeader } from './ProjectSectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectScreenshotView {
  caption?: string,
  path: string
}

interface Props {
  images: ProjectScreenshotView[];
}

export const ProjectScreenshots = ({ images }: Props) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1 }
  });

  return (
    <>
      <ProjectSectionHeader text='Screenshots' />
      <div className='relative w-full max-w-2xl mx-auto overflow-hidden mt-4'>
        <div 
          ref={sliderRef}
          className='keen-slider rounded-lg aspect-video'
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="keen-slider__slide relative h-full w-full" 
              data-carousel-item
            >
              <Image
                src={image.path}
                alt={image.caption || ''}
                fill
                className='object-cover'
                sizes='(max-width: 768px)'
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => slider.current?.prev()}
          className='cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className='cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
