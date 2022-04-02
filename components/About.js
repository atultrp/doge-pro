import React from 'react'

const About = () => {
  return (
    <div id="about" className="py-4">
      <h2 className="text-3xl sm:text-5xl font-medium text-center pt-16 sm-pt-20 text-[#252b42] custom-font uppercase">About Baby Doge</h2>
      <div className="px-4 md:px-16 pt-5 sm:pt-20 lg:flex lg:items-center">
        <div className="lg:px-16 lg:mx-auto mx-12 py-4 sm:hidden">
          <img src="./Assets/aboutBabyDoge.svg" alt="" />
        </div>
        <div className="text-lg sm:text-xl lg:w-1/2 bg-[#F5A52F] text-white py-4 px-6 rounded-xl shadow-lg shadow-[#F5A52F] -rotate-3 hover:rotate-3 duration-300 ease-in-out">
          Baby Moon Floki is the gem for meme coin investors looking for hype around new puppy Elon.
          Called by his beloved father, Elon Musk, the potential of this adorable little puppy is limitless. Our lovely baby was finally given the name given to him by Elon Musk himself, and this is "Floki".
          Floki has always dreamed of becoming the first dog to put his paws on the moon. The Baby Moon Floki community intends to bring it there! Join us!
        </div>
        <div className="lg:px-16 lg:mx-auto mx-12 hidden sm:block">
          <img src="./Assets/aboutBabyDoge.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About