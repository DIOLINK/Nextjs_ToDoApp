import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { login } from '../actions/auth';

import { ToDoApp } from '../components/ToDoApp';
import { Auth } from '../components/auth';
import { startLoadingToDos } from '../actions/todos';

export default function Home() {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(startLoadingToDos(user.uid));
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="../public/favicon.ico" />
        <title>ToDo App</title>
      </Head>

      <main>
        <h1 className="mt-1">ToDo-App</h1>
        {isLoggedIn ? <ToDoApp /> : <Auth />}
      </main>
    </div>
  );
}
