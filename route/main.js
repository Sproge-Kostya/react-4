import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Posts,Post,Albums,Photos,Cards,Users} from '../modules/index';

export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route path='/posts/:id' component={Post}/>
                    <Route path='/albums' component={Albums}/>
                    <Route path='/photos' component={Photos}/>
                    <Route path='/todos' component={Cards}/>
                    <Route path='/users' component={Users}/>
                </Switch>
            </main>
        )
    }
}