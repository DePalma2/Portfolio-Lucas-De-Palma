import React from 'react'
import ProjectsList from "../data/projects"

const Projects = () => {
  return (
    <>
        <div>
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl'>Proyectos</h2>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
       {ProjectsList.map((project) => {
            return (
                    <div>      
                        <div href="#" className="block max-w-sm p-6 bg-gray-800 border-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.name}</h5>
                            <p className="font-normal text-gray-400 text-base line-clamp-4 hover:line-clamp-none">{project.description}</p>
                            <div className='px-6 pt-4 pb-2'>
                                {
                                    project.technologies.map((tech) => {
                                        return (
                                            <span className="inline-block mb-2 bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
                                        )
                                    })
                                }
                            </div>
                            <a href={project.url} class="inline-flex items-center text-gray-300 hover:underline">
                                Code
                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>
                    </div>
            )})
       }
        </div>
    </>
  )
}

export default Projects