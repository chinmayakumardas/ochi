import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="textstructure mt-52 px-20">
        {
           ( ["We create","Eye Opening","Presentations"]).map((item,index)=>{
                return ( 
                    <div key={index} className="masker  ">
                       <div className='w-fit flex '>
                            {
                                index===1&&(<div className=' mr-[1vw] w-[9vw] h-[6vw] relative top-[0.8vw] rounded bg-green-500'></div>)
                            } 
                            <h1 className="text-[9vw] h-full flex items-center uppercase leading-[7vw] font-semibold font-['FoundersGrotesk']">{item}</h1>
                       </div>
                    </div>)
            })
        } 
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-[5vw] py-5'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none' key={index}>{item}</p>
            )}
            <div className="start flex items-center gap-2">
                 <div className="px-4 py-2 border-[2px] font-light text-md uppercase border-zinc-500 rounded-full">Start the project</div>
                 <div className="w-10 h-10 flex items-center justify-center   border-[1px] font-light text-sm capitalize border-zinc-400 rounded-full"> <span className='rotate-[45deg]'><FaArrowUpLong /></span></div>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage











 {/* <div className="masker ">
                <h1 className="text-8xl uppercase leading-[5.5vw] font-semibold font-['FoundersGrotesk']">We Create</h1>
            </div>
            <div className="masker ">
                <h1 className="text-8xl uppercase leading-[5.5vw] font-semibold font-['FoundersGrotesk']">Eye-opening</h1>
            </div>
            <div className="masker ">
                <h1 className="text-8xl uppercase leading-[5.5vw] font-semibold font-['FoundersGrotesk']">Presentations</h1>
            </div> */}