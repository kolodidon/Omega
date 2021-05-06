import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, Services, Products, SignUp } from './pages';
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
        <Route path="/services">
          <Services/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;