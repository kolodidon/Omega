import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home } from './pages';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;