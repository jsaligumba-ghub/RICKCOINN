import React from 'react'

const About = () => {
  return (
    <section className="w-full h-screen relative">
        <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col w-[1300px] h-[630px] m-auto p-2">
        <div className="flex flex-row w-full h-[60px] mb-3 text-white uppercase font-bold">
        <h1 className='w-[350px] text-6xl'>RICKCOIN</h1>
        <div className='w-[850px] h-[2px] border-2 border-white my-auto'></div>
        <h1 className='text-lg text-center w-[300px] m-auto'>Morty's Stupid Grandpa</h1>
        
        </div>
        <div className='flex flex-row w-[1200px] h-[550px] m-auto p-6 rounded-3xl bg-green-300/10 backdrop-blur-3xl shadow-lg border border-green-200/20'>
  <div className='flex flex-col w-[450px] h-[500px] ml-10'>
    <h1 className='w-[450px] text-6xl text-white drop-shadow-lg ml-5 font-bold'>WHO'S RICK?</h1>
    <img src='/rs.gif' alt='rickab' className='size-[450px] scale-x-[-1] rounded-2xl' />
  </div>
  <div className='flex flex-col w-[950px] h-[450px] ml-16 mt-5'>
    <h1 className='text-white drop-shadow-lg text-xl justify-start'>
    Rick Sanchez is the eccentric, alcoholic, and highly intelligent scientist from Rick and Morty, an animated sci-fi comedy series. As the grandfather of Morty Smith, Rick drags his grandson on dangerous and often morally questionable interdimensional adventures. He is known for his nihilistic outlook, reckless behavior, and dark sense of humor. Despite his arrogance and self-destructive tendencies, he occasionally shows glimpses of care for his family. His scientific genius allows him to create portals, advanced technology, and even manipulate entire realities. However, his intelligence often isolates him, making him a complex mix of brilliance and deep emotional struggles.
    </h1>
    <h2 className='mt-15 font-black text-4xl m-auto text-white'>WUBBA LUBBA DUB DUB!</h2>
  </div>
</div>

        </div>
        </div>

    </section>
  )
}

export default About