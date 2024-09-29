import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page({params}:{params:{slug:string}}) {
  return (
    <>
      <div className="w-[85%] m-auto my-12">
        <div className="grid md:grid-cols-4 gap-5">
            <Link href={''}>
          <div className="p-2">
            <h3 className="font-semibold mb-3 line-clamp-1">rtyui</h3>
            <p>qwertyudfghj</p>
            <p className=" line-clamp-2 text-[0.8rem]">cvbnm</p>
            <button>read more</button>
          </div>
            </Link>
        </div>
      </div>
    </>
  );
}
