import { useNavigate } from "react-router-dom";
import Input from "../components/Common/Input";
import RegisterpageStyle from "./Register.module.css";

function Register() {

  const gotoLoginpage = useNavigate()

  const register = ()=>{
    gotoLoginpage('/')
  }
  

  return (
    <>
      <div className={`${RegisterpageStyle.registerStyle}`}>
        <div className={`${RegisterpageStyle.main} `}>
          <h2 className="mt-3">Library MemberShip Registration Form</h2>

          <div>
            <h6>Name</h6>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <Input placeholder="Enter Your First Name" />
                <p>First Name</p>
              </div>
              <div>
                <Input placeholder="Enter Your Last Name" />
                <p>Last Name</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>Email</h6>
                <Input placeholder="Enter Your Email" />
                <p>example@example.com</p>
              </div>
              <div>
                <h6>Phone Number</h6>
                <Input placeholder="Enter Your First Name" />
                <p>Please enter a valid phone number.</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>UserName</h6>
                <Input placeholder="Please Enter a UserName" />
              </div>
              <div>
                <h6>User Password</h6>
                <Input placeholder="Please Enter a Password" />
              </div>
            </div>
          </div>
          <button className="px-2 py-1 rounded mt-3" onClick={register}>Register here</button> 
          <div className="p-4 text-warning">
            Duration of membership From (date of membership approval) to (date
            of membership renewal). Club memberships are renewed annually.
          </div>

         
        </div>
      </div>
    </>
  );
}

export default Register;
