import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import '../static/scss/app.scss'
function LoggesOut(props) {
  return (
    <ul>
      <li className="signup " >
        <Link className=" btnv-1" to="/register">
        Register
        </Link>
      </li>
      <li className="signin"> 
        <Link className="text-blue btnv-3" to="/login">
        Sign In
        </Link>         
      </li>
    </ul>
  )
}

const Header = (props) => {
  // const auth = props.auth;
  const handleLogOut=()=>{
   console.log('The user will sign out');
  }

  return (  
  <header className="header">
  <nav className="nav">
      {/* <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a>  */}
        <div className="header-links full-height">

        {/* { isLoaded(auth) && !isEmpty(auth) ?<> */}

          <ul>
            <li className="signin ">
              <Link className="  " to="/">
               Logged in as 
              </Link>
            </li>
            
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>

        {/* </>:<LoggesOut></LoggesOut>} */}
          
          <ul id="nav-mid">
            <li>
            <Link className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </Link>
            </li> 
            <li className="holder-pricing">            
              <Link className="btn-nvt-gm" to="/about-us">
              About Us
              </Link>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

// const mapStateToProps=(state)=>{
//   return{
//      auth: state.firebase.auth
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
//   return {
//    signOut:()=>dispatch(authActions.signout())
//   }
// }
export default Header;
