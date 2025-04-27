import React, { useState } from 'react'

function FormLogin(){
let [showpass,showpasshide]=useState(false)
  return (
    <div className="form-container">
    {/* form started */}
<form>
<div className="form-item">
<div className="form-child">
<input type="email" required autoComplete="email" placeholder="Email"></input>
</div>

<div className="form-child">
    <input type={showpass ? 'text' : 'password'} required placeholder="Enter Your Password"></input>
    <div>
        <a type='button'className="show-password" onClick={()=>showpasshide(!showpass)}>{showpass?"Hide":"Show"}</a>
    </div>
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
export default FormLogin;
