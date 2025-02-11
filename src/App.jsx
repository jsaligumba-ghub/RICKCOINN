import About from './sections/About';
import Buyy from './sections/Buyy';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import { Rick } from './sections/Rick';
import Socials from './sections/Socials';
import Tokenomics from './sections/Tokenomics';

export default function App() {

  return (
<div className='w-full h-full bg-green-300'>
  <img src='bg.jpg' alt='rsbg' className='fixed bg-cover blur-[2px] invert-25'/>

<Hero />
<About />
<Rick />  
<Contact />
<Tokenomics />
<Buyy />
<Socials />
  
  </div>
  )
}