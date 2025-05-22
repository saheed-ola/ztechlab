import React, { useState } from 'react'
import ContactLeft from './ContactLeft';
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
      const res = axios.post('https://ztechlabs-server.vercel.app/send', { userName, phoneNumber, email, subject, message })
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  };


  return (
    <section id="contact" className='w-full xs:w-[90%] md:w-[85%] lg:w-[90%] py-6 md:py-10 mx-auto border-b-[1px] border-b-black'>
      <TopTitle 
      heading = "Contact"
      />
      <div className='w-full xs:w-[90%] mx-auto'>
        <div className='w-full flex flex-col lg:flex-row gap-6 md:gap-10'>
         
          <ContactLeft className="lg:w-[40%]"/>
          <div className='w-full lg:w-[60%] h-full py-6 md:py-10 bg-white p-4 md:p-8 shadow-lg md:shadow-2xl border-2 md:border-[3px] flex flex-col gap-4 md:gap-8 rounded-lg' 
               data-aos="fade-left">
            <form className='w-full flex flex-col gap-4 md:gap-6 py-2 md:py-5'>
              {(errMsg || successMsg) && (
                <p className={`py-2 md:py-3 text-xs md:text-sm text-center rounded-lg ${
                  errMsg ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'
                }`}>
                  {errMsg || successMsg}
                </p>
              )}

              {/* Name and Phone Number Row */}
              <div className='w-full flex flex-col xs:flex-row gap-4 md:gap-6'>
                <div className='w-full xs:w-1/2 flex flex-col gap-2 md:gap-4'>
                  <label className='text-xs md:text-sm text-gray-600 uppercase tracking-wide'>Name</label>
                  <input 
                    onChange={(e) => setUserName(e.target.value)} 
                    value={userName} 
                    className={`contactInput border-2 md:border-[3px] text-sm md:text-base ${
                      errMsg === "Your Username is required" ? 'border-red-500' : 'border-gray-300'
                    }`} 
                    type="text" 
                  />
                </div>

                <div className='w-full xs:w-1/2 flex flex-col gap-2 md:gap-4'>
                  <label className='text-xs md:text-sm text-gray-600 uppercase tracking-wide'>Phone number</label>
                  <input 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    value={phoneNumber} 
                    className={`contactInput border-2 md:border-[3px] text-sm md:text-base ${
                      errMsg === "Your phone number is required" ? 'border-red-500' : 'border-gray-300'
                    }`} 
                    type="tel" 
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className='w-full flex flex-col gap-2 md:gap-4'>
                <label className='text-xs md:text-sm text-gray-600 uppercase tracking-wide'>Email</label>
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                  className={`contactInput border-2 md:border-[3px] text-sm md:text-base ${
                    errMsg === "please provide your email" ? 'border-red-500' : 'border-gray-300'
                  }`} 
                  type="email" 
                />
              </div>
              {/* Subject Field */}
              <div className='w-full flex flex-col gap-2 md:gap-4'>
                <label className='text-xs md:text-sm text-gray-600 uppercase tracking-wide'>Subject</label>
                <input 
                  onChange={(e) => setSubject(e.target.value)} 
                  value={subject} 
                  className={`contactInput border-2 md:border-[3px] text-sm md:text-base ${
                    errMsg === "please provide a subject" ? 'border-red-500' : 'border-gray-300'
                  }`} 
                  type="text" 
                />
              </div>
              <div className='w-full flex flex-col gap-2 md:gap-4'>
                <p className='text-xs md:text-sm text-gray-600 uppercase tracking-wide'>Message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`contactTextArea border-2 md:border-[3px] text-sm md:text-base ${
                    errMsg === "Your phone number is required" ? 'border-red-500' : 'border-gray-300'
                  }`} 
                  cols="30"  
                  rows='"4 md:rows="6"'></textarea>
              </div>
              <div className='w-full'>
                <button onClick={handleSend}  className='w-full h-10 md:h-12 bg-blue-600 hover:bg-blue-700 rounded-lg uppercase text-xs md:text-sm tracking-wide text-white transition-colors duration-300'>SEND MESSAGE</button>
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

export default Contact;
 

// return (
//     <section id="contact" className=' w-[90%] py-10 mx-auto border-b-[1px]  border-b-black'>
//       <TopTitle 
//       heading = "Contact"
//       />
//       <div className='w-[90%] mx-auto '>
//         <div className='w-full h-auto flex justify-between'>
         
//           <ContactLeft />
//           <div className='w-[60%] h-full py-10 bg-white p-8 shadow-2xl border-[3px] flex flex-col gap-8 rounded-lg justify-center' data-aos="fade-left">
//             <form className='w-full flex flex-col gap-6 py-5 '>
//               {errMsg && <p className='py-3 bg-black shadow-red-400 text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>}
//               {successMsg && <p className='py-3 bg-green-700 shadow-red-400 text-center text-white text-base tracking-wide animate-bounce'>{successMsg}</p>}

//               <div className='w-full flex flex-row gap-10 '>
//                 <div className='w-1/2 flex flex-col gap-4'>
//                   <p className='text-sm text-gray-600 uppercase tracking-wide'>Name</p>
//                   <input onChange={(e) => setUserName(e.target.value)} value={userName} className={`${errMsg === "Your Username is required" && "outline-designColor"} contactInput border-[3px]`} type="text" />
//                 </div>
//                 <div className='w-1/2 flex flex-col gap-4'>
//                   <p className='text-sm text-gray-600 uppercase tracking-wide'>Phone number</p>
//                   <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className={`${errMsg === "Your phone number is required" && "outline-designColor"} contactInput border-[3px]`} type="text" />
//                 </div>
//               </div>
//               <div className='w-full flex flex-col gap-4'>
//                 <p className='text-sm text-gray-600 uppercase tracking-wide'>Email</p>
//                 <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errMsg === "please provide your email" && "outline-designColor"} contactInput border-[3px]`} type="email" />
//               </div>
//               <div className='w-full flex flex-col gap-4'>
//                 <p className='text-sm text-gray-600 uppercase tracking-wide'>subject</p>
//                 <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errMsg === "please provide a subject" && "outline-blue-900"} contactInput border-[3px]`} type="text" />
//               </div>
//               <div className='w-full flex flex-col gap-4'>
//                 <p className='text-sm text-gray-600 uppercase tracking-wide'>Message</p>
//                 <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`${errMsg === "Your phone number is required" && "outline-black"} contactTextArea border-[3px]`} cols="30" rows="8"></textarea>
//               </div>
//               <div className='w-full'>
//                 <button onClick={handleSend} className='w-full h-12 bg-gray-400 rounded-lg hover:border-[1px]  uppercase text-base tracking-wide hover:border-designColor border-transparent duration-300 text-white'>SEND MESSAGE</button>
//               </div>
//               {errMsg && <p className='py-3 bg-black shadow-red-400 text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>}
//               {successMsg && <p className='py-3 bg-green-700 shadow-red-400 text-center text-white text-base tracking-wide animate-bounce'>{successMsg}</p>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact
