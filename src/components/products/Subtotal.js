import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../reducer/reducer'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" /> This Order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
