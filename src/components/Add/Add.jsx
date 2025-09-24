import React from 'react';
import styles from './style.module.scss';
import AddIcon from '../../assets/Feature/Add.svg';

function Add() {
    return (
        <section className={styles.add}>
            <div className={styles.own}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <img src={AddIcon} alt="logo" />
                        <h1>Add your own</h1>
                    </div>
                    <div className={styles.para}>
                        <p>
                            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you
                            know someone who should be on hobbycue? Go ahead and Add your Own page
                        </p>
                    </div>

                    <div className={styles.btn}>
                        <button>Add new</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Add;
