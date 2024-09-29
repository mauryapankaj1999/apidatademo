"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Coutnrer from "./about-us/_component/Counter/Coutnrer";

export default function Home() {
  const [addinput, setAddinput] = useState([
    {
      input1: "text",
      input2: "number",
    },
  ]);

  const handelclick = () => {
    const inpu1 = [
      ...addinput,
      {
        input1: "text",
        input2: "number",
      },
    ];
    setAddinput(inpu1);
  };


  // const handelremove = (index:any)=>{
  //   const updateinput = addinput.filter((el,i)=> i !== index );
  //   setAddinput(updateinput)
  // }

  const handelremove = (index: any) => {
    const updateinput = addinput.filter((el, i) => i !== index);
    setAddinput(updateinput);
  };
  return (
    <>
      <div className="w-[50%] m-auto">
        {addinput.map((el, index) => {
          return (
            <>
              <div className="flex gap-3 my-10">
                <input
                  type={el.input1}
                  className="w-full border h-14 rounded-md p-2"
                  placeholder="enter your name"
                />
                <input
                  type={el.input2}
                  className="w-full border h-14 rounded-md p-2"
                  placeholder="enter your number"
                />
                {
                  addinput.length >= 2 && 
                  <button  onClick={() => handelremove(index)}>remove</button>
                  
                }
              </div>
            </>
          );
        })}
        <button onClick={handelclick}>Add Input +</button>


        
      </div>
    </>
  );
}
