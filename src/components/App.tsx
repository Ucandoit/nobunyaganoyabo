import * as React from 'react';
import { FirebaseContext } from '../firebase';

const App = () => {
  const firebase = React.useContext(FirebaseContext);
  firebase!
    .cats()
    .get()
    .then(snapshot => {
      console.log(snapshot.docs[0].data());
    });
  return <h1>のぶニャがの野望</h1>;
};

export default App;
