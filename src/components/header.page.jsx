import React from 'react'

const NavBar = ["Home", "About", "Tour"]

const Header = () => {
  return (
    <div className='flex items-end justify-around '>
      <div className=''>
        <p>Travel<span className='text-orange-400'>World</span></p>
      </div>

      {/* nabbar */}
      <div className="flex mt-3 font-poppins text-lg text-black gap-10 ">
        {NavBar.map((item, i) => {
          return (
            <div className='text-black text-lg hover:text-orange-500  transition-all duration-300 cursor-pointer' key={i}>
              {item}
            </div>
          )
        })}
      </div>
      {/* button tag */}
      <div className="flex space-x-4 mt-5">
        <button className="bg-orange-400 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none">
          Login
        </button>
        <button className="bg-orange-400 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none">
          Register
        </button>
      </div>
    </div>
  )
}

export default Header

