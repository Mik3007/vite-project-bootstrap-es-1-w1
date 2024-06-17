import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PatchPlusFill, Star, Trash } from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner';

export default function SingleComment({ review, reviews, setReviews }) {
  const [loader, setLoader] = useState(false)

  function UpdateComment(id, newReview) {
    setLoader(true)
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTg1NDMyMDcsImV4cCI6MTcxOTc1MjgwN30.KZZCeMrDqdcojHeqccqyjSZi6vP5Bb7drHbALpJFJ5k",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newReview })
    })
      .then((response) => response.json())
      .then(data =>
       setReviews(reviews.map(review => review._id === id ? data : review)))
      .finally(() => {setLoader(false)});
  };
  function DeleteComment(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTg1NDMyMDcsImV4cCI6MTcxOTc1MjgwN30.KZZCeMrDqdcojHeqccqyjSZi6vP5Bb7drHbALpJFJ5k",
      }
    }).then(() => setReviews(reviews.filter((review) => review._id !== id)));
  }
  return (
    <>
      {loader && <Spinner className=' text-bg-danger' animation="border" role="status"></Spinner>}
      <ListGroup className='d-flex flex-column'>
      <ListGroupItem className='my-2 text-success bg-dark' data-testid="single-comment">
       <div className='me-1'>{review.comment}</div> 
       {Array.from({length: review.rate}).map(rate => <Star className='fs-5' />)}
        <div>
        <Button className='rounded-3 mx-3 mt-2' variant="outline-info" onClick={() => UpdateComment(review._id, prompt("new review:", review.comment))}><PatchPlusFill/></Button>
        <Button className='rounded-3 mt-2' variant="outline-danger" onClick={() => DeleteComment(review._id)}><Trash/></Button>
        </div>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}
