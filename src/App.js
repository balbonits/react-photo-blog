import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js';
import PhotoGrid from './components/PhotoGrid/PhotoGrid.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav className={"App-header-nav"} />
        <a className={'App-header-logo'}><img src={logo} /></a>
      </header>
      <div className={'AppContent'}>
        <PhotoGrid />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
