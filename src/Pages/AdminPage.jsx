import { useEffect, useState } from "react";
import AdminDashBoard from "../components/Admin/AdminDashBoard";
import AdminNavBar from "../components/Admin/AdminNavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import { getUploadedBookApi } from "../services/AllApis";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
 

  const role=localStorage.getItem("role")

  const [getAllBooks, setAllBooks] = useState([]);
  // search state 
  const [searchResults,setSearchResults] = useState([])

  const[isLoading,setIsLoading]=useState(false);




  function showFullData(){
    setSearchResults([])
  }

   const navigate=useNavigate();

  useEffect(() => {
    const getBookLists = async () => {
      try {
        setIsLoading(true)
        const bookLists = await getUploadedBookApi();
        if (bookLists.status != 200) {
          throw new Error("Something Went Wrong");
        }
        setAllBooks(bookLists.data);
      } catch (error) {
        alert(error);
      }
      finally{
        setIsLoading(false)
      }
    };
    getBookLists();
  }, []);

  function handleAddNewBook(response) {
    setAllBooks((prev) => {
      return [...prev, response];
    });
  }

  function deleteData(bookId) {
    setAllBooks((prev) => {
      const previousData = [...prev];
      const changedData = previousData.filter((data) => {
        return data.id != bookId;
      });
      return changedData;
    });

  }

  console.log(getAllBooks, "Here");

  if(role!=='admin')
  {
    navigate("/")
  } 

  return (
    <div className={`${List_of_BooksStyle.image} `}>
      <Header />
      <AdminNavBar handleAddNewBook={handleAddNewBook} setSearchResults={setSearchResults} />
       
        <AdminDashBoard getAllBooks={getAllBooks} deleteData={deleteData} isLoading={isLoading} searchResults={searchResults} showFullData={showFullData}/>

      <Footer />
    </div>
  );
};

export default AdminPage;
