import { Home } from '~/Components';
import infoData from './info.json' assert { type: 'json' };

export default function HomePage() {
  return (
    <Home info={infoData}/>
  );
}
