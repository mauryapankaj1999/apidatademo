"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page({params}:{params:{slug:string}}) {
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
if (params.slug) {
  
  fetch(`https://fakestoreapi.com/products/${params.slug}`)
    .then((res) => res.json())
    .then((product) => setProduct(product));
  }
  console.log(product);

  }, [params.slug]);
  return (
    <>
      <div className="w-[85%] m-auto my-12">
        <div className="grid md:grid-cols-4 gap-5">
            <Link href={''}>
            <Image
                      src={product?.image}
                      alt=""
                      className="w-full h-[14rem] object-cover"
                      width={100}
                      height={550}
                    />
          <div className="p-2">
            <h3 className="font-semibold mb-3 line-clamp-1">{product?.title}</h3>
            <p>{product?.title}</p>
            <p className=" line-clamp-2 text-[0.8rem]">cvbnm</p>
            <button>read more</button>
          </div>
            </Link>
        </div>
      </div>
    </>
  );
}
