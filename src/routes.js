import * as React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './components/settings/Configuration';

export default [
    <Route exact path="/configuration" render={() => <Configuration />} />,
];
