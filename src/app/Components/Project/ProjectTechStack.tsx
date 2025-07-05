interface TechStackSectionProps {
  techStackSection: string[]
}

export const ProjectTechStack = ({ techStackSection }: TechStackSectionProps) => {
  return (
    <div className='bg-gray-100 py-4 px-5 rounded-2xl text-sm mt-6'>
      <strong>Tech Stack:</strong>
      <div className='flex'>
        {techStackSection.map((tech, index) => (
          <p 
            key={index}
            className='mr-1'
          >
            {tech}{index < techStackSection.length - 1 ? ',' : ''}
          </p>
        ))}
      </div>
    </div>
  );
}
