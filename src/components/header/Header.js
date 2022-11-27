import './Header.css'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import SearchIcon from '@mui/icons-material/Search';//,/\//\,/\\\\\\\\\\\\/


const Header = () => {

    return (
        <div className='header'>
            <HeaderLogo />
            <div className="header-search">
                <input type="text" className='header-searchInput' />
                <SearchIcon className='search-icon' />
            </div>
            <HeaderNav />
        </div>
    )
}

export default Header
