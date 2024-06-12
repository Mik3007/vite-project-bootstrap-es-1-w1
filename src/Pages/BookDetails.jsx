import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import history from "../books/history.json";
import horror from '../books/horror.json';
import fantasy from '../books/fantasy.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';

export default function BookDetails() {
  const { asin } = useParams();
  const allBooks = [ ...history, ...fantasy, ...horror, ...romance, ...scifi] ;
  console.log(allBooks);
  console.log(asin);
  const detailsbook = allBooks.find((book) => book.asin == asin);
  if (!detailsbook) {
    return <div>Prodotto non trovato</div>;
  }

  return (
    <div>
      <Card className="bg-dark text-light my-3 mw-100">
        <Card.Img
          className="card-book-img pt-2"
          variant="top"
          src={detailsbook.img}
        />
        <Card.Body className="bs-secondary">
          <Card.Title>{detailsbook.title}</Card.Title>
          <p>Category: {detailsbook.category}</p>
          <p>€ {detailsbook.price}</p>
        </Card.Body>
      </Card>
    </div>
  );
}
