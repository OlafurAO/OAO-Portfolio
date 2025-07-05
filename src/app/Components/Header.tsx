import { AtSign } from "lucide-react";

export const Header = () => {
  return (
    <div className='mb-2'>
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
  );
}
