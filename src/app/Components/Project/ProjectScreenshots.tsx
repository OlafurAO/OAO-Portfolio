'use client';

import Image from 'next/image';
import { Ref, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '~/Components';
import { ghPagesLoader } from '~/lib/path';

export interface ProjectScreenshotView {
  caption?: string,
  path: string
}

interface Props {
  images: ProjectScreenshotView[];
}

interface CarouselComponentProps {
  images: ProjectScreenshotView[];
  sliderRef: Ref<HTMLDivElement>;
  currentImgIndex: number;
}

interface ButtonComponentProps {
  direction: Direction;
  onClick: () => void;
}

interface CarouselDotsComponentProps {
  imageCount: number;
  currentImgIndex: number;
  onClickDot: (index: number) => void;
}

enum Direction {
  LEFT,
  RIGHT
}

const CarouselComponent = ({ images, sliderRef, currentImgIndex }: CarouselComponentProps) => {
  const [zoomedImgSrc, setZoomedImgSrc] = useState<ProjectScreenshotView>();

  const onClickImg = () => {
    const currImg = images.at(currentImgIndex);
    setZoomedImgSrc(currImg);
  }

  const onClickOutsideImg = () => {
    if (zoomedImgSrc)
      setZoomedImgSrc(undefined);
  }

  return (
    <>
      <div 
        className='cursor-zoom-in w-full max-w-2xl mx-auto overflow-hidden mt-4'
        onClick={onClickImg}
      >
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
                loader={ghPagesLoader}
                className={`object-contain ${currentImgIndex !== index ? 'hidden' : 'block'}`}
                sizes='(max-width: 768px)'
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
      {zoomedImgSrc && (
        <div
          className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center cursor-zoom-out"
          onClick={onClickOutsideImg}
        >
          <Image
            src={zoomedImgSrc.path}
            loader={ghPagesLoader}
            alt={zoomedImgSrc.caption || ''}
            width={1000}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}
    </>
  );
}

const ButtonComponent = ({ direction, onClick } : ButtonComponentProps) => {
  return (
    <button
      onClick={onClick}
      className={`z-50 absolute top-1/2 ${direction === Direction.RIGHT ? 'right-[-50px]' : 'left-[-50px]'} overflow-hidden bg-cool-green cursor-pointer p-2 rounded-full shadow opacity-60 hover:opacity-100`}
    >
      {direction === Direction.LEFT ? (
        <ChevronLeft
          className='text-white'
          size={20} 
        />
      ) : (
        <ChevronRight
          className='text-white'
          size={20}
        />
      )}
    </button>
  );
}

const CarouselDotsComponent = ({ imageCount, currentImgIndex, onClickDot }: CarouselDotsComponentProps) => {
  return (
    <div className='flex justify-center mt-5'>
      {Array.from({ length: imageCount }, (_, i) => i).map((_, index) => (
        <div
          key={index}
          onClick={() => onClickDot(index)}
          className={`cursor-pointer transition ease-in-out duration-350 w-3 h-3 rounded-lg ${index === currentImgIndex ? 'bg-cool-green' : 'bg-gray-200'} mx-1`}
        />
      ))}
    </div>
  );
}

export const ProjectScreenshots = ({ images }: Props) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentImgIndex(s.track.details.rel);
    }
  });

  const onClickNext = () => {
    if (currentImgIndex === images.length - 1 || !slider.current) return;
    slider.current.next();
    setCurrentImgIndex(currentImgIndex + 1);
  }

  const onClickPrev = () => {
    if (currentImgIndex <= 0 || !slider.current) return;
    slider.current.prev();
    setCurrentImgIndex(currentImgIndex - 1);
  }

  const onClickDot = (index: number) => {
    slider.current?.moveToIdx(index);
    setCurrentImgIndex(index);
  }

  return (
    <>
      <SectionHeader text='Screenshots' />
      <div className='flex relative'>
        {currentImgIndex > 0 && (
          <ButtonComponent
            direction={Direction.LEFT}
            onClick={onClickPrev}
          />
        )}
        <CarouselComponent
          images={images}
          sliderRef={sliderRef}
          currentImgIndex={currentImgIndex}
        />
        {currentImgIndex < images.length - 1 && (
          <ButtonComponent
            direction={Direction.RIGHT}
            onClick={onClickNext}
          />
        )}
      </div>
      <CarouselDotsComponent
        imageCount={images.length}
        currentImgIndex={currentImgIndex}
        onClickDot={onClickDot}
      />
    </>
  );
}
