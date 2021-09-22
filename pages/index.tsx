import Head from 'next/head';
import AutoAdvice from '../components/AutoAdvice';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Auto Advice</title>
      </Head>
      <main>
        <AutoAdvice></AutoAdvice>
      </main>
    </div>
  );
}
