import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({reviews, setReviews}) {
  return (
    <>
      <ul>
      {reviews.map(review => <SingleComment review={review} setReviews = {setReviews} reviews={reviews}/>)}
      </ul>
    </>
  )
}
