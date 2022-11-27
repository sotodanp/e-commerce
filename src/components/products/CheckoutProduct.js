

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './CheckoutProduct.css'


export default function CheckoutProduct({ basket }) {


    // const [{ basket }, dispatch] = useStateValue()

    // const removeFromBasket = () => {
    //     dispatch({
    //         type: "REMOVE_FROM_BASKET",
    //         id: id,
    //     })
    // }

    const removeFromBasket = async (title) => {
        const docRef = doc(db, 'basket', title)

        await deleteDoc(docRef)
    }

    return (
        <>
            {basket.map((item, i) => (
                <div key={i} className="checkout-product">
                    <img key={item.image} className='checkoutProduct-image' src={item.image} alt="checkout product" />
                    <div className="checkoutProduct-info">
                        <p key={item.title} className='checkoutProduct-title'>{item.title}</p>
                        <p key={item.price} className="checkoutProduct-price">
                            <small>$</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div key={item.rating} className="checkoutProduct-rating">
                            {Array(item.rating)
                                .fill()
                                .map((_, i) => (
                                    <p key={i}>⭐</p>
                                ))
                            }
                        </div>
                        <button onClick={() => removeFromBasket(item.id)}>Remove from basket</button>
                    </div>
                </div>
            ))}
        </>
    )
}


