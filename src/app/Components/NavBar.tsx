'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  { name: 'Home', url: '' },
  { name: 'Projects', url: 'projects'},
  { name: 'CV', url: 'cv'},
  { name: 'References', url: 'refs'}
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className='hidden lg:block fixed left-10 top-10'>
      {navbarItems.map((item) => (
        <Link 
          key={item.name}
          href={`/${item.url}`}
        >
          <p className={`my-7 font-medium text-gray-400 hover:underline cursor-pointer ${pathname.replaceAll('/', '') === item.url ? 'cool-green font-bold' : ''}`}>
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
