import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
    <h1 className='text-center fw-bold text-bg-danger pb-1'>Hai Sbagliato a cercare</h1>
    <button className='button-home-error'> <Link className='nav-link text-center rounded-5' to='/'>Home</Link> </button>
    </>
  )
}
