import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Nav} from './components/index';
import {Main} from './route/main';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
    , document.getElementById('root'));