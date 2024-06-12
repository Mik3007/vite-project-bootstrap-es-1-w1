import React from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import history from "../books/history.json";
import horror from '../books/horror.json';
import fantasy from '../books/fantasy.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';
import CommentArea from "../components/CommentArea";

export default function BookDetails() {
  const { asin } = useParams();
  const allBooks = [...history, ...fantasy, ...horror, ...romance, ...scifi];
  console.log(allBooks);
  console.log(asin);
  const detailsbook = allBooks.find((book) => book.asin === asin);
  if (!detailsbook) {
    return <div>Prodotto non trovato</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card className="bg-dark text-light my-3 mw-100 d-flex justify-content-center align-content-center mt-3">
            <Card.Img
              className="card-book-img pt-2"
              variant="top"
              src={detailsbook.img}
            />
          </Card>
        </Col>
        <Col md={3} className="bg-dark text-light text-center mt-3 rounded-2 h-25" >
          <h1>Details</h1>
          <p>Title : {detailsbook.title} </p>
          <p>Category: {detailsbook.category}</p>
          <p>€ {detailsbook.price}</p>
        </Col>
        <Col md={6} className="mt-3">
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>
  );
}
