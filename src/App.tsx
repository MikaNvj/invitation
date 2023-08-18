import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Page from './component/Page';
import { Mappagedata, datashow, textmaping } from './component/Atom/Data';
import { useRecoilState, useRecoilValue } from 'recoil';
import AddData from './component/modaldata';
import Class from './component/classes';

function App() {
  const [mappages, setmappages] = useRecoilState(Mappagedata);
  const [showdata, setshowdata] = useRecoilState(datashow)
  const footermaping = useRecoilValue(textmaping)
  return (
    <div className="App">
      {showdata && <AddData/>}
      <Header />
      <div className='scroll'>
        {mappages.map(e => <Page child={e}/>)}
        
      </div>
      <div className='footer'>
        {footermaping.map((e,key) => <Class />)}
      </div>
    </div>
  );
}

export default App;
