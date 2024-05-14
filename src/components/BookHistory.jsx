import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BookHistory() {
  return (
    <>
    <Row>
                        <Col md={12}>
                            <h3 className='ms-4 mt-3 mt-5 mb-4'>Archive</h3>
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
    </>
  )
}

export default BookHistory