import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './layout/App';
import { Firebase, FirebaseContext } from './firebase';
import { GlobalStyle } from './style';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
