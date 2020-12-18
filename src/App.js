import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import axios from 'axios'
import {Provider} from 'react-redux'
import store from './store/store'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Recipe from "./components/Recipe";
import Chef from './components/Chef'
class App extends Component
{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header/>
                     <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/recipe_list"} component={Recipe}/>
                        <Route path={"/chef_list"} component={Chef}/>
                     </Switch>
                    <Footer/>
                </Router>
            </Provider>
        )
    }
}
export default App;
