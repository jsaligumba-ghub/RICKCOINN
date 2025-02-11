import React from 'react'

export const Rick = () => {
  return (
    <section className="relative w-full h-[550px]">
        <div className="flex flex-col w-full h-screen">
            
            <div className='flex flex-col w-[1300px] h-[500px] mx-auto mt-10'>
            <div className="flex flex-row w-full h-[60px] mb-3 text-white uppercase">
        <h1 className='w-[420px] text-6xl font-semibold'>RICK'S RANTS</h1>
        <div className='w-[850px] h-[2px] border-2 border-white my-auto'></div>
        </div>
        <div className='flex flex-col w-[630px] h-[380px] rounded-xl overflow-hidden m-auto border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
  <iframe 
    className='w-full h-full rounded-xl' 
    src="https://www.youtube.com/embed/GKPcHInn14c" 
    title="Who's Rick?" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

        </div>
        </div>

    </section>
  )
}
