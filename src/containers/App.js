import React from 'react';
import SideBar from '../components/SideBar';
import _ from "lodash";
import Main from '../components/Main';
import store from "../store";
// import logo from './logo.svg';
import './App.css';

function App() {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
