import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/Header';

import Home from './pages/Home';

const HomePage = withRouter(Home);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact={true} path="/" render={() => <HomePage />}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;