import React from 'react'
import { projects } from './assets/data/data.js';

function App() {
const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500']

  return (
    <div className='py-16'>
      <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
        {
          projects.map(project => (
            <article
              key={project.id} 
              className='max-w-96 mx-auto h-full flex flex-col bg-slate-800 rounded-md pb-3'
             
            >
              <img src={project.image} alt={'screenshot of ' + project.name + ' interface'} loading="lazy"  className=' m-1 rounded-md h-52  object-cover shadow-sm shadow-gray-500'/>
              <div className='px-3 py-4 flex-grow'>
                <p className='text-white font-semibold text-lg'>{project.name}</p>
                <p className='text-gray-400 px-2 mt-3'>{project.description}</p>
                <div className='flex flex-wrap gap-3 mt-3'>
                  <span className='tools font-semibold text-white'>Tools:</span> <br />
                  {
                    project.tools.map((tool, index) => (
                      <p key={index} className={`text-xs text-gray-200 p-1 rounded-md ${colors[Math.floor(Math.random() * colors.length)]} bg-opacity-50`}>{tool}</p>
                    ))
                  }
                </div>
              </div>
              <div className='flex gap-3 w-fit mx-auto'>
                <button
                  className='flex items-center cursor-pointer mt-auto py-1 w-fit px-4 gap-2 text-white bg-blue-800 rounded-3xl'
                  onClick={() => window.open(project.link)}
                >
                  View
                </button>
                <button
                  className='flex items-center cursor-pointer mt-auto py-1 w-fit px-4 gap-2 text-white bg-blue-800 rounded-3xl'
                  onClick={() => window.open(project.code)}
                >
                  Code
                </button>
              </div> 
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default App;