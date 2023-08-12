import React,{useEffect,useState} from "react";
import { AuthenticationService,StorageService } from "../services";
import { GeneralAction } from '../actions'
import {useSelector, useDispatch} from 'react-redux';
import '../Styles/auth.css'
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate()

  const { isAppLoading, token } = useSelector(
    state => state.generalState
  );

  useEffect(()=>{
    if(token){
      navigate('/dashboard')
    }
  },[])

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async () => {
    let user = {
      username,
      password,
    };
  
    setIsLoading(true);
  
    try {
      const response = await AuthenticationService.login(user);
      console.log("Response", response.data);
      setIsLoading(false);
      if (response?.status) {
        await StorageService.setToken(response.data);
        dispatch(GeneralAction.setToken(response.data));
        navigate('/dashboard')
      } else {
        setErrorMessage(response?.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserName = (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img
              src="https://res.cloudinary.com/dghqyted6/image/upload/v1690637201/image_5_bwll40.png"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
          <img
              src="https://res.cloudinary.com/dghqyted6/image/upload/v1690637201/image_5_bwll40.png"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
             <div className="title-main">
             <div className="title">Login 
            </div>
            <span>Use your credentials to Login!</span>
                </div> 
              <div >
                <div className="input-boxes">
                <div className="input-box">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                    >
                      <path
                        d="M0 2.39443L0.193468 1.79883L7.44381 8.98051L0.187833 16.1628L0 15.6054V2.39443Z"
                        fill="#40128B"
                      />
                      <path
                        d="M1.21411 0.737658C1.49836 0.675095 1.73816 0.620039 1.97922 0.574993C2.06453 0.564021 2.15066 0.56088 2.23655 0.565608C8.74307 0.565608 15.2494 0.568319 21.7555 0.573742C22.0829 0.573742 22.4098 0.653823 22.7366 0.698869L22.8099 0.850899C22.7322 0.888437 22.6364 0.909083 22.5788 0.966641C19.2788 4.27 15.9813 7.57503 12.6863 10.8817C12.2267 11.3428 11.7835 11.3447 11.3276 10.888C8.02221 7.57587 4.71802 4.26375 1.41509 0.951626C1.36125 0.897821 1.30991 0.840263 1.21411 0.737658Z"
                        fill="#40128B"
                      />
                      <path
                        d="M1.25226 17.2327L8.49947 10.0623C9.10554 10.6654 9.75168 11.3136 10.3997 11.9524C11.106 12.6499 12.1008 12.8364 12.963 12.4072C13.211 12.2764 13.4378 12.1092 13.6361 11.9111C14.2202 11.348 14.7862 10.7649 15.3597 10.1899C15.4223 10.1274 15.4812 10.0742 15.5113 10.0454L22.796 17.2571C22.5068 17.3197 22.2726 17.3823 22.0353 17.4254C21.9345 17.437 21.8329 17.4395 21.7316 17.4329C15.2422 17.4329 8.75283 17.4329 2.26342 17.4329C1.91656 17.4342 1.58034 17.4004 1.25226 17.2327Z"
                        fill="#40128B"
                      />
                      <path
                        d="M23.8328 16.2243L16.5562 9.01636L23.8366 1.81152C23.8867 2.06616 23.9913 2.3502 23.9919 2.63486C24.0027 6.88002 24.0027 11.125 23.9919 15.3697C23.9913 15.65 23.8898 15.9296 23.8328 16.2243Z"
                        fill="#40128B"
                      />
                    </svg>
                  <div>
                  <label>Enter your username</label>
              
                    <input
                      type="text"
                      placeholder=""
                      onChange = {handleUserName}
                      required
                    />
                  </div>
                  </div>
                  <div className="input-box">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                    >
                      <path
                        d="M3.14289 24C2.51432 24 1.97604 23.776 1.52804 23.328C1.08004 22.88 0.856418 22.3421 0.85718 21.7143V10.2857C0.85718 9.65714 1.08118 9.11886 1.52918 8.67086C1.97718 8.22286 2.51508 7.99924 3.14289 8H4.28575V5.71429C4.28575 4.13333 4.84308 2.78552 5.95775 1.67086C7.07242 0.556191 8.41985 -0.000761124 10 7.8064e-07C11.581 7.8064e-07 12.9288 0.557334 14.0435 1.672C15.1581 2.78667 15.7151 4.1341 15.7143 5.71429V8H16.8572C17.4858 8 18.024 8.224 18.472 8.672C18.92 9.12 19.1437 9.65791 19.1429 10.2857V21.7143C19.1429 22.3429 18.9189 22.8811 18.4709 23.3291C18.0229 23.7771 17.485 24.0008 16.8572 24H3.14289ZM10 18.2857C10.6286 18.2857 11.1669 18.0617 11.6149 17.6137C12.0629 17.1657 12.2865 16.6278 12.2858 16C12.2858 15.3714 12.0618 14.8331 11.6138 14.3851C11.1658 13.9371 10.6278 13.7135 10 13.7143C9.37146 13.7143 8.83318 13.9383 8.38518 14.3863C7.93718 14.8343 7.71356 15.3722 7.71432 16C7.71432 16.6286 7.93832 17.1669 8.38632 17.6149C8.83432 18.0629 9.37223 18.2865 10 18.2857ZM6.57147 8H13.4286V5.71429C13.4286 4.76191 13.0953 3.95238 12.4286 3.28571C11.7619 2.61905 10.9524 2.28571 10 2.28571C9.04766 2.28571 8.23813 2.61905 7.57147 3.28571C6.9048 3.95238 6.57147 4.76191 6.57147 5.71429V8Z"
                        fill="#40128B"
                      />
                    </svg>
                  <div>
                  <label>Enter your password</label>
              
                    <input
                      type="text"
                      placeholder="Enter your password"
                      onChange={handlePassword}
                      required
                    />
                  </div>
                  </div>
                
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box" onClick={()=>signIn()}>
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?
                    <label htmlFor="flip">Sigup now</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-form">
            <div className="title-main">
             <div className="title">Sign up 
            </div>
            <span>let’s get started by creating your account</span>
                </div> 
              <form action="#">
                <div className="input-boxes">
             
                  <div className="input-box">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      fill="none"
                    >
                      <path
                        d="M0 2.39443L0.193468 1.79883L7.44381 8.98051L0.187833 16.1628L0 15.6054V2.39443Z"
                        fill="#40128B"
                      />
                      <path
                        d="M1.21411 0.737658C1.49836 0.675095 1.73816 0.620039 1.97922 0.574993C2.06453 0.564021 2.15066 0.56088 2.23655 0.565608C8.74307 0.565608 15.2494 0.568319 21.7555 0.573742C22.0829 0.573742 22.4098 0.653823 22.7366 0.698869L22.8099 0.850899C22.7322 0.888437 22.6364 0.909083 22.5788 0.966641C19.2788 4.27 15.9813 7.57503 12.6863 10.8817C12.2267 11.3428 11.7835 11.3447 11.3276 10.888C8.02221 7.57587 4.71802 4.26375 1.41509 0.951626C1.36125 0.897821 1.30991 0.840263 1.21411 0.737658Z"
                        fill="#40128B"
                      />
                      <path
                        d="M1.25226 17.2327L8.49947 10.0623C9.10554 10.6654 9.75168 11.3136 10.3997 11.9524C11.106 12.6499 12.1008 12.8364 12.963 12.4072C13.211 12.2764 13.4378 12.1092 13.6361 11.9111C14.2202 11.348 14.7862 10.7649 15.3597 10.1899C15.4223 10.1274 15.4812 10.0742 15.5113 10.0454L22.796 17.2571C22.5068 17.3197 22.2726 17.3823 22.0353 17.4254C21.9345 17.437 21.8329 17.4395 21.7316 17.4329C15.2422 17.4329 8.75283 17.4329 2.26342 17.4329C1.91656 17.4342 1.58034 17.4004 1.25226 17.2327Z"
                        fill="#40128B"
                      />
                      <path
                        d="M23.8328 16.2243L16.5562 9.01636L23.8366 1.81152C23.8867 2.06616 23.9913 2.3502 23.9919 2.63486C24.0027 6.88002 24.0027 11.125 23.9919 15.3697C23.9913 15.65 23.8898 15.9296 23.8328 16.2243Z"
                        fill="#40128B"
                      />
                    </svg>
                  <div>
                  <label>Enter your Email</label>

                    <input
                      type="password"
                      placeholder=""
                      required
                    />
                  </div>
                  </div>
                  <div className="input-box">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                    >
                      <path
                        d="M3.14289 24C2.51432 24 1.97604 23.776 1.52804 23.328C1.08004 22.88 0.856418 22.3421 0.85718 21.7143V10.2857C0.85718 9.65714 1.08118 9.11886 1.52918 8.67086C1.97718 8.22286 2.51508 7.99924 3.14289 8H4.28575V5.71429C4.28575 4.13333 4.84308 2.78552 5.95775 1.67086C7.07242 0.556191 8.41985 -0.000761124 10 7.8064e-07C11.581 7.8064e-07 12.9288 0.557334 14.0435 1.672C15.1581 2.78667 15.7151 4.1341 15.7143 5.71429V8H16.8572C17.4858 8 18.024 8.224 18.472 8.672C18.92 9.12 19.1437 9.65791 19.1429 10.2857V21.7143C19.1429 22.3429 18.9189 22.8811 18.4709 23.3291C18.0229 23.7771 17.485 24.0008 16.8572 24H3.14289ZM10 18.2857C10.6286 18.2857 11.1669 18.0617 11.6149 17.6137C12.0629 17.1657 12.2865 16.6278 12.2858 16C12.2858 15.3714 12.0618 14.8331 11.6138 14.3851C11.1658 13.9371 10.6278 13.7135 10 13.7143C9.37146 13.7143 8.83318 13.9383 8.38518 14.3863C7.93718 14.8343 7.71356 15.3722 7.71432 16C7.71432 16.6286 7.93832 17.1669 8.38632 17.6149C8.83432 18.0629 9.37223 18.2865 10 18.2857ZM6.57147 8H13.4286V5.71429C13.4286 4.76191 13.0953 3.95238 12.4286 3.28571C11.7619 2.61905 10.9524 2.28571 10 2.28571C9.04766 2.28571 8.23813 2.61905 7.57147 3.28571C6.9048 3.95238 6.57147 4.76191 6.57147 5.71429V8Z"
                        fill="#40128B"
                      />
                    </svg>
                  <div>
                  <label>Password</label>

                    <input
                      type="password"
                      placeholder=""
                      required
                    />
                  </div>
                  </div>
                  <div className="input-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
<path d="M11.8807 0.707031C17.1213 0.932298 21.0898 3.10608 23.8238 7.45834C24.0591 7.83267 24.0584 8.17692 23.8238 8.55392C21.5878 12.1702 18.3813 14.3794 14.1982 15.1047C8.67011 16.0539 2.98631 13.3574 0.146083 8.49777C-0.0544506 8.15085 -0.0477661 7.82932 0.161457 7.48908C2.35218 3.92404 5.50145 1.74936 9.60927 0.965051C10.4 0.81532 11.2122 0.78056 11.8807 0.707031ZM12.0083 3.00916C11.019 3.00798 10.0515 3.30003 9.22814 3.84843C8.40473 4.39684 7.76233 5.17698 7.3821 6.0903C7.00186 7.00362 6.90084 8.00915 7.09181 8.97986C7.28278 9.95057 7.75716 10.8429 8.45503 11.5441C9.1529 12.2454 10.0429 12.724 11.0127 12.9196C11.9825 13.1153 12.9885 13.0191 13.9036 12.6432C14.8188 12.2674 15.602 11.6288 16.1543 10.808C16.7067 9.98723 17.0034 9.02117 17.007 8.03186C17.0088 7.37378 16.881 6.72178 16.6307 6.11313C16.3804 5.50449 16.0127 4.95112 15.5485 4.48467C15.0843 4.01821 14.5327 3.64781 13.9252 3.39464C13.3178 3.14146 12.6664 3.01047 12.0083 3.00916Z" fill="#40128B"/>
<path d="M12.0022 11.4165C11.3291 11.4165 10.6712 11.2169 10.1115 10.843C9.55191 10.469 9.11573 9.93753 8.85817 9.31571C8.6006 8.69388 8.5332 8.00964 8.66451 7.34951C8.79582 6.68938 9.11993 6.08301 9.59586 5.60709C10.0718 5.13116 10.6781 4.80705 11.3383 4.67574C11.9984 4.54443 12.6826 4.61183 13.3045 4.8694C13.9263 5.12697 14.4578 5.56314 14.8317 6.12277C15.2057 6.6824 15.4052 7.34035 15.4052 8.01341C15.4037 8.91547 15.0446 9.78013 14.4068 10.418C13.7689 11.0558 12.9042 11.4149 12.0022 11.4165Z" fill="#40128B"/>
</svg>
                  <div>
                  <label>Confirm Password</label>
              
                    <input
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;