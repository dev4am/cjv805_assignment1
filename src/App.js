import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import UserDashboardPage from './pages/UserDashboardPage';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

function App() {

    const [loginState, setLoginState] = useState(false);

    useEffect(()=>{
        const cookie = Cookies.get('dvs_token');
        if(cookie){
            setLoginState(true);
        }else{
            setLoginState(false);
        }
    }, [])

    return (
        <Router>
            <Header loginState={loginState} setLoginState={setLoginState}/>

            <main role="main" style={{backgroundColor: 'rgb(5,28,43)', paddingBottom: "5rem"}}>

                <Switch>
                    <Route exact path="/">
                        <IndexPage/>
                    </Route>
                    <Route exact path="/movie">
                        <ListPage key="movie" type="movie"/>
                    </Route>
                    <Route exact path="/tv">
                        <ListPage key="tv" type="tv"/>
                    </Route>
                    <Route path="/movie/:id">
                        <DetailPage key="movie" type="movie"/>
                    </Route>
                    <Route path="/tv/:id">
                        <DetailPage key="tv" type="tv"/>
                    </Route>
                      <Route path="/register">
                        <RegisterPage />
                      </Route>
                      <Route path="/login">
                        <LoginPage setLoginState={setLoginState}/>
                      </Route>
                    <Route path="/user/dashboard">
                        <UserDashboardPage />
                    </Route>
                </Switch>

            </main>
            <Footer/>
        </Router>
    );
}

export default App;
