import React from 'react';
export const Navigation = [
    {
        id: 0,
        title: 'Posts',
        url: '/'
    },
    {
        id: 1,
        title: 'Users',
        url: '/users'
    },
    {
        id: 2,
        title: 'Photos',
        url: '/photos'
    },
    {
        id: 3,
        title: 'Albums',
        url: '/albums'
    },
    {
        id: 4,
        title: 'Todos',
        url: '/todos'
    }
];
export const Themes = {
    posts: {
        toolbar: {
            Order: {
                isActive: true,
                options: ["asc", "desc"],
                className: "uk-select uk-width-small uk-margin-auto-left"
            },
            Model:{
                isActive: true,
                className: "uk-button-group uk-margin-left"
            },
            CurrentPage:{
                isActive: false
            },
            Sorter:{
                isActive: false
            },
            Search: {
                isActive: true,
                className: "uk-width-medium uk-margin-right"
            },
            Limiter: {
                isActive: true,
                helper:'pagination.limit',
                isAll: false,
                options: ["6", "12", "24"],
                className: "uk-select uk-width-small uk-margin-left"
            }
        }
    },
    albums: {
        toolbar: {
            Order: {
                isActive: false
            },
            Model:{
                isActive: false
            },
            CurrentPage:{
                isActive: false
            },
            Sorter:{
                isActive: true,
                isAll: true,
                helper:'userId',
                options:[]
            },
            Search: {
                isActive: true,
                className: "uk-width-medium uk-margin-auto-right"
            },
            Limiter: {
                isActive: false
            }
        }
    },
    photos: {
        toolbar: {
            Order: {
                isActive: false,
            },
            Model:{
                isActive: false
            },
            CurrentPage:{
                isActive: false
            },
            Sorter:{
                isActive: true,
                isAll: true,
                helper:'albumId',
                options:[]
            },
            Search: {
                isActive: true,
                className: "uk-width-medium uk-margin-auto-right"
            },
            Limiter: {
                isActive: false
            }
        }
    },
    todos: {
        toolbar: {
            Order: {
                isActive: false
            },
            Model:{
                isActive: false
            },
            CurrentPage:{
                isActive: true
            },
            Sorter:{
                isActive: true,
                isAll: true,
                helper:'userId',
                options:[]
            },
            Search: {
                isActive: false
            },
            Limiter: {
                isActive: false
            }
        }
    }
};

export const ThemeContext = React.createContext(
    Themes.posts // default value
);