import * as React from 'react';
import { FirebaseContext } from '../firebase';
import { Root, Main } from './style';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

const App = () => {
  const firebase = React.useContext(FirebaseContext);
  firebase!
    .cats()
    .get()
    .then(snapshot => {
      console.log(snapshot.docs[0].data());
    });

  return (
    <Root>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact={true} component={() => <div>dash</div>} />
            <Route path="/add" component={() => <div>Add</div>} />
          </Switch>
        </Main>
      </BrowserRouter>
    </Root>
  );
};

export default App;
