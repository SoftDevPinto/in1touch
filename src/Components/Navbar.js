import { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css"
import in1TouchLogo from '../Images/logo-in1touch.png'; 


function Navbar() {
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <img src={in1TouchLogo} alt="In1Touch Logo" className='logo' />
            <nav ref={navRef} className={isScrolled ? 'fixed_nav' : ''}>
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
