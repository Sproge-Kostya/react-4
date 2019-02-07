import React from 'react';

export const Themes = {
    posts: {
        toolbar:{
            isActive: true,
        }
    },
    post: {
        toolbar:{
            isActive: true,
        }
    },
    albums:{
        toolbar:{
            isActive: true,
        }
    },
    photos:{
        toolbar:{
            isActive: true,
        }
    },
    todos:{
        toolbar:{
            isActive: true,
        }
    }
};

export const ThemeContext = React.createContext(
    Themes.posts // default value
);