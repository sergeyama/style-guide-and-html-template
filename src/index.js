import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';

ReactDOM.render(
    <div className='container--main'> 
        <Header />       
        <Router>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/about' exact component={About} />
            </Switch>        
        </Router>
        <Footer />
    </div>,
    document.getElementById('root')    
);