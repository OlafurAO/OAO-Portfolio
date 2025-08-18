'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  'Home',
  'Projects',
  'CV',
  'References'
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className='hidden lg:block fixed left-10 top-10'>
      {navbarItems.map((item) => (
        <Link 
          key={item}
          href={`/${item.toLowerCase()}`}
        >
          <p className={`my-7 font-medium text-gray-400 hover:underline cursor-pointer ${pathname.replaceAll('/', '') === item.toLowerCase() ? 'cool-green font-bold' : ''}`}>
            {item}
          </p>
        </Link>
      ))}
    </div>
  );
}
