import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import SIngleBook from './SIngleBook';
import Col from 'react-bootstrap/Col';



function AllTheBooks({ books , search }) {

  const [selected, setSelected] = useState([""])

  return (
      <Row>
        <Col >
          <Row>
            {books
              .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
              .map(book => (<SIngleBook key={book.asin} book={book} selected={selected} setSelected={setSelected} />))}
          </Row>
        </Col>
        
      </Row>
  )
};


export default AllTheBooks;
