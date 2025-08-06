import { ProjectSectionHeader } from '../ProjectSectionHeader';
import { TechStackItem } from './TechStackItem';

interface TechStackSectionProps {
  techStackSection: string[]
}

export const ProjectTechStack = ({ techStackSection }: TechStackSectionProps) => {
  return (
    <>
      <ProjectSectionHeader 
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
