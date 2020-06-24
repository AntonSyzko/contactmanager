import React from 'react';
import Contacts from "./components/contacts/Contacts";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider} from "./context";

import Test from './components/test/Test'

function App() {
  return (
    <Provider>
        <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
            <Header  branding="Contact manager" />
            <div className="container">
                <Switch>
                    <Route exact  path = "/"
                     component={Contacts}/>
                    <Route exact  path = "/contact/add"
                     component={AddContact}/>
                    <Route exact  path = "/contact/edit/:id"
                           component={EditContact}/>
                    <Route exact  path = "/about"
                     component={About}/>
                     <Route component = {NotFound}/>
                     <Route exact path="/test"
                            component={Test}/>
                </Switch>
            </div>
        </div>
        </Router>
    </Provider>
  );
}

export default App;
