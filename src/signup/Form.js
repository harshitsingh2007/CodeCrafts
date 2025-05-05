import React, { useState } from "react";
import styles from './Signup.module.css';

function Form() {
    let [password, hidepassword] = useState(false)
    return (
        <div className={`${styles.formContainer} container`}>
            <form>
                <div className={styles.formItem}>
                    <div className={styles.formChild}>
                        <input type="email" required autoComplete="email" placeholder="Email"></input>
                    </div>

                    <div className={styles.formChild}>
                        <input type="email" required placeholder="Confirm Email"></input>
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} required placeholder="Choose a Password" />
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} required placeholder="Confirm Password"></input>
                        <a type="button" className={styles.showPassword} onClick={() => hidepassword(!password)}>
                            {password ? 'hide' : 'show'}
                        </a>
                    </div>

                    <div className={styles.formChild}>
                        <button>Submit</button>
                    </div>
                </div>
            </form>

            <div className={styles.orLineContainer}>
                <div className={styles.orLine}></div>
                <span>or</span>
                <div className={styles.orLine}></div>
            </div>

            <div className={styles.googleLoginContainer}>
                <div className={styles.googleLogin}>
                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google-logo"></img>
                        </div>
                        <span>Continue with Google</span>
                    </div>

                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="google-logo"></img>
                        </div>
                        <span>Continue with FaceBook</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;