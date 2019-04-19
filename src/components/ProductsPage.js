import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import store, {UPDATE_PRODUCTS} from '../store';

export default class ProductsPage extends Component {
    state = {
        products: store.getState().products
    }
    async componentDidMount() {
        store.subscribe(() => {
            this.setState({
                products: store.getState().products
            })
        })
        const response = await axios.get('/api/products')
        console.log(response);
        let action = {
            type: UPDATE_PRODUCTS,
            payload: response.data
        }
        store.dispatch(action);
        // this.setState({products: response.data})
    }
    render() {
        return(
            <div>
                {this.state.products.map(val => {
                    return <div>
                        <h1>{val.name}</h1>
                        <h1>{val.size}</h1>
                        <Link to={`/product/${val.id}`}><button>Go To</button></Link>
                    </div>
                })}
            </div>
        )
    }
}