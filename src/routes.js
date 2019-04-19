import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductsPage from './components/ProductsPage'
import Product from './components/Product'
import Home from './components/Home'


export default <Switch>
    <Route path='/products' component={ProductsPage} />
    <Route path='/product/:id' component={Product} />
    <Route exact path='/' component={Home} />
</Switch>