import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-centre px-4 py-3 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700">&lt;</span>

          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>

        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="/About">About</a>
            <a className='hover:font-bold' href="/Contact">Contact</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-700 px-4 py-4 rounded-full flex items-center gap-2'>
          <img className='invert w-6 h-6' src="/icons/github.svg" alt="github logo" />
          <span className='font-bold'>GitHub</span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
