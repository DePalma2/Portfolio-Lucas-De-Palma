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
                <p className='text-sm max-w-xl mb-6'>Hola, soy Lucas De Palma soy estudiante de tercer año en la carrera Analista de Sistemas. Aunque soy un estudiante, he tenido la oportunidad de trabajar en varios proyectos y adquirir experiencia en el sector it. Algunas de mis habilidades incluyen desarrollo Back-End y Front-End, Estoy muy interesado en participar en nuevos proyectos y seguir creciendo tanto profesionalmente como academicamente y participar en proyectos de mayor escala. Estoy buscando una oportunidad de prácticas o trabajo para poner en práctica mis habilidades y seguir aprendiendo.</p>
                <Timeline/>
                <Projects/>
                <Certificates/>
            </div>
        </section>
    </>
  )
}

export default Portfolio