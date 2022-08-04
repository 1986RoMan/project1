import React from 'react';

import css from './Heder.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div>
                <h1>The Movie Database</h1>
            </div>
                <div className={css.divka}>
                    <p style={{margin:"10px"}}>login:M@xXx</p>
                    <img className={css.avatar} src={'https://vjoy.cc/wp-content/uploads/2019/05/35-42.jpg'}/>
                </div>
        </div>
    );
};

export {Header};