import Image from 'next/image';
import { Inter } from 'next/font/google';
import PodcastPlayer from '../components/PodcastPlayer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const podcastUrl = 'https://sites.libsyn.com/482802'; // replace with your podcast url

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <PodcastPlayer url={podcastUrl} />
    </main>
  );
}