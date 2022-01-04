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
    { title: 'Home', page: Home },
    { title: 'MoveTabs', page: MoveTabs },
    { title: 'Windows', page: Windows },
    { title: 'TabGroups', page: TabGroups },
    { title: 'Exclusions', page: Exclusions },
    { title: 'Logs', page: Logs },
  ];
  return (
    <div>
      <Header title='DuplicateTabCloser' navbarRoutes={routes} />
      <div id='pageContainer' className='px-64'>
        <Home/>
        <MoveTabs/>
        <Windows/>
        <TabGroups/>
        <Exclusions/>
        <Logs/>
      </div>
    </div>
  );
}

export default App;
