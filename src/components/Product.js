import React, {Component} from 'react';
import axios from 'axios';
import store from '../store';

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: store.getState().products
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                products: store.getState().products
            })
        })
    }
    render() {
        return(
            <div>
                <>
                    <h1>{this.state.products[this.props.match.params.id - 1].name}</h1>
                    <h1>{this.state.products[this.props.match.params.id - 1].size}</h1>
                </>
            </div>
        )
    }
}