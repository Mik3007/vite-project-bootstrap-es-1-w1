import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CommentArea from './CommentArea';

function SingleBook({ book, selected, setSelected }) {
  const isSelected = selected === book.asin;
  return (
    <Col>
      <Card data-testid={'card-book'} className={`bg-dark text-light my-3 mw-100 ${isSelected ? 'card-selected' : ''}`} onClick={() => setSelected(isSelected ? '' : book.asin)}>
        <Card.Img className='card-book-img pt-2' variant="top" src={book.img} />
        <Card.Body className='bs-secondary'>
          <Card.Title className='text-truncate'>{book.title}</Card.Title> 
          <Link className='text-decoration-none ' to={`/detail/${book.asin}`}>Details</Link>
          {selected === book.asin && <CommentArea asin={book.asin} />}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook;