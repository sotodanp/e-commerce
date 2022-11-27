import CheckoutProduct from '../../components/products/CheckoutProduct'
import './Checkout.css'
import Subtotal from '../../components/products/Subtotal'
import { useStateValue } from '../../context/StateProvider'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

const Checkout = () => {
    const { user } = useAuthContext()

    const { documents: basket } = useCollection(
        'basket',
        ['id', '==', user.uid]
    )




    // const [{ basket }, dispatch] = useStateValue()


    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {/* {basket && basket.map((item, i) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            key={i}
                            item={item}
                        />
                    ))} */}

                    {basket && <CheckoutProduct basket={basket} />}
                </div>
            </div>
            <div className="checkout-right"></div>
            <Subtotal />
        </div>
    )
}

export default Checkout
