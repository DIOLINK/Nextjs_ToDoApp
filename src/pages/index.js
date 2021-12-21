import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="../public/favicon.ico" />
        <title>ToDo App</title>
      </Head>

      <main>
        <h1>ToDo-app</h1>

        <div></div>
      </main>

      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
}
