import React, { Component } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state = {
        data: [],
        url: 'http://localhost:3000/products.json',
      };
      this.handleProductSubmit = this.handleProductSubmit.bind(this);
    }

    componentDidMount() {
      axios.get(this.state.url)
        .then(res => {
          this.setState({data: res.data.products});
      })
    }

    handleProductSubmit(product){ 
      let products = this.state.data;
      let newProducts = products.concat([product]);
      this.setState({data: newProducts});
      

      axios.post(this.state.url, product)
        .then(res => {
          console.log('POST Successful')
        })
        .catch(err => {
          console.log('err', err);
          this.setState({data: products});
        });
    }

  
  render() {
    return (
      <div className="App">
        <h1> Product Database</h1>
        <br />
        <ProductForm onProductSubmit={this.handleProductSubmit} />
        <br />
        <br />
        <hr />
        <h2> Product List</h2>
        <hr />
        <ProductTable data={this.state.data} />
      </div>
    );
  }
}

export default App;