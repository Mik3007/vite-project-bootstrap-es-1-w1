import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const urlAddComment = "https://striveschool-api.herokuapp.com/api/comments/";

export default function AddComment({ asin, reviews, setReviews }) {
  const [nameValue, setNameValue] = useState('');
  const [rateValue, setRateValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      comment: nameValue,
      rate: rateValue,
      elementId: asin
    };
    console.log(newComment);

    fetch(urlAddComment, {
      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTg1NDMyMDcsImV4cCI6MTcxOTc1MjgwN30.KZZCeMrDqdcojHeqccqyjSZi6vP5Bb7drHbALpJFJ5k",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) =>  {
        console.log(data);
        setReviews([...reviews, data]),
        alert('Comment added:', data);

        setNameValue('');
        setRateValue('');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='px-2 ms-4' onClick={(e) => e.stopPropagation()}>
      <h4 className='text-light'>Add Comment</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='mt-2 text-light'>Name:</label>
          <input
            className='input-name-add bg-black text-light d-flex flex-column'
            type="text"
            id="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='mt-2 text-light'>Rate:</label>
          <input
            className='w-25 bg-black text-light d-flex'
            type="number"
            id="rate"
            value={rateValue}
            onChange={(e) => setRateValue(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <Button className='mt-2 my-2' variant="success" type="submit">Add comment</Button>
      </form>
    </div>
  );
}
