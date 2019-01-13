import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Header} from './components/index';
import {Main} from './route/main';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
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