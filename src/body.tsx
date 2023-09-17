import React from "react";
import gridData from "./gridData";
import hotel1 from './pics/hotel-1.jpg'
import hotel2 from './pics/hotel-2.jpg'

const Body: React.FC =() =>{
return(
        <div> 
            <div className="grid lg:grid-cols-2 gap-8 pl-4 pr-4 pt-12 md:pl-20 md:pr-20 md:pt-28 lg:pt-32 bg-gray-50">

                <div className="sm:pt-12 md:pt-0">
                    <img src={hotel1} alt="img-1" className=" rounded-lg hover:scale-105 transition duration-300 cursor-pointer "/>
                    <p className='pt-3 text-xl font-mono text-blue-500'>Beach Photos</p>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div> 
                    <div className="pb-9">
                <img src={hotel2} alt="img-2" className="rounded-lg hover:scale-105 transition duration-300 cursor-pointer  "  />
                <p className="pt-3 text-xl font-mono text-blue-500">Pools</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum!</p> 
                 </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 
            sm:grid-cols-1 gap-7  pl-4 pr-4 xl:p-16 md:pl-20 md:pr-20 bg-gray-50 ">
  {gridData.map((items, index) => (
    <div key={index} className="pb-20">
      <img src={items.imgSrc} alt="" style={{ width: '100%', height: '80%' }} className="rounded-lg hover:scale-105 transition duration-300 cursor-pointer "/>
      <h1 className="font-mono pt-3 text-xl text-blue-500">{items.head}</h1>
      <p className="font-mono ">{items.headingText}</p>
    </div>
  ))}
</div>

        </div>

)
}
export default Body