import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Rating from '@mui/material/Rating';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5zs5vww', 'template_n95eijq', form.current, {
        publicKey: 'CwKZn_ZC7-QnlBzfk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}><br />
    <Rating name="rating"></Rating>
    <br />
    <label>Name</label><br />
      <input type="text" name="from_name" /><br /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" />
    </form>
  );
};