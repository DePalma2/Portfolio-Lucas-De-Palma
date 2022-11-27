import React from 'react'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <img src='src\assets\perfil.jpg' className='w-40 h-40 rounded-full mx-auto'/>
            <h1 className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl">
              Lucas De Palma
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Desarrollador Full Stack
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <a href='https://github.com/DePalma2' className='hover:text-blue-300 hover:transition-all'><FaGithub/></a>
              <a href='https://www.linkedin.com/in/lucasdepalma/' className='hover:text-blue-300 hover:transition-all'><FaLinkedinIn/></a>
              <a href='mailto:lucasdepalma2002@gmail.com' className='hover:text-blue-300 hover:transition-all'><FaRegEnvelope/></a>
            </div>
          </div>
        </div>
    </header>
    </>
  )
}

export default Header