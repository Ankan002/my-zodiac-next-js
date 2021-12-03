import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar'
import LoaderAnimation from '../components/LoaderAnimation'
import InfoDisplay from '../components/InfoDisplay'
import Head from 'next/head'

const zodiac = () => {

    const router = useRouter()
    const name = router.query.name
    const day = router.query.day
    const title = router.query.title
    const image = router.query.image
    const [zodiacData, setZodiacData] = useState({})
    const [loading, setLoading] = useState(false)

    const getZodiacData = async(name, day) => {
        setLoading(true)
        const response = await fetch(`https://aztro.sameerkumar.website/?sign=${name}&day=${day}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data =  await response.json()
        setZodiacData(data)
        setLoading(false)
    }
    
    useEffect(() => {
        getZodiacData(name, day)
    }, [name, day])

    return (
        <div>
            <Head>
                <title>My Zodiac</title>
                <link rel="icon" href="/rodeo.png" />
            </Head>
            <Navbar />
            {
                loading ? (
                    <div className="min-w-full flex justify-center items-center h-96">
                        <LoaderAnimation />
                    </div>
                ) : (
                    <div className="min-w-full">
                        <InfoDisplay title={title} image={image} zodiacData ={zodiacData} />
                    </div>
                )
            }
        </div>
    )
}

export default zodiac
