"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import {useRouter} from 'next/navigation';

export default function Hero(): JSX.Element {
  const router = useRouter();
  return (
<section className="text-gray-600 body-font  bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://rashcasm.github.io/jij/art3.png" draggable="false"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Eunoia</h1>
      <h3 className="mb-8 leading-relaxed">Empowering Mental Wellness<br/>Through Connection</h3>
      <div className="flex justify-center items-center flex-col">
        <button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-2" onClick={() => router.push("/test")}>Know your mental health</button>
        <button className=" text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={() => router.push('/resources')}>Resources</button>
      </div>
    </div>
  </div>
</section>
  );
}
