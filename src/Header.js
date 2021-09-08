import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';/* href refreshes the page; link does not. */
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//rcfe
function Header() {
    const [{ basket , user }] = useStateValue();
    //console.log(basket)
    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                {/* Logo on the left -> img */}
                <img className="header__logo" src='
                https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt="dondaisyeezus"></img>
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionlineone">Hello, {user?.email}</span>
                        <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone">Returns</span>
                        <span className="header__optionlinetwo">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone">Your</span>
                        <span className="header__optionlinetwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* Basket Icon with number*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="header__optionlinetwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
