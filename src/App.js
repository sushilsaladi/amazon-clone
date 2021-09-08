import React, { useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
    const [{user} , dispatch] = useStateValue();
    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                //user logged in
                dispatch({
                    type:"SET_USER",
                    user:authUser,
                })
            }
            else{
                //user is not logged in
                dispatch({
                    type:"SET_USER",
                    user:null,
                }) 
            }
        })
        return () => {
            unsubscribe();
        }
    },[]);

    console.log("user is >>",user)
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header />
                        <Checkout></Checkout>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
