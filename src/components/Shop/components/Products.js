import React from 'react';
import Product from './Product';

export default function Products (props) {
  let products
  if (props.products) {

    products = props.products.map((product) => {
      return (
        <Product
          addVariantToCart={props.addVariantToCart}
          client={props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });
  }

  return (
    <div className="Product-wrapper">
      {products}
    </div>
  )
}


// class Products extends Component {
//   render () {
//     let products = this.props.products.map((product) => {
//       return (
//         <Product
//           addVariantToCart={this.props.addVariantToCart}
//           client={this.props.client}
//           key={product.id.toString()}
//           product={product}
//         />
//       );
//     });

//     return (
//       <div className="Product-wrapper">
//         {products}
//       </div>
//     );
//   }
// }

// export default Products;
