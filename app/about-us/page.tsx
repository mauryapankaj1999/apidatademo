"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import Counter from "./_component/Counter/Counter";

export default function Page() {
  console.log(Page, "first page");
  
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
    const [step, setStep] = useState(1)

    const nextstep = () =>{
      if (step < 4) {
        const newStep = step + 1;

        setStep(newStep)
        router.push(`?step=${newStep}`);
      }

    }
    const prevstep = () =>{
      if (step > 1) {
        const lasprev = step - 1
        setStep(lasprev)
        router.push(`?step=${lasprev}`);
      }
    }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (name == "") {
      window.alert('Please enter your name');
      return;
    }
    if (number == "") {
      window.alert('Please enter your number');
      return;
    }
    if (email == "") {
      window.alert('Please enter your email ID');
      return;
    } else {
      router.push(`?teraname=${name}&teranumber=${number}&teraemail=${email}`)
      // router.push(`/?name=${name}&number=${number}&email=${email}`);
      window.alert("Successfully submitted");
    }

  }



  return (
    <>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit}>
           
          <div className="mb-2">
            <input
              type="text"
              className="w-full border h-14 rounded-md p-2"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              className="w-full border h-14 rounded-md p-2"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="w-full border h-14 rounded-md p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onSubmit={handleSubmit}  className="mt-2 p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>

      {
        step === 1 && (
           <>

          <h3>step 1</h3>
         </>
        )
      }
      {
        step === 2 && (
         <>
          <h3>step 2</h3>
         </>
        )
      }
      {
        step === 3 && (
         <>
          <h3>step 3</h3>
         </>
        )
      }
      {
        step === 4 && (
         <>
          <h3>step 4</h3>
         </>
        )
      }
      <button onClick={nextstep}>next</button>
      {
        step > 1 && (

          <button onClick={prevstep}>prev</button>
        )
      }
    </>
  );
}
