import React, { useState } from 'react';
import styles from '../signup/Signup.module.css';

function FormLogin() {
    const [showpass, showpasshide] = useState(false);
    
    return (
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formItem}>
                    <div className={styles.formChild}>
                        <input 
                            type="email" 
                            required 
                            autoComplete="email" 
                            placeholder="Email"
                        />
                    </div>

                    <div className={styles.formChild}>
                        <input 
                            type={showpass ? 'text' : 'password'} 
                            required 
                            placeholder="Enter Your Password"
                        />
                        <div>
                            <a 
                                type="button"
                                className={styles.showPassword} 
                                onClick={() => showpasshide(!showpass)}
                            >
                                {showpass ? "Hide" : "Show"}
                            </a>
                        </div>
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
                            <img 
                                src="https://img.icons8.com/fluency/48/000000/google-logo.png" 
                                alt="google-logo"
                            />
                        </div>
                        <span>Continue with Google</span>
                    </div>

                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/733/733547.png" 
                                alt="facebook-logo"
                            />
                        </div>
                        <span>Continue with FaceBook</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;