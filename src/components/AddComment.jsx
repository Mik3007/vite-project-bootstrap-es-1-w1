import React, { useState } from 'react';

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
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTc0MjI5NjgsImV4cCI6MTcxODYzMjU2OH0.wyHzrOTXvnCh3pVUw6Db23k69j6DI3eyb0LrrYnGvWM",
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
    <div className='px-2' onClick={(e) => e.stopPropagation()}>
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
        <button className='mt-2 bg-black text-light' type="submit">Add comment</button>
      </form>
    </div>
  );
}