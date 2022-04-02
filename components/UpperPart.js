import React from 'react'

const UpperPart = () => {
    return (
        <div className="upperBackground">
            <div className="text-center pt-16 sm:pt-20 space-y-3 text-[#252b42]">
                <p className="text-lg sm:text-xl">Powered by Binance Smart Chain</p>
                <h1 className="text-4xl sm:text-6xl font-medium custom-font uppercase">Welcome to Baby Doge Club</h1>
            </div>

            <div className="px-4 md:px-16 py-8 md:py-12 md:flex md:items-center">
                <div className="lg:px-16 lg:mx-auto mx-12 py-4 md:py-0">
                    <img src="./Assets/dogebaby1.svg" alt="" />
                </div>
                <div className="text-lg sm:text-xl lg:w-1/2 bg-[#F5A52F] text-white py-4 px-6 rounded-xl shadow-lg shadow-[#d89e48] md:shadow-[#F5A52F] -rotate-3 hover:rotate-3 duration-300 ease-in-out">
                    Baby Moon Floki is a hyper-deflationary token that has a smart exchange system built into the ecosystem. Baby Moon Floki automatically sends rewards directly to your wallet. Baby Moon Floki is the gem for meme coin investors looking for hype around new puppy Elon.
                </div>
            </div>

            <div className="py-4 md:py-10 text-center space-x-2 md:space-x-7 md:text-lg">
                <button className="hover:bg-transparent bg-white hover:text-white font-semibold text-[#252b42] py-2 px-4 border hover:border-white rounded-full">Buy</button>
                <button className="hover:bg-transparent bg-white hover:text-white font-semibold text-[#252b42] py-2 px-4 border hover:border-white rounded-full">Buy on Pancakesswap</button>
                <button className="hover:bg-transparent bg-white hover:text-white font-semibold text-[#252b42] py-2 px-4 border hover:border-white rounded-full">Claim</button>
            </div>
        </div>
    )
}

export default UpperPart