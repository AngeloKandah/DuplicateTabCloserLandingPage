import './App.css';
import { v4 as uuidv4 } from 'uuid';
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
      <div id='pageContainer' className='mx-container'>
        {routes.map(({ page: Page }) => {
          return <Page key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}

export default App;
