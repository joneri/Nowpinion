import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../components/Home';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="frontend" />
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
