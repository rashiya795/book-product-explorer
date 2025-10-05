import React from 'react'
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col bg-[#647FBC]  items-center min-h-screen">
 <div className="text-center mt-15">
          <p className="font-sans font-extralight  text-blue-950 text-4xl drop-shadow-lg">
            Discover your next favorite read—stories that stay with you long after the last page.
          </p>
        </div>

        {/* One Card that holds all three images */}
        <div className="bg-[#B2B0E8] mt-10 shadow-2xl  shadow-blue-950 rounded-xl p-4 w-[95vw] flex justify-center items-center ">
          
          <div className="flex w-full">
            
            <Image
              src="/newbooks.jpg"
              alt="Books"
              width={0}
              height={0}
              sizes="33vw"
              className="w-1/3 h-[60vh] object-cover rounded-l-lg shadow-lg"
            />

            <Image
              src="/book.jpg"
              alt="Books"
              width={0}
              height={0}
              sizes="33vw"
              className="w-1/3 h-[60vh] object-cover shadow-lg"
            />

            <Image
              src="/newbooks.jpg"
              alt="Books"
              width={0}
              height={0}
              sizes="33vw"
              className="w-1/3 h-[60vh] object-cover rounded-r-lg shadow-lg"
            />

          </div>
        </div>

    

       

      </main>
    </>
  )
}
