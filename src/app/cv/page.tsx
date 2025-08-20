import cvData from '../cv.json' assert { type: 'json' };
import { CVList } from '~/Components';

export default function CVPage() {
  return (
    <CVList cvData={cvData}/>
  );
}
