import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/app';
import store from './store/store'; // Adjust the path to your store if necessary

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>
);
