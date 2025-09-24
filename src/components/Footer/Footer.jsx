import React, { useState } from 'react';
import styles from './style.module.scss';
import Arrow from '../../assets/Arrow.svg';

function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.block}>
                        <h5 onClick={() => toggleSection('hobbycue')}>
                            Hobbycue
                            <img
                                src={Arrow}
                                alt="arrow"
                                className={openSection === 'hobbycue' ? styles.rotated : ''}
                            />
                        </h5>
                        <ul className={openSection === 'hobbycue' ? styles.open : ''}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Work with Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className={styles.block}>
                        <h5 onClick={() => toggleSection('howdo')}>
                            How Do I
                            <img
                                src={Arrow}
                                alt="arrow"
                                className={openSection === 'howdo' ? styles.rotated : ''}
                            />
                        </h5>
                        <ul className={openSection === 'howdo' ? styles.open : ''}>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Add a Listing</a></li>
                            <li><a href="#">Claim Listing</a></li>
                            <li><a href="#">Post a Query</a></li>
                            <li><a href="#">Add a Blog Post</a></li>
                            <li><a href="#">Other Queries</a></li>
                        </ul>
                    </div>

                    <div className={styles.block}>
                        <h5 onClick={() => toggleSection('quicklinks')}>
                            Quick Links
                            <img
                                src={Arrow}
                                alt="arrow"
                                className={openSection === 'quicklinks' ? styles.rotated : ''}
                            />
                        </h5>
                        <ul className={openSection === 'quicklinks' ? styles.open : ''}>
                            <li><a href="#">Listings</a></li>
                            <li><a href="#">Blog Posts</a></li>
                            <li><a href="#">Shop / Store</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div className={styles.block}>
                        <h5>Social Media</h5>
                        <div className={styles.socialRow}>
                            <a aria-label="Facebook"><i className="fab fa-facebook-f"/></a>
                            <a aria-label="Twitter"><i className="fab fa-twitter"/></a>
                            <a aria-label="Instagram"><i className="fab fa-instagram"/></a>
                            <a aria-label="Pinterest"><i className="fab fa-pinterest-p"/></a>
                            <a aria-label="Google Plus"><i className="fab fa-google-plus-g"/></a>
                            <a aria-label="YouTube"><i className="fab fa-youtube"/></a>
                            <a aria-label="Telegram"><i className="fab fa-telegram-plane"/></a>
                            <a aria-label="Email"><i className="fas fa-envelope"/></a>
                        </div>

                        <div className={styles.invite}>
                            <h6>Invite Friends</h6>
                            <div className={styles.inviteForm}>
                                <input type="email" placeholder="Email ID"/>
                                <button>Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.copy}>
                <p>© Purple Cues Private Limited</p>
            </div>
        </footer>
    );
}

export default Footer;
