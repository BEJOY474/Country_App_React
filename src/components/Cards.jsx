import React from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'
const Cards = (props) => {
    return (
        <div>
            <div className='flex flex-wrap justify-center ' >


                {
                    props.countryData.map((country) => {
                        const countryNew = { country, id: uuidv4() }
                        return (
                            <Card {...countryNew} key={countryNew.id} deleteCountryname={props.deleteCountry} />
                        )
                    })
                }

                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </div>
    )
}

export default Cards
