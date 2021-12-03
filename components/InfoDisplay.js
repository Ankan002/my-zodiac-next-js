import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const InfoDisplay = (props) => {

    const {title, image, zodiacData} = props
    const [error, setError] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if(zodiacData?.message === 'Wrong sign or day passed. Please refer https://aztro.readthedocs.io/en/latest/ '){
            setError(true)
        }
        else{
            setError(false)
        }
    },[zodiacData])

    return (
        <div className="flex flex-col items-center mt-14">
            <h1 className="text-3xl">{title}</h1>
            <img src={image} className="w-80 m-5 rounded-xl" />
            {
                (error) ? (
                    <>
                        <h1 className="text-3xl">Some Error Occurred</h1>
                        <button className="mt-5 bg-green-400 rounded-full" onClick={() => {router.reload()}}>
                            <h1 className="text-xl p-3 text-white">Retry Once</h1>
                        </button>
                    </>
                ) : (
                    <>
                        <h1>( {zodiacData?.date_range} )</h1>
                        <div className="w-80 flex flex-col items-start mt-5"> 
                            <h1 className="text-xl">Current Date: {zodiacData?.current_date}</h1>
                            <h1 className="text-xl">Compatibility: {zodiacData?.compatibility}</h1>
                            <h1 className="text-xl">Lucky Number: {zodiacData?.lucky_number}</h1>
                            <h1 className="text-xl">Lucky Time: {zodiacData?.lucky_time}</h1>
                            <h1 className="text-xl">Color: {zodiacData?.color}</h1>
                            <h1 className="text-xl">Mood: {zodiacData?.mood}</h1>
                            <h1 className="text-2xl text-center w-full mt-5 font-serif font-medium">Description: </h1>
                        </div>
                        <h1 className="text-xl mt-2 w-96 text-center p-3">{zodiacData?.description}</h1>
                    </>
                )
            }
            
        </div>
    )
}

export default InfoDisplay
