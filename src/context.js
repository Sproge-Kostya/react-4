import React from 'react';

export const Themes = {
    posts: {
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
                isAll: false,
                options: ["6", "12", "24"]
            }
        }
    },
    post: {
        toolbar: {
            Order: {
                isActive: false,
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
                isAll: false,
                options: ["6", "12", "24"]
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
            Search: {
                isActive: true
            },
            Limiter: {
                isActive: true,
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
                isAll: false,
                options: ["6", "12", "24"]
            }
        }
    },
    todos: {
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
                isAll: false,
                options: ["6", "12", "24"]
            }
        }
    }
};

export const ThemeContext = React.createContext(
    Themes.posts // default value
);