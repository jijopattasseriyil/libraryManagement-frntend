import { useNavigate } from "react-router-dom";
import Input from "../components/Common/Input";
import RegisterpageStyle from "./Register.module.css";
import { useState } from "react";
import { loginApiByUserName, registerUserApi,getRegisteredtaApi } from "../services/AllApis";

function Register() {

  const gotoLoginpage = useNavigate()

 
  
  const [userDetails,setUserDetails] = useState({
    name:"",
    role:"",
    email:"",
    number:"",
    userName:"",
    userPassword:""
  })

  const [formErrors,setErrors]=useState();


  const errors={};
  
  const register = async()=>{
    if(!userDetails.name){
      errors.name="Name Cannot be Empty"
    }
    if(!userDetails.role){
      errors.role="Role Cannot be Empty"
    }
    if(!userDetails.email){
      errors.email="Email Cannot be Empty"
    }
    if(!userDetails.number){
      errors.phoneNumber="Phone Number Cannot be Empty"
    }
    else if(!validateUserPhoneNumber(userDetails.number)){
      errors.phoneNumber="Enter a Valid Phone Number"
    }
    if(!userDetails.userName){
      errors.userName="userName  Cannot be Empty"
    }
    if(!userDetails.userPassword){
      errors.userPassword="userPassword Cannot be Empty"
    }
    setErrors(errors);
    console.log(Object.keys(errors).length);
    if(Object.keys(errors).length!==0){
         alert("Errors")
    }
    else{
   console.log(userDetails.userName,userDetails.role);
      const userExistResponse=await getRegisteredtaApi();
      console.log(userExistResponse);
      if(userExistResponse.data.find((element)=>element.role ===userDetails.role && element.email ===userDetails.email || element.userName===userDetails.userName)){
        alert("Member Alreday Exist")
      }
      else{
        const addResponse= await registerUserApi(userDetails) ;
        alert("Member Created")
        gotoLoginpage('/')
      }
    }
    
  }

  console.log(formErrors);
  const validateUserPhoneNumber=(phoneNumber)=>{
      const regexPhoneNumber=new RegExp("^[0-9]{10}");
      console.log(regexPhoneNumber.test(phoneNumber));
      return regexPhoneNumber.test(phoneNumber)
  }
  const validateUserEmail=(phoneNumber)=>{
    const regexPhoneNumber=new RegExp("^[0-9]{10}");
    console.log(regexPhoneNumber.test(phoneNumber));
    return regexPhoneNumber.test(phoneNumber)
}
  console.log(userDetails);
  const handleUpload = async () => {
  }
  console.log(userDetails);
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
                {formErrors?.name  && <p>{formErrors.name}</p>}
              </div>
              <div>
              <select className="form-control rounded" value={userDetails.role} style={{width:'250px',height:'35px'}} onChange={(e)=>setUserDetails({...userDetails,role:e.target.value})} >
                <option value="" selected disabled>Select One</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              {formErrors?.role  && <p>{formErrors.role}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>Email</h6>
                <Input type="email" placeholder="Enter Your Email" name="email" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                {formErrors?.email  && <p>{formErrors.email}</p>}
              </div>
              <div>
                <h6>Phone Number</h6>
                <Input type="text" placeholder="Enter Your Phone Number" name="number" value={userDetails.number} onChange={(e)=>setUserDetails({...userDetails,number:e.target.value})}/>
                {formErrors?.phoneNumber  && <p>{formErrors.phoneNumber}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>UserName</h6>
                <Input type="text" value={userDetails.userName} placeholder="Please Enter a UserName" name="username" onChange={(e)=>setUserDetails({...userDetails,userName:e.target.value})}/>
                {formErrors?.userName  && <p>{formErrors.userName}</p>}

              </div>
              <div>
                <h6>UserPassword</h6>
                <Input type="passeord" value={userDetails.userPassword} placeholder="Please Enter a Password" name="password" onChange={(e)=>setUserDetails({...userDetails,userPassword:e.target.value})}/>
                {formErrors?.userPassword  && <p>{formErrors.userPassword}</p>}

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
