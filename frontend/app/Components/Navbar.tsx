import React from 'react'

interface NavigationItem{
  title:string;
  slug:string;
url:string;
}

export default async function Navbar() {

 let navigationItem: NavigationItem[] = [];

try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/navigation`, { cache: "no-store" });
  
  const contentType = response.headers.get("content-type");

  if (response.ok && contentType?.includes("application/json")) {
    navigationItem = await response.json();
  } else {
    const text = await response.text();
    console.error("Unexpected response:", text);
    // Optionally show fallback UI:
    navigationItem = []; 
  }
} catch (error) {
  console.error("Fetch error:", error);
  navigationItem = [];
}


  

  return (
    <>
  <header>
      <nav className=" flex bg-[#B2B0E8] items-center h-15 gap-3 w-full">
          <div className="w-[25%]">
              <h1 className="md:text-2xl   text-[#4F1C51] font-sans font-semibold ml-1.5">
       Open<span className='text-[#543310]'>S</span>helf

      </h1>
      
          </div>
          <div className="flex justify-center p-5">
              <ul className="flex  text-amber-950 font-semibold justify-center gap-3  items-center  w-[100%]">
      {navigationItem.length > 0 ? (            
navigationItem.map((item,index)=>(
<li   key={`${item.url}-${index}`} className="cursor-pointer text-sm hover:bg-[#A2AADB] font-semibold hover:text-[#00224D]  rounded-t-2xl rounded-b-2xl p-3 text-center break-words">
  {item.title}
</li>
        
))
      ):(

         <li>No navigation items found</li>
      )}
      
      
              </ul>
          </div>
          
      </nav>
      </header>
    

    </>
    
  )
}