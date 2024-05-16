import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import image from "../assets/library-background.jpg";
import wishlist_style from "./Wishlist.module.css";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { addUserBookApi, getUserWishlistApi, removeWishlist } from "../services/AllApis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [userWishListBook, setUserWishListBook] = useState([]);
  const role = localStorage.getItem('role')
   const naviagte= useNavigate();

  useEffect(() => {
    const getWishListBooks = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await getUserWishlistApi(userId);
        setUserWishListBook(response.data);
        console.log(response);
      } catch (error) {
        console.log("Error");
      }
    };
    getWishListBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const userId = localStorage.getItem("userId");
      const removeStatus = await removeWishlist(userId, bookId);
      // Remove the deleted book from the wishlist state
      setUserWishListBook(userWishListBook.filter(book => book.id !== bookId));
      // setUserWishListBook((prev)=>{
      //   const books = [...prev]
      //   return books.filter((item)=> item.id !==bookId)
      // })
      console.log("Book removed from wishlist");
    } catch (error) {
      console.log("Error removing book from wishlist:", error);
    }
  };

  if(role !== 'user'){
    naviagte('/')
  }

 
  return (
    <>
      <Header />
      <div className={wishlist_style.main}>
     
          <div>
          <Button variant="warning" style={{display:"block"}} className="ms-auto me-4 mt-4" onClick={()=>naviagte('/user')}>
           <FontAwesomeIcon icon={faLeftLong}  /> Back to Home
          </Button>
          </div>
        <div className="row">
          
          <h2 className="text-warning text-center mt-3">Wishlist</h2>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Row className="w-100 ">
              {userWishListBook?.map((userBook) => (
                <Col
                  key={userBook.id}
                  sm={12}
                  md={6}
                  lg={3}
                  className="mt-3 mb-3"
                >
                  <Card style={{ width: "15rem", marginTop: "2px" }}>
                    <Card.Img variant="top" style={{ height: "200px" }} src={userBook.imageLink} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      ></Card.Title>
                      <Card.Text
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        <p>Author : {userBook.author}</p>
                        <p>Genre : {userBook.genre}</p>
                      </Card.Text>
                      <Button variant="primary" className="me-2" >
                        Take Book
                      </Button>
                      <Button variant="warning" className="ms-2" onClick={()=>handleDelete(userBook?.id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
