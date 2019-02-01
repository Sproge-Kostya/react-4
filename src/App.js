import React,{Component} from 'react';
import {HashRouter} from 'react-router-dom';
import {Header} from './components/index';
import {Main} from './route/main';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;
