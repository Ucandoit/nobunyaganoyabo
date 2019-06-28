import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Firebase, FirebaseContext } from './firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
