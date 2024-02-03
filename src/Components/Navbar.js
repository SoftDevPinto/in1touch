import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "../Styles/main.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <header>
            <label className='logo'>In1Touch</label>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">View Profile</a>
                <a href="/#">Memberships</a>
                <a href="/#">Events</a>
                <a href="/#">Surveys</a>
                <a href="/#">Careers</a>
                <a href="/#">Profile Roster</a>
                <a href="/#">Products</a>
                <a href="/#">Shopping Cart</a>
                <a href="/#">Login</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;