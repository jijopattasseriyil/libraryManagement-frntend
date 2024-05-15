import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AdminNavrBarStyle from "./AdminNavBar.module.css";
import { useRef, useState} from "react";
import LogoutModal from "../LogoutModal";
import AddBookModal from "./AddBookModal";
import { searchBookapi } from "../../services/AllApis";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminNavBar = ({handleAddNewBook,setSearchResults}) => {
  const [inputSearch,setInputSearch] = useState("")

  const modal = useRef();

  const addBookModalRef=useRef();


  const hideModal=()=>{
    modal.current.close();

  }

  const hideAddBookModal=()=>{
    addBookModalRef.current.close();
  }


  const openAddModalHandler=()=>{
    addBookModalRef.current.showModal();
  }

console.log(inputSearch);

  const handleChange = (event)=>{
    setInputSearch(event.target.value)
  }

  const handleSearch = async() =>{
    const response = await searchBookapi()
    console.log(response.data);
    const books = response.data

    const searchItem = books.filter(book=> book.title.toLowerCase().startsWith(inputSearch.toLowerCase()));
    console.log(searchItem);

    if(searchItem.length==0){
      toast.error('No Book Found')
    }else{
      setSearchResults(searchItem)
    }
    setInputSearch("")
    
  }


  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-warning py-2">
        <div>
          <p className="px-2 my-auto">Dashboard</p>
        </div>
        <div className={AdminNavrBarStyle.leftsection}>
          <div className={AdminNavrBarStyle.searchSection}>
            <input
              type="text"
              className="form-control text-black"
              placeholder="Search books"
              onChange={handleChange}
              value={inputSearch}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={AdminNavrBarStyle.searchIcon}
              onClick={handleSearch}
            />
          </div>

          <div>
            <button className="px-3 py-1 text-white btn btn-primary h6 my-auto rounded" onClick={openAddModalHandler}>
              Add Book
            </button>
          </div>

          <div className={AdminNavrBarStyle.avatarDesigin}>
            <FontAwesomeIcon icon={faBell} className="fa-xl" />
          </div>
        </div>
        <LogoutModal ref={modal}  hideModal={hideModal}/>
        <AddBookModal ref={addBookModalRef} hideAddBookModal={hideAddBookModal} handleAddNewBook={handleAddNewBook}/>
      </div>

      <ToastContainer theme='colored' position="top-center"  autoClose={2000}/>
    </>
  );
};

export default AdminNavBar;
