import React from 'react';
import { Route } from 'react-router';
import HomePage from './home';


export default (
    <Route>
        <Route components={HomePage} path={HomePage.path}/>
    </Route>
);
