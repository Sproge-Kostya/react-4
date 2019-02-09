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
    post: {
    },
    albums: {
        toolbar: {
            Order: {
                isActive: false
            },
            Model:{
                isActive: false
            },
            Search: {
                isActive: true,
                className: "uk-width-medium uk-margin-auto-right"
            },
            Limiter: {
                isActive: true,
                helper:'sorter',
                isAll: true,
                options:[]
            }
        }
    },
    photos: {
        toolbar: {
            Order: {
                isActive: true,
                options: ["asc", "desc"]
            },
            Model:{
                isActive: true
            },
            Search: {
                isActive: true
            },
            Limiter: {
                isActive: true,
                helper:'pagination.limit',
                isAll: false,
                options: ["6", "12", "24"]
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
            Search: {
                isActive: false
            },
            Limiter: {
                isActive: true,
                helper:'pagination.limit',
                isAll: true,
                options: []
            }
        }
    }
};

export const ThemeContext = React.createContext(
    Themes.posts // default value
);