import React from 'react'
import NavItem from './NavItem'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

import { useStateValue } from '../../context/StateProvider';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';




const HeaderNav = () => {

    const { user } = useAuthContext()

    const { documents: basket } = useCollection(
        'basket',
        ['id', '==', user.uid]
    )


    // const [{ basket }, dispatch] = useStateValue()


    return (
        <div className='header-nav'>

            <NavItem>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className='nav-item'>
                        <span className='navItem1'>
                            Hello Guest
                        </span>
                        <span className='navItem2'>
                            Sign in
                        </span>
                    </div>
                </Link>
            </NavItem>
            <NavItem>
                <span className='navItem1'>
                    Your
                </span>
                <span className='navItem2'>
                    Shop
                </span>
            </NavItem>
            <Link to='/checkout' style={{ textDecoration: 'none' }}>
                <div className="item-basket">
                    <LocalGroceryStoreIcon />
                    {basket && <span className='basket-count'>
                        {basket.length}
                    </span>}
                </div>
            </Link>
        </div>
    )
}

export default HeaderNav
