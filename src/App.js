import React, { useState } from 'react';
import './App.css';

function Home() {
  return <div>POGGGGGGGG</div>;
}

function MoveTabs() {
  return <div>fdsafdsagsd</div>;
}

function Page() {
  return (
    <div>
      <header className='App-header'>
        <h1>DuplicateTabCloser</h1>
      </header>
      <Navbar />
    </div>
  );
}

function Section({ isActive }) {
  if (isActive === 0) {
    return (
      <div>
        <Home />
      </div>
    );
  } else if (isActive === 1) {
    return <div><MoveTabs /></div>;
  } else {
    return <div></div>
  }
}

function Navbar() {
  const [isActive, setActive] = useState(0);
  return (
    <div>
      <ul className='nav'>
        <li>
          <button className="link-button" onClick={() => setActive(0)}>
            Home
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => setActive(1)}>
            MoveTabs
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => setActive(2)}>
            Windows
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => setActive(3)}>
            TabGroups
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => setActive(4)}>
            Exclusions
          </button>
        </li>
        <li>
          <button className="link-button" onClick={() => setActive(5)}>
            Logs
          </button>
        </li>
      </ul>
      <Section isActive={isActive} />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Page />
    </div>
  );
}

export default App;
