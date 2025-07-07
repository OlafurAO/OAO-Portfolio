import data from './data.json' assert { type: 'json' };
import { ProjectList, Header } from './Components';

export default function Home() {
  return (
    <div className='items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='lg:flex items-center sm:items-start'>
        <Header />
        <ProjectList projects={data} />
      </main>
    </div>
  );
}
