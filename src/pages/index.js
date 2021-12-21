import Head from 'next/head';
import { useState } from 'react';

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
        <h1>ToDo-App</h1>
        <div className="auth__box-container">
          {toggle ? (
            <Login handleToggle={handleToggle} />
          ) : (
            <Register handleToggle={handleToggle} />
          )}
        </div>
      </main>

      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
}
