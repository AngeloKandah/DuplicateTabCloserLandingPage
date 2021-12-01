import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Home,
  MoveTabs,
  Windows,
  TabGroups,
  Exclusions,
  Logs,
} from './components/pages';
import { Navbar } from './components/navbar';

function Page({ CurPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <CurPage />;
}

function App() {
  const pages = [Home, MoveTabs, Windows, TabGroups, Exclusions, Logs];
  const [curActivePage, setActivePage] = useState(0);
  return (
    <div>
      <header className='flex justify-center text-7xl text-white py-6 bg-navGray'>
        <h1>DuplicateTabCloser</h1>
      </header>
      <Navbar
        pages={pages}
        curPage={curActivePage}
        setActivePage={setActivePage}
      />
      <div className='px-64 py-5'>
        <Page CurPage={pages[curActivePage]} />
      </div>
    </div>
  );
}

export default App;
