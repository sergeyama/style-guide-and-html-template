import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/App.jsx'
import About from './components/About.jsx'

ReactDOM.render(
    <div className='test'>        
        <Router>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/about' exact component={About} />
            </Switch>        
        </Router>
    </div>,
    document.getElementById('root')    
);