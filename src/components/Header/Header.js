import React from 'react';

import css from './Heder.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div><h1>The Movie Database</h1></div>
                <div><p>login:</p><h1>M@xXx</h1></div>
        </div>
    );
};

export {Header};