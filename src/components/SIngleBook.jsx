import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function SingleBook({ book, selected, setSelected }) {

  return (
    <Col>
      <Card className='bg-dark text-light my-3 mw-100' style={{border: selected === book.asin ? '2px solid red' : 'none' }} 
      onClick={() => setSelected(book.asin)}>
        <Card.Img className='card-book-img pt-2' variant="top" src={book.img} />
        <Card.Body className='bs-secondary'>
          <Card.Title>{book.title}</Card.Title> 
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook;