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
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

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
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        {/*  <Route path="/register">*/}
        {/*    <RegisterPage />*/}
        {/*  </Route>*/}
        {/*  <Route path="/login">*/}
        {/*    <LoginPage />*/}
        {/*  </Route>*/}
        </Switch>

        </main>
        <Footer/>
    </Router>
  );
}

export default App;
