import { IconType } from 'react-icons';
import { 
  SiTypescript,
  SiRiotgames,
  SiDiscord,
  SiUnity,
  SiOpenai,
  SiReact,
  SiRemix,
  SiTailwindcss,
  SiGoogleplay,
  SiGoogleadmob,
  SiStripe,
  SiSendgrid,
  SiSentry
} from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import { AiFillSound, AiFillAndroid } from 'react-icons/ai';
import { FaMusic, FaSearch, FaBrain } from 'react-icons/fa';
import { RiJavaLine, RiVercelFill } from 'react-icons/ri';
import { LuCodeXml } from 'react-icons/lu';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandMysql, TbBrandCSharp } from 'react-icons/tb';
import { IoDocumentText } from 'react-icons/io5';
import { PiVectorTwoFill } from 'react-icons/pi';


interface Props {
  techString: string;
}

enum TechItem {
  'Typescript',
  '.NET Core',
  'React.js',
  'Remix',
  'Tailwind CSS',
  'C#',
  'Unity',
  'Discord API',
  'Riot API',
  'OpenAI API',
  'Semantic Kernel',
  'SFXR',
  'Famitracker',
  'Java',
  'Android SDK',
  'XML',
  'Google Play Console',
  'Google Admob',
  'Azure',
  'Vercel',
  'MySQL',
  'Stripe',
  'Sendgrid',
  'Sentry',
  'TinyMCE',
  'SerpAPI',
  'Qdrant'
}

const fontAwesomeIconMap: Map<TechItem, IconType> = new Map([
  [TechItem['Typescript'], SiTypescript],
  [TechItem['.NET Core'], DiDotnet],
  [TechItem['React.js'], SiReact],
  [TechItem['Remix'], SiRemix],
  [TechItem['Tailwind CSS'], SiTailwindcss],
  [TechItem['C#'], TbBrandCSharp],
  [TechItem['Discord API'],  SiDiscord],
  [TechItem['Riot API'], SiRiotgames],
  [TechItem['Unity'],  SiUnity],
  [TechItem['OpenAI API'], SiOpenai],
  [TechItem['SFXR'], AiFillSound],
  [TechItem['Famitracker'], FaMusic],
  [TechItem['Java'], RiJavaLine],
  [TechItem['Android SDK'], AiFillAndroid],
  [TechItem['Google Play Console'], SiGoogleplay],
  [TechItem['Google Admob'], SiGoogleadmob],
  [TechItem['Azure'], VscAzure],
  [TechItem['Vercel'], RiVercelFill],
  [TechItem['MySQL'], TbBrandMysql],
  [TechItem['Stripe'], SiStripe],
  [TechItem['Sendgrid'], SiSendgrid],
  [TechItem['Sentry'], SiSentry],
  [TechItem['TinyMCE'], IoDocumentText],
  [TechItem['SerpAPI'], FaSearch],
  [TechItem['Qdrant'], PiVectorTwoFill],
  [TechItem['Semantic Kernel'], FaBrain],
  [TechItem['XML'], LuCodeXml],
]);

export const TechStackItem = ({ techString }: Props) => {
  const Icon = fontAwesomeIconMap.get(TechItem[techString as unknown as keyof typeof TechItem]);

  return (
    <div className='flex items-center mr-2 mb-2 text-sm bg-cool-green text-white py-1 px-2 rounded-lg'>
      {Icon && (
        <Icon
          title={techString}
          className='w-4 h-4 mx-1'
          style={{ verticalAlign: 'middle', fontSize: 2 }}
        />
      )}
      <p className='mr-1 font-medium'>
        {techString}
      </p>
    </div>
  );
}
