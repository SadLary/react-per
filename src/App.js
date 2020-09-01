import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from './components/Users/Users';
import Header from './components/Header/Header'
import User from './components/Users/User/User';
import Albums from './components/Albums/Albums';
import Album from './components/Albums/Album/Album';
import Photos from './components/Photo/Photos';
import PopUp from './components/PopUpImg/PopUp';



function App() {
  
  return (
    
      <div className="App">
        <BrowserRouter >
          <Header />
          <PopUp />
          <Route exact path='/' component={Users}/>
          <Route exact path='/albums' component={Albums}/>
          <Route exact path='/photos' component={Photos}/>
          <Switch>
            <Route path="/user/:userId" children={<User />} />
            <Route path="/albums/:albumId" children={<Album />} />
          </Switch>
        </BrowserRouter>
      </div>
      
  );
}

export default App;
