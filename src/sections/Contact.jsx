import React from 'react'

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('$Cunk ID copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

const Contact = () => {
  return (
    <section className='relative w-full h-[300px]'>
        <div className='flex flex-col w-full h-[300px]'>
            <div className="flex flex-row w-full h-[70px] mb-3 text-white uppercase mt-6 mx-auto px-11">
        <div className='w-[370px] h-[2px] border-2 border-white m-auto'></div>
        <h1 className='w-auto text-5xl font-bold'>RICK'S CONTRACT ID</h1>
        <div className='w-[370px] h-[2px] border-2 border-white m-auto'></div>
            </div>
            <div className='flex flex-col w-[650px] h-auto mx-auto mt-5'>
            <div className='w-auto h-auto flex flex-row border-2 rounded-2xl m-auto p-5 bg-green-700/30 shadow-lg border-green-200/80 '>
                <h1 className='text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-green-800'>ID: 00000000000000000000</h1>
                <button className='rounded-2xl bg-white ml-7 p-3 uppercase font-bold cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-green-800' onClick={() => copyToClipboard('0000000000000')}>COPY ID</button>
            </div>
            <div className='flex flex-row h-auto mx-auto mt-5 font-bold text-white gap-20'>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
  <button className="flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400">
    <img src="/ix-disc.svg" alt="tg" className="size-18 mx-auto" />
    <h1 className="m-auto mt-3">DISCORD</h1>
  </button>
</a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <button className='flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400'>
                <img src='/ic-x.svg' alt='tg' className='size-16 mx-auto' />
                <h1 className='m-auto mt-3'>X/TWITTER</h1>
            </button>
            </a>
            <a href="https://t.me/yourtelegramchannel" target="_blank" rel="noopener noreferrer">

            <button className='flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400'>
                <img src='/ic-tele.svg' alt='tg' className='size-16 mx-auto' />
                <h1 className='m-auto mt-3'>TELEGRAM</h1>
            </button>
            </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact