import { SectionHeader, TechStackItem } from '~/Components';

interface TechStackSectionProps {
  techStackSection: string[]
}

export const TechStack = ({ techStackSection }: TechStackSectionProps) => {
  return (
    <>
      <SectionHeader 
        text='Tech Stack'
      />
      <div className='bg-gray-100 pt-4 pb-2 px-5 rounded-2xl text-sm mt-1'>
        <div className='flex flex-wrap'>
          {techStackSection.map((tech, index) => (
            <TechStackItem 
              key={index}
              techString={tech}
            />
          ))}
        </div>
      </div>
    </>
  );
}
