import React, { useEffect, useState } from 'react'
import Products from '../Shop/components/Products';
import Cart from '../Shop/components/Cart';
import AudioPlayer from '../../AudioPlayer/AudioPlayer'
import { useParams } from 'react-router-dom';
import { storage } from '../../Services/firebase'
// import { room1Logo } from './assets/Room1logo.jpeg';
import './RecordLabelDJ.css';


export default function RecordLabelDJ ({ client }) {

  const [trackPreviews, setTrackPreviews] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState({ lineItems: [] });
  const [products, setProducts] = useState([]);
  // const [shop, setShop] = useState({})

  const { dj } = useParams();
  console.log(dj)

  useEffect(() => {


    storage
      .ref('DJs/')
      .child(`${dj[0].toUpperCase() + dj.substring(1)}/Music/boxer-previews`)
      .list()
      // .getDownloadURL()

      .then(data => {
        // console.log(data.items);
        let urlArr = [];
        for (let i = 0; i < data.items.length; i++) {
          let url = data.items[i].getDownloadURL()
            .then(url => {
              urlArr.push(url.toString())
            })
            .then(() => {
              setTrackPreviews(urlArr)
            })
        }
        console.log(trackPreviews)
        // console.log(data.prefixes);

        // data.prefixes.forEach(element => {
        //   console.log(element.getDownloadURL())
        // })
      })
      .catch(err => console.log('errrr', err));



    fetch(`http://localhost:8080/track-previews//${dj}`)
      .then(data => data.json())
      .then(tracks => {
        setTrackPreviews(tracks.resources)
      })

    client.checkout.create().then((res) => {
      setCheckout(res)
    });

    client.product.fetchQuery({
      query: `tag:${dj}`
    }).then((res) => {
      setProducts(res)
    });

    // client.shop.fetchInfo().then((res) => {
    //   setShop(res)
    // });

  }, [client.checkout, client.product, dj]);

  const addVariantToCart = (variantId, quantity) => {
    setIsCartOpen(true);
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = checkout.id

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      setCheckout(res)
    });
  }

  const updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = checkout.id
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      setCheckout(res)
    });
  }

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = checkout.id

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      setCheckout(res)
    });
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (

    <div className="Record-Label__container" style={{ minHeight: '100vh', padding: '20px 0 50px' }}>
      <header className="App__header">
        <div className="App__title">
          <h1 className="shop-title">{dj.toUpperCase()}</h1>
        </div>
      </header>
      <div className="Audio-Player__container" style={{ textAlign: 'center' }}>
        <div
          className="player"
          style={{
            minWidth: '300px',
            maxWidth: '900px',
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'left',
            // flexDirection: 'column',
            padding: '20px 0'
          }} >
          <p
            className="Track-Previews__title"
            style={{
              fontSize: '35px',
              color: 'white'
            }}>Track Previews</p>
          {trackPreviews/* .slice(0, 1) */.sort((a, b) => a.url < b.url ? -1 : 1).map(track => <AudioPlayer track={track} audioLink={track} />)}
        </div>
        <div className="App" style={{ display: 'inline-block', verticalAlign: 'center', minWidth: '300px' }}>

          <Products
            products={products}
            client={client}
            addVariantToCart={addVariantToCart}
          />
          <Cart
            checkout={checkout}
            isCartOpen={isCartOpen}
            handleCartClose={handleCartClose}
            updateQuantityInCart={updateQuantityInCart}
            removeLineItemInCart={removeLineItemInCart}
          />
          {!isCartOpen &&
            <div className="App__view-cart-wrapper">
              <button className="App__view-cart" onClick={() => setIsCartOpen(true)}>View Cart</button>
            </div>
          }
        </div>
      </div>
    </div >

  )
}
