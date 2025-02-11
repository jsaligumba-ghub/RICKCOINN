import React from 'react';

const socialIcons = [
  { name: 'Twitter', href: 'https://twitter.com', icon: '/ic-x.svg' },
  { name: 'Telegram', href: 'https://telegram.org', icon: '/ic-tele.svg' },
  { name: 'CoinGecko', href: 'https://coingecko.com', icon: '/ic-gecko.svg' },
  { name: 'Discord', href: 'https://discord.com', icon: '/ix-disc.svg' }
];


const Hero = () => {
  return (
    <section className="relative w-full h-screen max-lg:w-full max-lg:h-full bg-gradient-to-t from-transparent to-green-600/40 border-orange-400 "> 

    <div className='flex flex-col w-full h-screen font-black'>

            <div className='flex row w-auto h-auto gap-5 m-auto uppercase'>
                <h1 className='font-primary text-8xl text-white m-auto'>RickCoin</h1>
                
            <div className='flex flex-col w-auto h-auto m-auto py-3 border-l-4 border-l-white'>
                <h1 className='text-3xl  text-white ml-3'>WUBBA LUBBA DUB DUB!</h1>
                <div className="flex space-x-2 max-lg:hidden">
                    
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href={icon.href} className="text-white hover:text-gray-300 bg-green-400 p-2 rounded-xl border-[1px] border-l-4 border-b-4 border-white hover:border-l-[1px] hover:border-b-[1px] duration-300 transition-all ease-in-out mt-7 ml-7">
                            <img src={icon.icon} alt={icon.name} className="h-12  max-lg:hidden" />
                        </a>
                    ))}
                </div>
            </div>
        
            </div>
          
        </div>
        {/* <div className=" bg-gradient-to-t from-white to text-teal-700 h-52 mt-10 w-full absolute bottom-0 z-[99] max-lg:h-[150px] max-lg:w-full" /> */}

        
    </section>
  )
}

export default Hero