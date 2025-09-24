import React from 'react';
import styles from './style.module.scss';
import People from '../../assets/Feature/People.svg';
import Place from '../../assets/Feature/Place.svg';
import Product from '../../assets/Feature/Product.svg';
import Program from '../../assets/Feature/Program.svg';

function Feature() {
    return (
        <section className={styles.feature}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <img src={People} alt="logo" />
                        <h1>People</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                    </div>
                    <div className={styles.btn}>
                        <button>Connect</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <img src={Place} alt="logo" />
                        <h1>Place</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                    </div>

                    <div className={styles.btn}>
                        <button>Meet up</button>
                    </div>
                </div>
                <div className={styles.card} >
                    <div className={styles.heading}>
                        <img src={Product} alt="logo" />
                        <h1>Product</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                    </div>
                    <div className={styles.btn}>
                        <button>Get it</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <img src={Program} alt="logo" />
                        <h1>Program</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                    </div>
                    <div className={styles.btn}>
                        <button>Attend</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
