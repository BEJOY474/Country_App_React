import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText, setSearctText] = useState('')

    const handleInputChange = (e) => {
        setSearctText(e.target.value)
    }

    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText])

    return (
        <div>
            <div className="flex justify-center">
                <form className="w-full max-w-xs">
                    <div className="relative w-full min-w-[200px] h-10 ">
                        <input
                            class="w-full h-full px-3 py-3  text-sm font-normal rounded-md inputFld"
                            placeholder="Search country..."
                            value={searchText}
                            onChange={handleInputChange}
                        />


                    </div>
                </form>
            </div>
        </div>
    )
}





export default Search
