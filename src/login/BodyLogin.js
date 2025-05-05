import styles from '../signup/Signup.module.css'
function Bodylogin(){
    return(
      <div className={styles.bodyContainer}>
            <div className={styles.bodyItem1}>
            <h1>Login Up to CodeCrafts</h1>
            <span>Not Have an Account?</span>
                <span>
               <a href="">Sign Up</a></span>
            </div>
        </div>
    );
}
export default Bodylogin;