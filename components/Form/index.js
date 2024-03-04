'use client'
import React, { useState } from 'react'
import { TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { POST } from '@/services/APIService';


const Form = ({buttonClasses=''}) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")

    const router = useRouter();

    const handleSubmit = (e) => {
      e.preventDefault();
      POST('https://o4nzozyh09.execute-api.ap-south-1.amazonaws.com/googleWebhooks?pid=65e57083387d44b8b8fdd26b&clid=65b79f31b2996953a6fda921',{email, phone, name, message})
        .then((response) => {
          console.log(response)
        })
        .catch((error) => console.log(error.message));

      router.push('/thankYou')
    }


  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 bg-white p-8 rounded-lg">
        <p className='z-40 text-3xl mb-4 text-center underline underline-offset-8 decoration-slate-500 text-slate-700 '>Get in touch with us</p>
        <div>
      <TextInput id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your Name" required />
    </div>
    <div>
      <TextInput id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your Email" required />
    </div>
    <div>
      <TextInput id="phone" type="number" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" required />
    </div>
    <div>

      <TextInput id="message" value={message} placeholder='Your Message' onChange={(event) => setMessage(event.target.value)} type="text" required />
    </div>
    <button className={`bg-blue-gradient p-2 text-white flex items-center justify-center rounded-lg filter hover:brightness-75 ${buttonClasses && buttonClasses}`}  type="submit">Submit</button>
  </form>
  )
}

export default Form