import React from "react";
import Logo from "@/public/images/logo.webp";
import Login from "./Login";
import Image from "next/image";

const Auth = () => {
  return (
    <main className="relative grid min-h-screen grid-cols-1 md:grid-cols-5">
      <div className="col-span-2 relative bg-auth md:order-2 md:max-h-full bg-[url(/images)]">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Cafeerent"
          className="w-[20rem] h-[20rem] top-[20%] left-1/2 -translate-x-1/2 absolute z-10 object-contain"
        />

        <div className="w-full h-full absolute top-0  left-0 z-[1]">
          <div className="w-full h-full absolute top-0 left-0 z-[1] bg-cover bg-[url(/images/auth-image.jpg)]" />
          <div className="w-full h-full absolute top-0 left-0 z-[2] bg-sky-800 opacity-40"></div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center bg-hero md:order-1">
        <Login />
      </div>
    </main>
  );
};

export default Auth;
