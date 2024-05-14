import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUserGroup , faTrash,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import NameTime from "../components/Common/NameTime"
import Button from 'react-bootstrap/Button';
import List_of_BooksStyle from "./List_of_Books.module.css";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserWishlistApi, getUserSelectedBooks, returnUserBook } from "../services/AllApis"

function UserPage() {

    const navBookList = useNavigate();

    const userId=localStorage.getItem("userId");

    const gotoLibrary = ()=>{
        navBookList('/list')
    }

    const[userbooks,setUserBooks]=useState([]);

    useEffect(()=>{
          const getUserBooks=async()=>{
              try{
                console.log(userId);
                const userBookss=await getUserSelectedBooks(userId);
                console.log(userBookss,"The User Books");
                setUserBooks(userBookss.data)
              }
              catch(error){
                    console.log("Error");
              }
          }
          getUserBooks();
         
    },[userId])
    
    // for wishlist count
    const[wishlistCount,setWishlistCount] = useState(0)
    useEffect(()=>{
        const userWishlistCount = async() =>{
            try{
                const count = await getUserWishlistApi(userId)
                 setWishlistCount(count.data?.length) 
               
            }
            catch(error){
                console.log(error);
            }
        }
        userWishlistCount();
    },[userId])


    const returnUserBooks=async(bookId)=>{
        try{
            const removeStatus= await returnUserBook(bookId);
            console.log(removeStatus);
            if(!removeStatus.ok){
                throw new Error("Some Error Ocuured")
            }
            setUserBooks((prevUserBooks)=>{
                const userBooks=[...prevUserBooks];
                return userBooks.filter((userBook)=>userBook.id!==bookId)
            })
        } 
        catch(error){
                console.log(error.message);
        }
         
    }

  return (
    <>
        <Header/>
        <div className={`${List_of_BooksStyle.image} `}>
          <div className="ms-3 ">
          <div>
          <NameTime userName="User"/>
          <Button variant="warning" className='mt-2' onClick={gotoLibrary}>Go to Library <FontAwesomeIcon icon={faArrowRight} fade style={{color: "#ffffff",}} /></Button>
          </div>
  
          <div className='row mt-5 ms-3'>
                  <div className='col-md-3'>
                  <div  style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px',marginBottom:'20px'}}>
                          <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>1223</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Total Books</p>
                      </div>
                      <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px',marginBottom:'20px'}}>
                      <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>{userbooks.length}</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faBook} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Borrowed Books</p>
                  </div>
                  <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                      <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>{wishlistCount}</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faBook} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Wishlested Books</p>
                  </div>
                  </div>
                  <div className="col-md-1"></div>
                  <div className='col-md-7'>
                  <div style={{height:'350px',width:'100%', color:'white',backgroundColor:'#4d4948', borderRadius:'20px', marginBottom:'30px',overflowY:'scroll'}}>
                      <div className='me-3 d-flex align-items-center justify-content-between'>
                          <h4 className='ms-3 pt-3'>Book List</h4>
                      </div>
                      <table className='ms-5 mt-4' style={{width:'90%'}}>
                          <thead>
                              <tr className='border-bottom border-light'>
                                  <th>Title</th>
                                  <th>Author</th>
                                  <th>Date</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                          
                              {userbooks.map(userbook=>{
                                return (<tr key={userbook.id} className='border-bottom border-light'>
                                  <td>{userbook.title}</td>
                                  <td>{userbook.author}</td>
                                  <td>{userbook.timeStamp}</td>
                                  <td><button className="px-2 py-1 rounded" onClick={()=>{returnUserBooks(userbook.id)}}>Return Book</button></td>
                              </tr>)
                                

                               })} 
                          </tbody>
                      </table>
                      
                  </div>
                  </div>
                  <div className="col-md-1"></div>
                  
                  
              </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default UserPage

