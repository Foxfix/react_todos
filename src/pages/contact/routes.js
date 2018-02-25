import React from 'react';
import { Route } from 'react-router';
import ContactPage from './contact';


export default (
    <Route>
        <Route components={ContactPage} path={ContactPage.path}/>
    </Route>
);
