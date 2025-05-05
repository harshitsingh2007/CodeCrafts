import React from 'react';
import styles from './Signup.module.css';

function Body() {
    return (
        <div className={`${styles.bodyContainer} container`}>
            <div className={styles.bodyItem1}>
                <h1>Sign Up to CodeCrafts</h1>
                <span>Already have an account?
                    <a href="">Login Up</a></span>
            </div>
        </div>
    );
}

export default Body;