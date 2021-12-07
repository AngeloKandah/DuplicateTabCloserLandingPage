import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const routes = [
    { title: 'Home', Component: Home },
    { title: 'MoveTabs', Component: MoveTabs },
    { title: 'Windows', Component: Windows },
    { title: 'TabGroups', Component: TabGroups },
    { title: 'Exclusions', Component: Exclusions },
    { title: 'Logs', Component: Logs },
  ];

  function assignRoutes(routes) {
    return routes.map(({ title, Component }, index) => (
      <Route path={title} element={<Component />} key={index} />
    ));
  }

  return (
    <div>
      <Header headerTitle='DuplicateTabCloser' navbarRoutes={routes} />
      <div id='pageContainer' className='px-64 py-5'>
        <Routes>{assignRoutes(routes)}</Routes>
      </div>
    </div>
  );
}

export default App;
