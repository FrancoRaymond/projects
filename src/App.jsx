import React from 'react'
import { projects } from './assets/data/data.js';

function App() {
 

  return (
    <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 py-10 px-3 sm:px-7 md:px-14 lg:px-24'>
      {
        projects.map(project => (
          <article
            key={project.id} 
            className='max-w-96 mx-auto h-full flex flex-col bg-slate-800 rounded-md pb-3'
          >
            <img src={project.image} alt={project.name + ' interface'} loading="lazy"  className=' m-1 rounded-md h-52  object-cover shadow-sm shadow-gray-500'/>
            <div className='px-3 py-4 flex-grow'>
              <p className='text-white font-semibold text-lg'>{project.name}</p>
              <p className='text-gray-400 px-2 mt-3'>{project.description}</p>
              <div className='flex flex-wrap gap-3 mt-3'>
                <span className='tools font-semibold text-white'>Tools:</span> <br />
                {
                  project.tools.map((tool, index) => (
                    <p key={index} className='text-xs text-gray-200 p-1 rounded-md bg-blue-800 bg-opacity-50'>{tool}</p>
                  ))
                }
              </div>
            </div>
            <div className='flex gap-3 w-fit mx-auto mb-3'>
              <button
                className='flex items-center  mt-auto py-1 w-fit px-4 gap-2 text-white border border-white rounded-3xl bg-blue-800 cursor-pointer'
                onClick={() => window.open(project.link)}
              >
                View  
              </button>
              <button
                className='flex items-center  mt-auto py-1 w-fit px-4 gap-2 text-white border border-white rounded-3xl bg-blue-800 cursor-pointer'
                onClick={() => window.open(project.code)}
              >
               Code
              </button>
            </div> 
          </article>
        ))
      }
    </div>
  )
}

export default App;
