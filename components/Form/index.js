'use client'
import React, { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';


const Form = ({buttonClasses=''}) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")

    const router = useRouter()

    const handleSubmit = (e) => {
      e.preventDefault();

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