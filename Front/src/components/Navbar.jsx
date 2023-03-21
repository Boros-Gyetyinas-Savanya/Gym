import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const adatok = useSelector((state) => state.kartya.value);
    console.log(adatok.customer);

    const [isNavShowing, setIsNavShowing] = useState(false);
    const [newLinks, setNewLinks] = useState([]);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn);

        const logged = isLoggedIn ? true : false;
        console.log(logged);

        setNewLinks(
            links.map((elem) => {
                if (logged === true) {
                    if (elem.name === 'Login') {
                        elem.isLoggedIn = false;
                    }
                    if (elem.name === 'Register') {
                        elem.isLoggedIn = false;
                    }
                    if (elem.name === 'Cart') {
                        elem.isLoggedIn = true;
                    }
                    if (elem.name === 'History') {
                        elem.isLoggedIn = true;
                    }
                    if (elem.name === 'Logout') {
                        elem.isLoggedIn = true;
                    }
                } else {
                    if (elem.name === 'Login') {
                        elem.isLoggedIn = true;
                    }
                    if (elem.name === 'Register') {
                        elem.isLoggedIn = true;
                    }
                    if (elem.name === 'Cart') {
                        elem.isLoggedIn = false;
                    }
                    if (elem.name === 'History') {
                        elem.isLoggedIn = false;
                    }
                    if (elem.name === 'Logout') {
                        elem.isLoggedIn = false;
                    }
                }
                return elem;
            })
        );
    }, [adatok.customer]);

    return (
        <nav>
            <div className="container nav__container">
                <Link
                    to="/"
                    className="logo"
                    onClick={() => setIsNavShowing(false)}
                >
                    <img src={Logo} alt="Nav logo" />
                </Link>
                <ul
                    className={`nav__links ${
                        isNavShowing ? 'show__nav' : 'hide__nav'
                    }`}
                >
                    {newLinks.map((elem, index) => {
                        return (
                            <div key={index}>
                                {elem.isLoggedIn ? (
                                    <li>
                                        <NavLink
                                            to={elem.path}
                                            className={({ isActive }) =>
                                                isActive ? 'active-nav' : ''
                                            }
                                            onClick={() =>
                                                setIsNavShowing((prev) => !prev)
                                            }
                                        >
                                            {elem.name}
                                        </NavLink>
                                    </li>
                                ) : (
                                    ''
                                )}
                            </div>
                        );
                    })}
                </ul>
                <button
                    className="nav__toggle-btn"
                    onClick={() => setIsNavShowing((prev) => !prev)}
                >
                    {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
