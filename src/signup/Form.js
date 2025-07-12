import React, { useState } from "react";
import styles from './Signup.module.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Form() {
    const [password, hidepassword] = useState(false);
    const [data, setdata] = useState({
        uemail: '',
        upassword: '',
        uname: '',
    });

    const navigate = useNavigate();

    const getvalue = (event) => {
        const { name, value } = event.target;
        setdata(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const confirmEmail = form.elements.confirmEmail.value;
        const confirmPassword = form.elements.confirmPassword.value;

        if (data.uemail !== confirmEmail) {
            toast.error("Emails don't match");
            return;
        }

        if (data.upassword !== confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }

        const currentuserdata = {
            uemail: data.uemail,
            upassword: data.upassword,
            uname: data.uname,
        };

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentuserdata),
            });
            

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.error || "Registration failed");
                return;
            }

            toast.success(result.message);
            setdata({ uemail: '', upassword: '', uname: '' });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            console.error("Signup error:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className={`${styles.formContainer} container`}>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className={styles.formItem}>
                    <div className={styles.formChild}>
                        <input type="text" onChange={getvalue} value={data.uname} name="uname" required placeholder="Name" />
                    </div>

                    <div className={styles.formChild}>
                        <input type="email" onChange={getvalue} value={data.uemail} name="uemail" required placeholder="Email" />
                    </div>

                    <div className={styles.formChild}>
                        <input type="email" name="confirmEmail" required placeholder="Confirm Email" />
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} onChange={getvalue} value={data.upassword} name="upassword" required placeholder="Choose a Password" />
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} name="confirmPassword" required placeholder="Confirm Password" />
                        <button type="button" className={styles.showPassword} onClick={() => hidepassword(!password)}>
                            {password ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className={styles.formChild}>
                        <button type="submit">Sign Up</button>
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
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google-logo" />
                        </div>
                        <span>Continue with Google</span>
                    </div>

                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook-logo" />
                        </div>
                        <span>Continue with Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
