import React from 'react'

function ContainerCards() {
  return (
    <div>
        <div className='w-full bg-teal-900 p-4'>
            <div className=' h-screen pb-40 px-10 bg-slate-400 m-4 mx-16'>
                <div className='h-12 flex items-center justify-center text-lg font-medium bg-yellow-800'>What is your???</div>
                <div className='w-full h-full flex items-center justify-center gap-6'>
                    <div className='h-4/5 bg-slate-950 w-1/3'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <button >
                                <img className="rounded-t-lg w-52" src={require("./img/slim.webp")} alt="" />
                            </button>
                            <div className="p-5">
                                <button >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </button>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='h-4/5 bg-slate-950 w-1/3'></div>
                    <div className='h-4/5 bg-slate-950 w-1/3'></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ContainerCards