import React, { useState } from 'react';

const Buyy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0000000000000000000000000000000000000000');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
        <section className='relative w-full h-[650px]'>
            <div className='relative flex flex-col w-full h-[820px]'>
            <h1 className='mx-auto text-8xl font-bold text-white mt-3'>HOW TO BUY</h1>
                
                <div className='flex flex-row w-full h-auto mt-16 justify-center text-center gap-14'>
                    <div className='flex flex-col w-[350px] h-[420px] rounded-4xl bg-green-500/50 p-8 gap-6 drop-shadow-xl border-b-4 border-green-600 text-white  transition-all duration-300 ease-in-out hover:scale-105 hover:border-b-white hover:bg-green-600/70'>
                        <h1 className='text-2xl font-extrabold'>CREATE WALLET!</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-col w-44 h-12 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110  hover:animate-pulse hover:text-green-400 m-auto border-4 rounded-xl bg-white/35 border-green-700 border-l-8 border-b-8 border-b-green-700 border-l-green-700 px-3 hover:border-white">
                        <h1 className="m-auto text-xl font-bold text-white">TEST BUTTON</h1>
                        </button>
                        </a>
                        </div>
                        <div className='flex flex-col w-[350px] h-[420px] rounded-4xl bg-green-500/50 p-8 gap-6 drop-shadow-xl border-b-4 border-green-600 text-white  transition-all duration-300 ease-in-out hover:scale-105 hover:border-b-white hover:bg-green-600/70'>
                        <h1 className='text-2xl font-extrabold'>GET SOME RICKCOIN!</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-col w-44 h-12 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110  hover:animate-pulse hover:text-green-400 m-auto border-4 rounded-xl bg-white/35 border-green-700 border-l-8 border-b-8 border-b-green-700 border-l-green-700 px-3 hover:border-white">
                        <h1 className="m-auto text-xl font-bold text-white">TEST BUTTON</h1>
                        </button>
                        </a>
                        </div>
                        <div className='flex flex-col w-[350px] h-[420px] rounded-4xl bg-green-500/50 p-8 gap-6 drop-shadow-xl border-b-4 border-green-600 text-white  transition-all duration-300 ease-in-out hover:scale-105 hover:border-b-white hover:bg-green-600/70'>
                        <h1 className='text-2xl font-extrabold'>CALL IT RICK!</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum voluptate voluptatem minima a? Reprehenderit distinctio, ullam quas doloribus, accusamus officiis a incidunt perspiciatis corrupti in, optio praesentium quibusdam quis?</p>                    
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <button className="flex flex-col w-44 h-12 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110  hover:animate-pulse hover:text-green-400 m-auto border-4 rounded-xl bg-white/35 border-green-700 border-l-8 border-b-8 border-b-green-700 border-l-green-700 px-3 hover:border-white">
                        <h1 className="m-auto text-xl font-bold text-white">TEST BUTTON</h1>
                        </button>
                        </a>
                        </div>
                        
                </div>
            </div>
            
        </section>
      );
    };
    
export default Buyy;
