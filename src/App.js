import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, Services, Products} from './pages';
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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;