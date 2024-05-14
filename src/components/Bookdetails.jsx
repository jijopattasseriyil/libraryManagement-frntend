import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BookHistory from './BookHistory';
import userpng from '../assets/user.png'

function Bookdetails() {
  return (
    <>
    <div style={{marginBottom:'100px'}}>
        <Row>
            <Col md={7}>
                <div>
                    <Row>
                        <Col md={12}>
                            <h3 className='ms-4 mt-5 mb-4'>Book Withdrawals</h3>
                            <div className='ms-5 d-flex h-100' >
                            <Row>
                               <Col md={3} className='d-flex' style={{height:'300px'}}>
                                    <Card style={{ height:'17rem' }}>
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51iiVPgEP2L.jpg" style={{height:'250px'}}/>
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    </Card.Body>
                                    </Card>
                               </Col>

                               <Col md={3} className='d-flex'  style={{height:'300px'}}>
                                    <Card style={{ height:'17rem' }}>
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51iiVPgEP2L.jpg" style={{height:'250px'}}/>
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    </Card.Body>
                                    </Card>
                               </Col>
        
                               <Col md={3} className='d-flex' style={{height:'300px'}}>
                                    <Card style={{ height:'17rem' }}>
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51iiVPgEP2L.jpg" style={{height:'250px'}}/>
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    </Card.Body>
                                    </Card>
                               </Col>
        
                               <Col md={3} className='d-flex' style={{height:'300px'}}>
                                    <Card style={{ height:'17rem' }}>
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51iiVPgEP2L.jpg" style={{height:'250px'}}/>
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    </Card.Body>
                                    </Card>
                               </Col>                           
                               
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    <BookHistory/>
                    
                </div>
            </Col>
            <Col md={1}></Col>
            
            <Col md={4} className='p-0'>
            <div className='w-75 rounded-5 d-flex flex-column justify-content-center align-items-center mb-5 shadow-lg' style={{height:'450px',marginTop:'60px',backgroundImage:`url()`}}>
                <div className='bg-dark rounded-full' style={{width:'100px',height:'100px',borderRadius:'50%'}}>
                    <img src={userpng} alt="" style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                </div>
                <table className='mt-3 mb-3' style={{width:'300px', height:'250px', fontSize:'18px',marginLeft:'20px'}}>
                                <tbody>
                                    <tr>
                                        <th>Name </th>
                                        <td>Name</td>
                                    </tr>
                                    <tr>
                                        <th>Address </th>
                                        <td>Address Address sacbbjsbcbnzb cvcgaxcahbdc</td>
                                    </tr>
                                    <tr>
                                        <th>Phone </th>
                                        <td>80235 *****</td>
                                    </tr>
                                    <tr>
                                        <th>Email </th>
                                        <td>email@gmail.com</td>
                                    </tr>
                                </tbody>   
                </table> 
                <div className='rounded-4' style={{background: 'linear-gradient(to right,#fda83e, #fe3346)'}}><button className='btn text-white fw-semibold'>LOGOUT</button></div>
            </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Bookdetails

