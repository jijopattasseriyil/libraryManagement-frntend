import React from "react";
import Header from "../components/Header";
import image from "../assets/library-background.jpg";
import wishlist_style from "./Wishlist.module.css";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Wishlist() {
  return (
    <>
      <Header />
      <div className={wishlist_style.main}>
        <div className="row">
          <h2 className="text-warning text-center mt-3">Wishlist</h2>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Row className="w-100 ">
              <Col sm={12} md={6} lg={3} className="mt-3 mb-3">
                <Card style={{ width: "15rem", marginTop: "2px" }}>
                  <Card.Img variant="top" style={{ height: "200px" }} />
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
                      <p>Author : </p>
                      <p>Genre :</p>
                    </Card.Text>
                    <Button variant="primary" className="me-2">
                      Take Book
                    </Button>
                    <Button variant="warning" className="ms-2">
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
