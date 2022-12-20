import React from 'react'
import certificates from '../data/certificates';
import Modal from './Modal';


const Certificates = () => {
    
  return (
    <div>
        <div>
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl'>Certificados</h2>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          certificates.map((cert) => {
            return (
              <Modal key={cert.name} name={cert.name} inst={cert.instituto} image={cert.image}/>
            )
          })
        }
        </div>
    </div>
  )
}

export default Certificates

