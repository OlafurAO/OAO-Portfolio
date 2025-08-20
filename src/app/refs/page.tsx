import referenceData from '../refs.json' assert { type: 'json' };
import { ReferenceList } from '~/Components'; 

export default function ReferencesPage() {
  return (
    <ReferenceList references={referenceData}/>
  );
}
