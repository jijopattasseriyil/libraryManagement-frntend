import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";


const LogoutModal = forwardRef(function LogoutModal({ hideModal }, ref) {

 const backtoLogin =  useNavigate()

 const redirecttoLogin  = ()=>{
  backtoLogin('/')
 }

  return (
    <dialog ref={ref} className="mx-auto my-5 p-4 rounded" >
      <div className="d-flex flex-column  mt-2 align-items-center">
       <h4> Are You Sure..?..</h4>
        <div className="px-4 d-flex justify-content-between mt-3">
          <button style={{backgroundColor:"gold"}} className="px-3 py-1 btn rounded me-3" onClick={redirecttoLogin}>Yes</button>
          <button style={{backgroundColor:"green"}} className="px-3 py-1 btn rounded " onClick={hideModal}>No</button>
        </div>
      </div>
    </dialog>
  );
});

export default LogoutModal;
