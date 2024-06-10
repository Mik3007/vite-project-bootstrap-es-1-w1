import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Spinner from 'react-bootstrap/Spinner';


const urlReviews = "https://striveschool-api.herokuapp.com/api/books/"

export default function CommentArea({ asin }) {

    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        fetch(urlReviews + asin + "/comments/", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNDgwNDBiM2IyNTAwMTUxYjU0NmMiLCJpYXQiOjE3MTc0MjI5NjgsImV4cCI6MTcxODYzMjU2OH0.wyHzrOTXvnCh3pVUw6Db23k69j6DI3eyb0LrrYnGvWM"
            }
        })
            .then(response => response.json())
            .then(data => {
                setReviews(data)
                setLoader(false)
            })
            .catch(error => console.error(error, "errore"))
    }, [asin])

    return (
        <div className='commentArea'>
            {loader && <Spinner animation="border" role="status"></Spinner>}
            <h4 className='text-light px-2'>Reviews</h4>
            <CommentList reviews={reviews} setReviews={setReviews} />
            <AddComment reviews={reviews} setReviews={setReviews} asin={asin} />
        </div>
    )
}
