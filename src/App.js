import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TajinProvider} from "./components/ContextTajin";
import MainPage from "./components/MainPage";
import TajinMenu from "./components/menu";

function App() {


    return (
        <Router>
            <div className="App">
                <TajinProvider>
                    <Route exact path="/" component={TajinMenu}/>
                    <div>
                        <Route exact path="/" component={MainPage}/>
                    </div>
                </TajinProvider>
            </div>
        </Router>
    );
}

export default App;
