import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail,AiFillPhone } from 'react-icons/ai';



export default function Footer() {
  return (
    <>
        <footer className='container-fluid text-bg-info '>
        <div className='row'>
            <div className='col-4'>
                <h2>Get in Touch</h2>
                <p><AiOutlineMail icon="fa-solid fa-envelope"  className='text-light' /> ahmed.tamer.23456@gmail.com</p>
                <p><AiFillPhone icon="fa-solid fa-phone" className='text-light' /> 01090425921</p>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-center'>
                <button className='btn btn-light text-light bg-transparent rounded-0'>Contact Me</button>
            </div>
            <div className='col-4 '>   
            <div className='row my-4'>
            <FaFacebookF className='col-1'/>  
            <FaTwitter className='col-1'/>  
            <FaLinkedinIn className='col-1'/>
              </div>
            <div className='row'>
              copyRight @2023
            </div>
            </div>
        </div>
        </footer>
    </>
  )
}
