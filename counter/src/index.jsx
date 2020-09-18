import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
