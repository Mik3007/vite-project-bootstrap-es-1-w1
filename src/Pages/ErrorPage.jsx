import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {

  let navigate = useNavigate();
  
  return (
    <>
    <h1 className='text-center fw-bold text-bg-danger pb-1'>Hai Sbagliato a cercare</h1>
    <button className='button-home-error' onClick={() => navigate('/')}>Home</button>
    </>
  )
}
