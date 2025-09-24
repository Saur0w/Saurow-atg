import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';
import HobbyCueLogo from '../../assets/hobbycue-logo.svg';
import SearchIcon from '../../assets/searchBox/search.svg';

function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    const dropdownItems = {
        explore: [
            { label: "People"},
            { label: "Places"},
            { label: "Programs"},
            { label: "Products"}
        ],
        hobbies: [
            { label: "Arts"},
            { label: "Music"},
            { label: "Sports"},
            { label: "Dance"},
            { label: "Technology"},
            { label: "Cooking"}
        ]
    };

    const handleMouseEnter = (dropdownName) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest(`.${styles.header}`)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a className={styles.brand} href="#">
                    <img src={HobbyCueLogo} alt="HobbyCue" />
                </a>

                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchBox}
                        type="search"
                        placeholder="Search here..."
                    />
                    <button className={styles.searchButton}>
                        <img src={SearchIcon} alt="search" className={styles.searchIcon} />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {/* Explore Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleMouseEnter('explore')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#" className={styles.navLink}>
                            <i className="fas fa-compass"></i>
                            <span>Explore</span>
                            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </a>

                        <div className={`${styles.dropdownMenu} ${activeDropdown === 'explore' ? styles.active : ''}`}>
                            {dropdownItems.explore.map((item, index) => (
                                <a key={index} href="#" className={styles.dropdownItem}>
                                    <i className={item.icon}></i>
                                    <div className={styles.itemContent}>
                                        <span className={styles.itemTitle}>{item.label}</span>
                                        <span className={styles.itemDesc}>{item.description}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hobbies Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleMouseEnter('hobbies')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#" className={styles.navLink}>
                            <i className="fas fa-star"></i>
                            <span>Hobbies</span>
                            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </a>

                        <div className={`${styles.dropdownMenu} ${styles.hobbiesMenu} ${activeDropdown === 'hobbies' ? styles.active : ''}`}>
                            <div className={styles.dropdownGrid}>
                                {dropdownItems.hobbies.map((item, index) => (
                                    <a key={index} href="#" className={styles.dropdownItem}>
                                        <i className={item.icon}></i>
                                        <div className={styles.itemContent}>
                                            <span className={styles.itemTitle}>{item.label}</span>
                                            <span className={styles.itemDesc}>{item.description}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Icon Links */}
                    <div className={styles.iconGroup}>
                        <a href="#" className={styles.iconLink} title="Bookmarks">
                            <i className="fas fa-bookmark"></i>
                        </a>
                        <a href="#" className={styles.iconLink} title="Notifications">
                            <i className="fas fa-bell"></i>
                        </a>
                        <a href="#" className={styles.iconLink} title="Cart">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>

                    <button className={styles.signInBtn}>
                        Sign In
                    </button>
                </nav>

                <div className={styles.mobileActions}>
                    <button className={styles.mobileSearchBtn}>
                        <i className="fas fa-search"></i>
                    </button>
                    <button className={styles.mobileNotificationBtn}>
                        <i className="fas fa-bell"></i>
                    </button>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileMenuContent}>
                            <div className={styles.mobileSearch}>
                                <input type="search" placeholder="Search here..." />
                                <button><i className="fas fa-search"></i></button>
                            </div>

                            <nav className={styles.mobileNav}>
                                <a href="#" className={styles.mobileNavLink}>
                                    <i className="fas fa-compass"></i>
                                    <span>Explore</span>
                                </a>
                                <a href="#" className={styles.mobileNavLink}>
                                    <i className="fas fa-star"></i>
                                    <span>Hobbies</span>
                                </a>
                                <a href="#" className={styles.mobileNavLink}>
                                    <i className="fas fa-bookmark"></i>
                                    <span>Bookmarks</span>
                                </a>
                                <a href="#" className={styles.mobileNavLink}>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Cart</span>
                                </a>
                            </nav>

                            <button className={styles.mobileSignInBtn}>
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
