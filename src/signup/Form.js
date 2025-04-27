import React, { useState } from "react";
function Form() {
    let [password, hidepassword] = useState(false)
    return (
        <div className="form-container container">
            {/* form started */}
            <form >
                <div className="form-item">
                    <div className="form-child">
                        <input type="email" required autoComplete="email" placeholder="Email"></input>
                    </div>

                    <div className="form-child">
                        <input type="email" required placeholder="Confirm Email"></input>
                    </div>

                    <div className="form-child">
                        <input type={password ? 'text' : 'password'} required placeholder="Choose a Password" />
                    </div>

                    <div className="form-child">
                        <input type={password ? 'text' : 'password'} required placeholder="Confirm Password"></input>
                        <a type="button" className="show-password" onClick={() => hidepassword(!password)}>
                        {password ? 'hide' : 'show'}
                        </a>
                    </div>

                    <div className="form-child">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
            {/* form ended */}

            {/* or line */}
            <div className="or-line-container">
                <div className="or-line"></div>
                <span>or</span>
                <div className="or-line"></div>

            </div>
            {/* or line */}

            {/* google login */}
            <div className="google-login-container">
                <div className="google-login">

                    <div className="google-login-child">
                        <div className="google-login-img">
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google-logo"></img>
                        </div>
                        <span>Continue with Google</span>
                    </div>

                    <div className="google-login-child">
                        <div className="google-login-img">
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