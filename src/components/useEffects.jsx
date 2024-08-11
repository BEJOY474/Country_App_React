import React, { useEffect, useState } from 'react'

const useEffects = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    const fatchData = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const datas = await res.json()
            setData(datas)
            setLoading(false)
            setErrors(null)
        } catch (error) {
            setLoading(false)
            setErrors(error)
        }
    }

    useEffect(() => {
        fatchData(url)

        // fetch(url).then((res) => {
        //     return res.json()
        // }).then((datas) => {
        //     setData(datas)
        //     setLoading(false)
        //     setErrors(null)
        // }).catch((error) => {
        //     setErrors(error.message)
        //     setLoading(false)
        // })
    }, [])

    return (
        { data, isLoading, errors }
    )
}

export default useEffects
