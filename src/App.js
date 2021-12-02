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
import { Header } from './components/header';

function Page({ CurPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <CurPage />;
}

function App() {
  const pages = [Home, MoveTabs, Windows, TabGroups, Exclusions, Logs];
  const [curActivePage, setActivePage] = useState(0);
  const navbarContents = {
    pages,
    curPage: { curActivePage },
    setActivePage,
  };
  return (
    <div>
      <Header title='DuplicateTabCloser' navbarContents={navbarContents} />
      <div id='pageContainer' className='px-64 py-5'>
        <Page CurPage={pages[curActivePage]} />
      </div>
    </div>
  );
}

export default App;
