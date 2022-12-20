import React from 'react'
import Certificates from './Certificates'
import Projects from './Projects'
import Timeline from './Timeline'

const Portfolio = () => {
  return (
    <>
        <section className="bg-gray-200">
            <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
                <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl'>Sobre Mi</h2>
                <p className='text-sm max-w-xl mb-6'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona qu</p>
                <Timeline/>
                <Projects/>
                <Certificates/>
            </div>
        </section>
    </>
  )
}

export default Portfolio