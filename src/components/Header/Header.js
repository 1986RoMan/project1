import React from 'react';
import css from './Heder.module.css'
const Header = () => {
    return (
        <div className={css.header}>
               <h1>The Movie Database</h1>
               <h1>user: M@xXx</h1>
        </div>
    );
};

export {Header};