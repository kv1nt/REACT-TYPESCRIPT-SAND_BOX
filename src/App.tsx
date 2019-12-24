import React from 'react';
import logo from './logo.svg';
import AppState from './store/index';
import { Provider } from 'react-redux';
import './App.css';
import {MainComponent} from './components/MainComponent'; 

const App: React.FC = () => {
  return (
    <Provider store={AppState()}>
      <MainComponent />
    </Provider>
  );
}

export default App;
