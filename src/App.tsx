import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Page from './component/Page';
import { Mappagedata } from './component/Atom/Data';
import { useRecoilState } from 'recoil';

function App() {
  const [mappages, setmappages] = useRecoilState(Mappagedata)
  return (
    <div className="App">
      <Header />
      <div className='scroll'>
        {mappages.map(e => <Page />)}
        
      </div>

    </div>
  );
}

export default App;
