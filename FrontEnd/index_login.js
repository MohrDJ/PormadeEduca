import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <h1>Página Inicial</h1>
      <Link href="/login">Acess</Link>
    </div>
    )}