import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';
import Quotes from '../../assets/Quotes.svg';
import Profile from '../../assets/Profile.svg';

function Testimonials() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    // Replace with your actual audio file path
    const audioSrc = "/path/to/your/testimonial-audio.mp3";

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressChange = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = percentage * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('ended', () => setIsPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setIsPlaying(false));
            };
        }
    }, []);

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <img src={Quotes} alt="testimonial quotes"/>
                    <h1>Testimonials</h1>
                </div>

                <div className={styles.para}>
                    <p>
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to
                        find or connect with like minded people. Websites like hobbycue.com is a great service which
                        helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also
                        provides the extra benefit of finding products and services that I can avail, which I can be
                        assured is going to be of great quality as it comes recommended by people of the hobbycue
                        community. To have discussions, to get visibility, and to be able to safely explore various
                        hobbies and activities in my city, all under one roof, is an excellent idea and I highly
                        recommend it.
                    </p>
                </div>

                <div className={styles.audio}>
                    <div className={styles.audioPlayer}>
                        <audio
                            ref={audioRef}
                            src={audioSrc}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                        />

                        <button className={styles.playButton} onClick={togglePlay}>
                            {isPlaying ? (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="3" y="2" width="3" height="12" rx="1" fill="currentColor"/>
                                    <rect x="10" y="2" width="3" height="12" rx="1" fill="currentColor"/>
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 2L13 8L3 14V2Z" fill="currentColor"/>
                                </svg>
                            )}
                        </button>

                        <div className={styles.progressContainer} onClick={handleProgressChange}>
                            <div
                                className={styles.progressBar}
                                style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                            />
                        </div>

                        <span className={styles.timeDisplay}>
                            {formatTime(currentTime)}
                        </span>

                        <img src={Profile} alt="Shubha Nagarajan" className={styles.audioAvatar}/>
                    </div>

                    <div className={styles.audioInfo}>
                        <div className={styles.profile}>
                            <img src={Profile} alt="Shubha Nagarajan"/>
                        </div>
                        <div className={styles.userDetails}>
                            <h3>Shubha Nagarajan</h3>
                            <p>Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
