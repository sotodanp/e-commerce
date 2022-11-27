import './Home.css'
import Product from '../../components/products/Product'
import { useCollection } from '../../hooks/useCollection'

const Home = () => {

    const { documents: inventory } = useCollection('inventory')


    return (
        <div className="home">
            <div className="home-container">
                <img className='home-image' src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="home page" />

                <div className="home-row">
                    {inventory && inventory.map(item => (
                        <Product key={item.uid} title={item.title} id={item.uid} price={item.price} image={item.image} rating={item.rating} />

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Home
