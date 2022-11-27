import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='header-logo'>
                <StoreIcon className='header-image' fontSize='large' />
                <h2 className='header-title'>eShop</h2>
            </div>
        </Link>
    )
}

export default HeaderLogo
