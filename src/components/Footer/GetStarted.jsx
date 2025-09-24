import React from 'react';
import styles from './get.module.scss';
import End from '../../assets/EndArtist/End.svg';

function GetStarted() {
    return (
      <>
          <div className={styles.getStarted}>
              <div className={styles.text}>
                  <h1>Your <span className={styles.hobby}> Hobby</span>, Your <span className={styles.com}>Community...</span> </h1>
                  <button className={styles.btn}>Get Started</button>
              </div>
              <div className={styles.image}>
                  <img src={End} alt="" />
              </div>
          </div>
      </>
    );
}

export default GetStarted;