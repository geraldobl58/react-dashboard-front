import React from 'react';

import Loading from './components/Loading';
import Messages from './components/Messages';
import Modal from './components/Modal';

import { useLoading } from './hooks/Loading';

import Routes from './routes';

const App = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <Routes />
      <Loading isLoading={isLoading} />
      <Messages />
      <Modal />
    </>
  );
};

export default App;
