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
    { title: 'Move Tabs', page: MoveTabs },
    { title: 'Windows', page: Windows },
    { title: 'Tab Groups', page: TabGroups },
    { title: 'Exclusions', page: Exclusions },
    { title: 'Logs', page: Logs },
  ];
  return (
    <div id='mainPage'>
      <Header navbarRoutes={routes} />
      <div
        id='contentContainer'
        className='px-mobileContainer sm:px-container'
        onClick={() =>
          document.getElementById('mobile-navbar').classList.add('hidden')
        }
      >
        {routes.map(({ page: Page }) => {
          return <Page key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}

export default App;
