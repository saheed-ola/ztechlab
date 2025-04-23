import React, { useState } from 'react'
import ContactLeft from './ContactLeft';
// import React, { useState } from 'react'
import axios from "axios"
import TopTitle from '../TopTitle';


function Contact() {

  const [userName, setUserName] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // EMAIL VALIDATION
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // // EMAIL VALIDATION
  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrMsg("Your Username is required");
    } else if (phoneNumber === "") {
      setErrMsg("Your phone number is required");
    }
    else if (email === "") {
      setErrMsg("please provide your email");
    }
    else if (!emailValidation(email) === "") {
      setErrMsg("Give a valid email address !");
    }
    else if (subject === " ") {
      setErrMsg("please provide a subject");
    } else {
      setSuccessMsg(`Thank your dear ${userName} Your message has been sent successfully....`);
      setErrMsg("");
      setUserName("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(userName, phoneNumber, email, subject, message);
    }
 

    try {
      const res = axios.post('http://localhost:5000/send', { userName, phoneNumber, email, subject, message })
      console.log(res?.data)
    } catch (error) {
      console.log(error.message)
    }
  };





  return (
    // <section id='contact' className='w-full h-[800px]  pb-20 flex text-black  border-b-[1px] border-b-black font-titleFont' >
    //     <div>Contact</div>
    // </section>
    <section id="contact" className=' w-[90%] py-10 mx-auto border-b-[1px]  border-b-black'>
      <TopTitle 
      heading = "Contact"
      />
      <div className='w-[90%] mx-auto '>
        <div className='w-full h-auto flex justify-between'>
         
          <ContactLeft />
          <div className='w-[60%] h-full py-10 bg-white p-8 shadow-2xl border-[3px] flex flex-col gap-8 rounded-lg justify-center' data-aos="fade-left">
            <form className='w-full flex flex-col gap-6 py-5 '>
              {errMsg && <p className='py-3 bg-black shadow-red-400 text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>}
              {successMsg && <p className='py-3 bg-green-700 shadow-red-400 text-center text-white text-base tracking-wide animate-bounce'>{successMsg}</p>}

              <div className='w-full flex flex-row gap-10 '>
                <div className='w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-600 uppercase tracking-wide'>Name</p>
                  <input onChange={(e) => setUserName(e.target.value)} value={userName} className={`${errMsg === "Your Username is required" && "outline-designColor"} contactInput border-[3px]`} type="text" />
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-600 uppercase tracking-wide'>Phone number</p>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className={`${errMsg === "Your phone number is required" && "outline-designColor"} contactInput border-[3px]`} type="text" />
                </div>
              </div>
              <div className='w-full flex flex-col gap-4'>
                <p className='text-sm text-gray-600 uppercase tracking-wide'>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errMsg === "please provide your email" && "outline-designColor"} contactInput border-[3px]`} type="email" />
              </div>
              <div className='w-full flex flex-col gap-4'>
                <p className='text-sm text-gray-600 uppercase tracking-wide'>subject</p>
                <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errMsg === "please provide a subject" && "outline-blue-900"} contactInput border-[3px]`} type="text" />
              </div>
              <div className='w-full flex flex-col gap-4'>
                <p className='text-sm text-gray-600 uppercase tracking-wide'>Message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`${errMsg === "Your phone number is required" && "outline-black"} contactTextArea border-[3px]`} cols="30" rows="8"></textarea>
              </div>
              <div className='w-full'>
                <button onClick={handleSend} className='w-full h-12 bg-gray-400 rounded-lg hover:border-[1px]  uppercase text-base tracking-wide hover:border-designColor border-transparent duration-300 text-white'>SEND MESSAGE</button>
              </div>
              {errMsg && <p className='py-3 bg-black shadow-red-400 text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>}
              {successMsg && <p className='py-3 bg-green-700 shadow-red-400 text-center text-white text-base tracking-wide animate-bounce'>{successMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact