import { useNavigate } from "react-router-dom";
import Input from "../components/Common/Input";
import RegisterpageStyle from "./Register.module.css";
import { useState } from "react";

function Register() {

  const gotoLoginpage = useNavigate()

  const register = ()=>{
    gotoLoginpage('/')
    handleUpload()
  }
  
  const [userDetails,setUserDetails] = useState({
    name:"",
    role:"",
    email:"",
    number:"",
    userName:"",
    userPassword:""
  })
  console.log(userDetails);
  const handleUpload = async () => {
    console.log(userDetails);
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
                <Input type="text" placeholder="Enter Your First Name" value={userDetails.name} onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})}/>
                <p>Name</p>
              </div>
              <div>
              <select className="form-control rounded" value={userDetails.role} style={{width:'270px',height:'33px'}} onChange={(e)=>setUserDetails({...userDetails,role:e.target.value})} >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

                <p>Role</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>Email</h6>
                <Input type="email" placeholder="Enter Your Email" name="email" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                <p>example@example.com</p>
              </div>
              <div>
                <h6>Phone Number</h6>
                <Input type="number" placeholder="Enter Your First Name" name="number" value={userDetails.number} onChange={(e)=>setUserDetails({...userDetails,number:e.target.value})}/>
                <p>Please enter a valid phone number.</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>UserName</h6>
                <Input type="text" value={userDetails.userName} placeholder="Please Enter a UserName" name="username" onChange={(e)=>setUserDetails({...userDetails,userName:e.target.value})}/>
              </div>
              <div>
                <h6>UserPassword</h6>
                <Input type="passeord" value={userDetails.userPassword} placeholder="Please Enter a Password" name="password" onChange={(e)=>setUserDetails({...userDetails,userPassword:e.target.value})}/>
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
