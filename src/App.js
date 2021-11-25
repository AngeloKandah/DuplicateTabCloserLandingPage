import React, { useState } from 'react';
import './App.css';

function Home() {
  return <>Home filler</>;
}

function MoveTabs() {
  return <>MoveTabs filler</>;
}

function Windows() {
  return <>Windows Filler</>;
}

function TabGroups() {
  return <>TabGroups filler</>;
}

function Exclusions() {
  return <>Exclusions Filler</>;
}

function Logs() {
  return <>Logs Filler</>;
}

function Page({ curPage }) {
  return <>{curPage}</>;
}

function PageContainer() {
  const navTitles = [
    'Home',
    'MoveTabs',
    'Windows',
    'TabGroups',
    'Exclusions',
    'Logs',
  ];
  const pages = [
    <Home />,
    <MoveTabs />,
    <Windows />,
    <TabGroups />,
    <Exclusions />,
    <Logs />,
  ];
  const [curActivePage, setActivePage] = useState(pages[0]);
  return (
    <div>
      <header className='App-header'>
        <h1>DuplicateTabCloser</h1>
      </header>
      <Navbar titles={navTitles} setActivePage={setActivePage} pages={pages} />
      <Page curPage={curActivePage} />
    </div>
  );
}

function Navbar({ titles, setActivePage, pages }) {
  return (
    <>
      <ul className='nav'>
        {titles.map((title, index) => (
          <li key={title}>
            <button
              className='link-button'
              onClick={() => setActivePage(pages[index])}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <PageContainer />
    </div>
  );
}

export default App;
