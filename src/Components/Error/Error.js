import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';
import images from '../.././images/images.js';


const Error = () => {
  return (
    <section className='section-error'>
      <h3 className='header-error'>Error!!</h3>
      <div className='p-error-container'>
        <p className='p-error'>*All fields must be filled out to login*</p>
        <p className='p-error'>*Please return to login*</p>
      </div>
      <img className='gif-error' src={images.errorGif} alt='Gif of small bird scared' />
      <Link to='/' className='link-error'>
        <button className='button-error'>Back To Login</button>
      </Link>
    </section>
  )
}

export default Error;
