import { useStateValue } from '../../context/StateProvider'
import { useAuthContext } from '../../hooks/useAuthContext'
import { db } from '../../firebase/config'
import { collection, addDoc, doc } from 'firebase/firestore'

import './Product.css'
import { useCollection } from '../../hooks/useCollection'


const Product = ({ title, price, image, id, rating }) => {

  const { documents: inventory } = useCollection('inventory')

  const { user } = useAuthContext()
  const [state, dispatch] = useStateValue()



  // const addToBasket = () => {
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating
  //     },
  //   })
  // }

  const addToBasket = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, 'basket'), {
      title: title,
      price: price,
      rating: rating,
      image: image,
      id: user.uid
    })
  }


  return (

    // <div>{inventory && inventory.map(item => (
    //   <p key={item.uid}>{item.title}</p>
    // ))}</div>

    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}
      >Add to basket</button>
    </div >
  )
}

export default Product
