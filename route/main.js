import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Posts} from '../modules/posts/index';
import {Post} from '../modules/post/index';

export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route path='/posts/:id' component={Post}/>
                </Switch>
            </main>
        )
    }
}