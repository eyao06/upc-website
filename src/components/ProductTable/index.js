import React, { Component } from 'react';
import './style.css';

class ProductTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>UPC</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) =>  
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{item.product_name}</td>
              <td>{item.upc}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
