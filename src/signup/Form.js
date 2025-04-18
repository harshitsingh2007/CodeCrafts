function Form(){
    return(
        <div className="form-container">
            {/* form started */}
    <form>
        <div className="form-item">
        <div className="form-child">
        <input type="email" required autoComplete="email" placeholder="Email"></input>
        </div>

        <div className="form-child">
        <input type="email" required placeholder="Confirm Email"></input>
        </div>

        <div className="form-child">
        <input type="password" required placeholder="Choose a Password"></input>
        </div>

        <div className="form-child">
        <input type="password" required placeholder="Confirm Password"></input>
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
    <div className="google-container">
        <div className="google-item">
            <a href="">
            <button>
                <div className="google-image"><img src="https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/google-logo.svg"></img></div>
                <span>Continue with google</span>
            </button>
            </a>
        </div>
        <div className="google-item">
            <a href="">
            <button>
                <div className="google-image"><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png"></img></div>
                <span>Continue with Facebook</span>
            </button>
            </a>
        </div>
    </div>
</div>
    );
}
export default Form;