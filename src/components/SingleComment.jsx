import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function SingleComment({ review, reviews, setReviews }) {
  const [loader, setLoader] = useState(false)

  function UpdateComment(id, newReview) {
    setLoader(true)
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTc0MjI5NjgsImV4cCI6MTcxODYzMjU2OH0.wyHzrOTXvnCh3pVUw6Db23k69j6DI3eyb0LrrYnGvWM",
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
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTc0MjI5NjgsImV4cCI6MTcxODYzMjU2OH0.wyHzrOTXvnCh3pVUw6Db23k69j6DI3eyb0LrrYnGvWM",
      }
    }).then(() => setReviews(reviews.filter((review) => review._id !== id)));
  }
  return (
    <>
      {loader && <Spinner className=' text-bg-danger' animation="border" role="status"></Spinner>}
      <li key={review._id} className='text-danger'>{review.comment}
        <button className='button-del-mod bg-success' onClick={() => UpdateComment(review._id, prompt("new review:", review.comment))}>Edit</button>
        <button className='button-del-mod bg-danger' onClick={() => DeleteComment(review._id)}>Delete</button></li>
    </>
  )
}