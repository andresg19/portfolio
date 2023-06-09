import React from 'react';
import Typewriter from 'typewriter-effect';


const Beggining = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x">
        <div className='border-none min-h-[40vh]'>
        <img src='/Avatar-Maker.png' alt='img not found'  className='mx-auto w-[80%] lg:w-[35%]'/>
       </div>
        <div className='text-2xl border-none mt-[12%] text-white lg:text-4xl lg:ml-[20%]'>
        <Typewriter
  options={{
    autoStart: true,
    strings:['Hola!', 'me llamo Andrés', 'soy un', 'Full Stack Developer'],
    loop: true,
  }}
/>

        </div>
      </div>
       
     );
}
 
export default Beggining;