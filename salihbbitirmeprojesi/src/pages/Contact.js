import React from 'react'
import BannerImage from "../assets/banner.jpg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>Üye Ol</h1>
            <form id="contact-form" method="POST">
                    <label htmlFor="name">Adınız</label>
                    <input name="name" placeholder='Enter full name...' type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Enter full email...' type="email"/>
                    <label htmlFor="message">Değerlendirmeniz</label>
                    <textarea name="message" required rows="6" placeholder='Enter message...'></textarea>
                    <button type='submit'>Kayıt</button>
            </form>
        </div>
    </div>
  )
}

export default Contact