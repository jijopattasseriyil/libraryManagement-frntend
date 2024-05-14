import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import avatar from "../assets/avatar.jpg";
import { useRef} from "react";
import LogoutModal from './LogoutModal';


function Header() {

  const modal = useRef();

  const showModalHanlder = () => {
    modal.current.showModal();
  };

  const hideModal=()=>{
    modal.current.close();

  }
  
  return (
    <>
        <div>
          <Navbar className="bg-dark bg-gradient p-0 align-items-center justify-content-center">
            <Container className='justify-content-between p-2'>
          
              <img
                src={logo}
                width="60"
                height="60"
                alt="Library Logo"
                style={{borderRadius:'5rem'}}
              />
           
              <div className='align-items-center justify-content-center'>

                <h2 className='d-flex text-light text-align-center mb-0 justify-content-center'><span className="text-warning">L</span>ibrarian<span className="text-warning">P</span>ro</h2>
                <p className="text-light text-align-center mb-0">where every <span className="text-primary">click</span> opens the gateway to endless learning</p>

              </div>

              <div className='text-warning align-items-center'>

                <button className="rounded-circle" onClick={showModalHanlder}>
                  {" "}
                  <img src={avatar} alt="Avatar Logo" className="rounded-circle" style={{height:"40px", width:"40px",}} />
                </button>
                <p className='mb-0'>Logout</p>

              </div>          
           
              <LogoutModal ref={modal}  hideModal={hideModal}/>
           
            </Container>
         </Navbar>

        </div>
    </>
  )
}

export default Header