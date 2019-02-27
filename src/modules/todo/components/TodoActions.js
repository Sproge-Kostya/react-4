import React from 'react';
import $ from 'jquery';
import Calendar from '../../../components/datepicker.js';

import { TodoContext } from './todo-context';
import {Article} from "../../posts/components/Article";

export class TodoActions extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this);
        // $('#datepicker').datepicker();
    }
    render() {
        const value = this.context;
        const calendar = new Calendar({
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
            firstDayOfWeek: 'monday',
        });
        console.log(calendar);
        return (
            <React.Fragment>
                <div className="calendar">
                    <div className="days">
                        {calendar.days.map(function (day,daysOfMonth) {
                            return (
                                <div className="day name" key={`${day.dayNumber}-day`}>{day.name}</div>
                            )
                        })
                        }
                    </div>
                </div>
                <footer className="footer">
                    <span className="todo-count"><strong>2</strong> items left</span>
                    <ul className="filters">
                        <li><a href="#/all" onClick={() => value.handleFilter('all')} className={`${value.filter === 'all' ? 'selected': ''}`}>All</a></li>
                        <li><a href="#/active" onClick={() => value.handleFilter('active')} className={`${value.filter === 'active' ? 'selected': ''}`}>Active</a></li>
                        <li><a href="#/completed" onClick={() => value.handleFilter('completed')} className={`${value.filter === 'completed' ? 'selected': ''}`}>Completed</a></li>
                    </ul>
                    <button className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </React.Fragment>
        )
    }
}
TodoActions.contextType = TodoContext;
