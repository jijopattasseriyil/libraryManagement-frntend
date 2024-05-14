import { useState } from "react";
import LoginPageStyles from "./LoginPage.module.css";
import { loginApiByUserName } from "../services/AllApis";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();


  const [errorDetails, setErrorDetails] = useState();


  const errors = {};

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getUserName = formData.get("userName");
    const getUserPassword = formData.get("userPassword");
    const getRole = formData.get("role");

    console.log(getRole);
    if (!getUserName) {
      console.log("UserName Cannot Be Empty");
      errors.userName = "UserName Cannot Be Empty";
    }
    if (!getUserPassword) {
      console.log("UserPassword Cannot Be Empty");
      errors.userPassword = "UserPassword Cannot Be Empty";
    }
    if(!getRole){
      console.log("Please Select a Role");
      errors.userRole = "Please Select a Role";
    }

    if (Object.keys(errors).length === 0) {
      setErrorDetails();
      const userData = (await loginApiByUserName(getUserName, getRole)).data;

      // Checking for the data that has the same userPassword
      const userLoginDetials = userData.filter((data) => {
        return data.userPassword === getUserPassword;
      });

      if (userLoginDetials.length != 0) {
        if (userLoginDetials[0].role) {
          localStorage.setItem('userId',userLoginDetials[0].id)
          nav(userLoginDetials[0].role);
        }
      } else {
        alert("Invalid User Name || Inavlid   Password");
      }
    } else {
      setErrorDetails(errors);
    }
  };

  return (
    <div
      className={`${LoginPageStyles.loginPage} w-full vh-100  loginPage d-flex flex-column align-items-center justify-content-center`}
    >
      <div
        className={`${LoginPageStyles.loginPageContent} d-flex flex-column  mt-5 py-4
            rounded align-items-center  loginPageContent`}
      >
        {/* For Logo */}
        <div className={`${LoginPageStyles.LogoDiv}   gap-6 p-4`}>
          <img src="src/assets/logo.png" alt="" />
          <div>
            <h2 className="text-warning text-center">
              {" "}
              <span className="text-start mr-auto text-primary">
                <span className="text-warning">L</span>ibrarian
                <span className="text-warning">P</span>ro
              </span>{" "}
              <br />
              Digital Library{" "}
            </h2>
            <p className="text-light">
              where every <span className="text-primary">click</span> opens the
              gateway to endless learning
            </p>
          </div>
        </div>

        <div className={` d-flex w-75  flex-column align-items-center`}>
          <form
            className={LoginPageStyles.loginForm}
            onSubmit={loginHandler}
            id="fomrData"
          >
            <div className=" d-flex flex-column align-items-center ">
              <label htmlFor="" className="text-warning fw-normal px-2">
                UserName
              </label>
              <input
                type="text"
                placeholder="Enter Your UserName"
                className="form-control"
                name="userName"
              />
              {errorDetails?.userName && (
                <p className="text-danger">{errorDetails?.userName}</p>
              )}
            </div>
            <div className=" mt-2 d-flex flex-column align-items-center">
              <label htmlFor="" className="text-warning fw-normal px-2">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="form-control"
                name="userPassword"
              />
              {errorDetails?.userPassword && (
                <p className="text-danger">{errorDetails?.userPassword}</p>
              )}
            </div>
            <div className="text-warning mt-2 d-flex  align-items-center">
              <h5 className="me-5 align-items-center">
                User <input type="radio" name="role" value="user" />
              </h5>
              <h5 className="align-items-center">
                Admin <input type="radio" name="role" value="admin" />
              </h5>
            </div>
            {<p className="text-danger">{errorDetails?.userRole}</p>}
            <button
              className="px-4 py-1 bg-warning rounded mt-3"
              // onClick={checkLogin}
            >
              Login
            </button>
            <div className="mt-4 text-primary">
              <h6>
                Are you a new user?..{" "}
                <a href="/register" className="text-warning">
                  Register Now
                </a>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
