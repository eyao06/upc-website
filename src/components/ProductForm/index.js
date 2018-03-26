import React, { Component } from "react";
import './style.css';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      product_name: '', 
      upc: ''
    };
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleUPCChange = this.handleUPCChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProductNameChange(e) {
    this.setState({ product_name: e.target.value });
  }

  handleUPCChange(e) {
    this.setState({ upc: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let product_name = this.state.product_name.trim();
    let upc = this.state.upc.trim();
    if(!upc || !product_name){
      return;
    }
    this.props.onProductSubmit({product_name: product_name, upc: upc});
    this.setState({product_name: '', upc: ''});
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          className= "input"
          type="text"
          placeholder="Product Name"
          value={ this.state.product_name }
          onChange={ this.handleProductNameChange } />
        <input
          className= "input"
          type="text"
          pattern="[0-9]*" 
          placeholder="UPC (11 digit code)"
          value={ this.state.upc }
          onChange={ this.handleUPCChange } />
        <input
          className= "button"
          type="submit"
          value="Add To Database" />
      </form>
    )
  }
}

export default ProductForm;