import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter,Route} from 'react-router-dom'
import Layout from './Layout/Layout';

const Index = (props)=>{


    return (
        <BrowserRouter>
            <Route path="/" component={Layout}/>
        </BrowserRouter>
    );
};


export default Index;