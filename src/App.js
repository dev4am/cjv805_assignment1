import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import IndexPage from './components/IndexPage';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
        <Header/>

        <main role="main">

        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>

        </main>
        <Footer/>
    </Router>
  );
}

export default App;
