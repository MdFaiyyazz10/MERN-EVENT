import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Contact = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [subject , setSubject] = useState("")
  const [message , setMessage] = useState("")

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:4000/api/v1/message/send" , {name,email,subject,message}).then((response) => {
      toast.success(response.data.message)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }).catch(error => {
      // console.log(error)
      toast.error(error.response.data.message)
    })
  }

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where Any City</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>+91 7517 66 1553</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>mdfaiyyazz397@gmail.com</p>
          </div>
        </div>

        <div className="banner">
          <div className="item">
          
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59544.16388137186!2d79.0757376!3d21.132083200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721203539183!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="item">
            <form onSubmit={handleSendMessage} >
              <h2>Contact</h2>

              <div>
                <input type="text" placeholder='Enter Name'value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
