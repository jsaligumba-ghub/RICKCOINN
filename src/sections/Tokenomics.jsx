import React from 'react'

const Tokenomics = () => {
  return (
    <section className='relative w-full h-screen'>
        <div className='flex flex-col w-full h-screen'>
            <div className='flex flex-col w-[1300px] h-[650px] m-auto text-7xl font-black text-white'>

             <div className='flex flex-row w-[1200px] h-[550px] m-auto p-6 rounded-3xl bg-green-300/30 backdrop-blur-2xl shadow-lg border border-green-200/20'>
  <div className='flex flex-col w-[450px] h-[500px] ml-10'>
    <h1 className='w-[450px] text-6xl text-white drop-shadow-lg font-bold'>RICKONOMICS</h1>
    <p className='text-sm mt-3 w-[420px] ml-1'>Rick Sanchez blockchain, SchmeckleChain, operates on a quantum-encrypted, interdimensional ledger that only he fully understands. The only currency it accepts is a fluctuating mix of Schmeckles, Galactic Credits, and existential dread, with gas fees paid in pure chaos.</p>
    <img src='/rs1.png' alt='rickab' className='size-[450px] scale-x-[-1] rounded-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:invert' />
  </div>
  <div className='flex flex-col w-[950px] h-[450px] ml-16 mt-5'>
    <div className='flex flex-row w-auto h-[60px] pl-7 border-l-green-900 border-l-4 mt-10 transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-green-800'>
    <h1 className='text-white drop-shadow-lg text-5xl justify-start hover:animate-pulse hover:text-green-800'>
        TAX
    </h1>
    <div className='w-[320px] border-2 border-white my-auto ml-5 '></div>
    <h1 className='text-white drop-shadow-lg text-5xl justify-start ml-8 hover:animate-pulse hover:text-green-800'>
        0%
    </h1>
    </div>
    <div className="flex flex-row w-auto h-[60px] pl-7 border-l-green-900 border-l-4 mt-10 transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-green-800">
  <h1 className="text-white drop-shadow-lg text-5xl justify-start hover:animate-pulse hover:text-green-800">LIQUIDITY</h1>
  <div className="w-[55px] border-2 border-white my-auto ml-5"></div>
  <h1 className="text-white drop-shadow-lg text-5xl justify-start ml-8 hover:animate-pulse hover:text-green-800">BURNED</h1>
</div>

<div className="flex flex-row w-auto h-[60px] pl-7 border-l-green-900 border-l-4 mt-10 transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500  hover:animate-pulse hover:text-green-800">
  <h1 className="text-white drop-shadow-lg text-5xl justify-start hover:animate-pulse hover:text-green-800">RICKCOIN</h1>
  <div className="w-[190px] border-2 border-white my-auto ml-5"></div>
  <h1 className="text-white drop-shadow-lg text-5xl justify-start ml-8 hover:animate-pulse hover:text-green-800">1M</h1>
</div>
<h1 className="text-4xl mx-auto mt-12">
  {['W', 'U', 'B', 'B', 'A', ' ', 'L', 'U', 'B', 'B', 'A', ' ', 'D', 'U', 'B', ' ', 'D', 'U', 'B', '!'].map((letter, index) => (
    <span key={index} className="inline-block transition-all duration-300 hover:animate-pulse hover:text-green-900">
      {letter}
    </span>
  ))}
</h1>

  </div>
  </div>
</div>

        </div>   
            {/* <div className="flex flex-row w-full h-[60px] mb-3 text-white uppercase">
        <div className='w-[850px] h-[2px] border-2 border-white my-auto'></div>
        <h1 className='w-[420px] text-6xl ml-5 font-black'>RICKONOMICS</h1>
            </div>

            </div> */}

        
    </section>
  )
}

export default Tokenomics