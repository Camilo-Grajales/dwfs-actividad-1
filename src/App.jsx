// Packages
import React from 'react';

// App
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import AppRouter from 'router';

// Styles
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <main className='app-main'>
        <AppRouter />
      </main>
      <Footer />
    </>
  )
}

export default App
