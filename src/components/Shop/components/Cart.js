import React from 'react';
import LineItem from './LineItem';

export default function Cart (props) {

  const openCheckout = () => {
    window.open(props.checkout.webUrl);
  }

  let line_items;
  if (props.checkout) {
    line_items = props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={props.updateQuantityInCart}
          removeLineItemInCart={props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });
  }
  return (
    <div className={`Cart ${props.isCartOpen ? 'Cart--open' : ''}`} /* style={{ paddingTop: '60px' }} */>
      <header className="Cart__header">
        <h2>Your cart</h2>
        <button
          onClick={props.handleCartClose}
          className="Cart__close">
          ×
          </button>
      </header>
      <ul className="Cart__line-items">
        {line_items}
      </ul>
      <div style={{ padding: '20px', fontSize: '12px' }}>
        All purchases will recieve an e-mail containing a download link soon after purchase
      </div>
      <footer className="Cart__footer">
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {props.checkout && props.checkout.subtotalPrice}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {props.checkout && props.checkout.totalTax}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Total</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {props.checkout && props.checkout.totalPrice}</span>
          </div>
        </div>
        <button className="Cart__checkout button" onClick={openCheckout}>Checkout</button>
      </footer>
    </div>
  )
}


// class Cart extends Component {
//   constructor(props) {
//     super(props);

//     openCheckout = openCheckout.bind(this);
//   }

//   openCheckout () {
//     window.open(props.checkout.webUrl);
//   }

//   render () {
//     let line_items = props.checkout.lineItems.map((line_item) => {
//       return (
//         <LineItem
//           updateQuantityInCart={props.updateQuantityInCart}
//           removeLineItemInCart={props.removeLineItemInCart}
//           key={line_item.id.toString()}
//           line_item={line_item}
//         />
//       );
//     });

//     return (
//       <div className={`Cart ${props.isCartOpen ? 'Cart--open' : ''}`} /* style={{ paddingTop: '60px' }} */>
//         <header className="Cart__header">
//           <h2>Your cart</h2>
//           <button
//             onClick={props.handleCartClose}
//             className="Cart__close">
//             ×
//           </button>
//         </header>
//         <ul className="Cart__line-items">
//           {line_items}
//         </ul>
//         <footer className="Cart__footer">
//           <div className="Cart-info clearfix">
//             <div className="Cart-info__total Cart-info__small">Subtotal</div>
//             <div className="Cart-info__pricing">
//               <span className="pricing">$ {props.checkout.subtotalPrice}</span>
//             </div>
//           </div>
//           <div className="Cart-info clearfix">
//             <div className="Cart-info__total Cart-info__small">Taxes</div>
//             <div className="Cart-info__pricing">
//               <span className="pricing">$ {props.checkout.totalTax}</span>
//             </div>
//           </div>
//           <div className="Cart-info clearfix">
//             <div className="Cart-info__total Cart-info__small">Total</div>
//             <div className="Cart-info__pricing">
//               <span className="pricing">$ {props.checkout.totalPrice}</span>
//             </div>
//           </div>
//           <button className="Cart__checkout button" onClick={openCheckout}>Checkout</button>
//         </footer>
//       </div>
//     )
//   }
// }

// export default Cart;
