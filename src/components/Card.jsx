import React from 'react'

const Card = (props) => {
    const { name, flags, capital, population, area, region } = props.country
    const handleClick = () => {
        props.deleteCountryname(name.common)
    }
    return (
        <div>
            <div className="relative m-1 flex flex-col mt-6 text-gray-700
             bg-white shadow-md bg-clip-border rounded-xl sm:max-w-md md:w-80 lg:w-80">
                <div
                    className="relative h-auto  overflow-hidden text-white
                     bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src={flags.png}
                        alt={name.common} className='sm:max-w-md md:w-full p-2 rounded-xl' />
                </div>

                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-[24px] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                        {name.common}
                    </h5>
                    <p className="block  font-bold text-base antialiased leading-relaxed text-inherit">
                        Capital : {capital}
                    </p>

                    <p className="block font-bold text-base antialiased leading-relaxed text-inherit">
                        Area : {area}
                    </p>

                    <p className="block font-bold text-base antialiased leading-relaxed text-inherit">
                        Propulation : {population}
                    </p>

                    <p className="block font-bold text-base antialiased leading-relaxed text-inherit">
                        Region : {region}
                    </p>

                </div>

                <div className=" flex items-center justify-center gap-x-3">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-8 py-2 mb-3
                         text-sm font-semibold text-white shadow-sm
                          hover:bg-indigo-400 focus-visible:outline
                           focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-indigo-600"
                        onClick={handleClick}
                    >
                        Delete Country
                    </button>
                </div>


            </div>
        </div>
    )
    // return (
    //     <div>
    //         country
    //     </div>
    // )
}

export default Card
