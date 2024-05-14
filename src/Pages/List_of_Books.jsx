import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { getUploadedBookApi } from '../services/AllApis';
import { useEffect, useState } from 'react';

// const dropDownLists=["Novels","Fantasy","Romance","Biography/Autobiography","Chrime Thriller","Travel","Cooking/Food","History","Encyclopedias"]
function List_of_Books() {

  const navgivate = useNavigate()


  const [availableBooksData,setAvailableBooksData] = useState([])

  // const[filteredbook,setFilteredBooks]=useState();

  const [filteredbookCriteria, setFilteredBooksCriteria] = useState("");

  const[searchWords,setSearchWord]=useState("");

  // const getBook = async() =>{
  //   try{
  //     const response = await getUploadedBookApi();
  //         console.log("hERE");
  //     if(response.status!=200 ){
  //       throw new Error("SomeThing Went Wrong")
  //     } 
  //     console.log("Here below throw");
  //     setAvailableBooksData(response.data);
  //     // setFilteredBooks(response.data)  


  //   }
  //   catch(error){
  //     console.log(error);
  //         alert(error);
  //   }
  //     // console.log(response.data);
  // }



  // useEffect(()=>{
  //     getBook();
  // },[])

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await getUploadedBookApi();
        if (response.status != 200) {
          throw new Error("SomeThing Went Wrong");
        }
        setAvailableBooksData(response.data);
        // setFilteredBooks(response.data)
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };

    getBook();
  }, []);
 
  console.log(availableBooksData,"availableBooksData");
  // console.log(filteredbook,"filteredbook");

  const backtoHome = ()=>{
    navgivate('/user')
  }

  const getBookGenere = (e) => {
    setFilteredBooksCriteria(e.target.value);
  };

  let filteredData = availableBooksData.filter((availableBookData) => {
    return filteredbookCriteria === ""
      ? availableBookData
      : availableBookData.genre === filteredbookCriteria;
  });
    console.log(filteredData, "filteredData");

  const getSearchDetails=(e)=>{
    setSearchWord(e.target.value);
    filteredData=availableBooksData.filter((availableBookData) => {
      return e.target.value === ""
        ? availableBookData
        : availableBookData.title.startsWith(e.target.value);
    });
    console.log(filteredData);
  }
  return (
    <>
      <Header />

      <div className={List_of_BooksStyle.main}>
        <div className={List_of_BooksStyle.head}>
                    
            <h3 className="text-light">Get your Books</h3>
            
           <div style={{position:"relative"}}>
           <FontAwesomeIcon icon={faMagnifyingGlass} flip style={{color: "#ffffff",marginRight:'5',position:"absolute",right:"0",top:"0.5rem"}} />
           <input
              type="text"
              placeholder="Search Books"
              style={{
                borderColor: "white",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "5px",
                width:"300px",
                height:"33px",
                textAlign:"center",
                justifyContent:"center",
                borderBlockStyle:"solid",
                borderWidth:"2px",
                borderLeftColor:"white"
              }}
            />
           </div>
           <select  onChange={getBookGenere} style={{width:'250px', backgroundColor:'transparent'}} className="form-control">
              <option value="" selected disabled>Select One</option>
              <option value="Novels" style={{backgroundColor:'gray'}}>Novels</option>
              <option value="Fiction" style={{backgroundColor:'white'}}>Fiction</option>
              <option value="Fantasy" style={{backgroundColor:'gray'}}>Fantasy</option>
              <option value="Romance" style={{backgroundColor:'white'}}>Romance</option>
              <option value="Biography/Autobiography" style={{backgroundColor:'gray'}}>Biography/Autobiography</option>
              <option value="Chrime Thriller" style={{backgroundColor:'white'}}>Chrime Thriller</option>
              <option value="Travel" style={{backgroundColor:'gray'}}>Travel</option>
              <option value="Cooking/Food" style={{backgroundColor:'white'}}>Cooking/Food</option>
              <option value="History" style={{backgroundColor:'gray'}}>History</option>
              <option value="Encyclopedias" style={{backgroundColor:'white'}}>Encyclopedias</option>
            </select>
          

            <Button variant="warning" className='ms-2' onClick={backtoHome}>Back to Home</Button>
          
        </div>




        <div className="row" style={{paddingInline:"10px" , paddingBottom:"10px"}}>
           <div className="row">
           <h4 className="text-light">Category Name</h4>
           </div>
             <div className="col-1"></div>
             <div className="col-10">
             <Row className="w-100 ">
              {filteredData?.length > 0 ? (
                filteredData.map((item) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={3}
                    className="mt-3"
                    key={filteredData.id}
                  >
                    <Cards displayCard={item} />
                  </Col>
                ))
              ) : (
                <p className="mt-5 text-warning">No Books Uploaded Yet..</p>
              )}
            </Row>
           
             </div>
             
             
        </div>


      </div>

      <Footer />
    </>
  );
}

export default List_of_Books;
