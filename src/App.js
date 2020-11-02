import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TajinProvider} from "./components/ContextTajin";
import MainPage from "./components/MainPage";
import PictureViewerMain from "./pictureviewer/PictureViewerMain";
import RecipesMain from "./recipes/RecipesMain";

function App() {


    return (
        <Router>
            <div className="App">
                <TajinProvider>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/pictures" component={PictureViewerMain}/>
                    <Route exact path="/recipes" component={RecipesMain}/>
                </TajinProvider>
            </div>
        </Router>
    );
}

export default App;
