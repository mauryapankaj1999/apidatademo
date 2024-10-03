"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((product) => setProduct(product));
    console.log(product);
  }, []);
  return (
    <>
      <div className="w-[85%] m-auto my-12">
        <div className="grid md:grid-cols-4 gap-5">
          {product.map((el: any, index: any) => {
            return (
              <>
                <div className="shadow-lg rounded-md border" key={index}>
                  <Link href={`product/${el.id}`}>
                    <Image
                      src={el?.image}
                      alt=""
                      className="w-full h-[14rem] object-cover"
                      width={100}
                      height={550}
                    />
                    <div className="p-2">
                      <h3 className="font-semibold mb-3 line-clamp-1">
                        {el.title}
                      </h3>
                      <p>{el.price}</p>
                      <p className=" line-clamp-2 text-[0.8rem]">
                        {el.description}
                      </p>
                      <button onClick={() => console.log(el.id)}>
                        read more
                      </button>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
