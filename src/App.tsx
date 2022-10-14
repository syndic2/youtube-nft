import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoute from './AppRoute';

const App: React.FC= () => {
  return (
    <>
      <Header />
      <AppRoute />
      <Footer />
    </>
  );
};

export default App;
