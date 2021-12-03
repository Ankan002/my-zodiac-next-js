import React from "react";
import { useRouter } from "next/router";

const Card = (props) => {

    const {name, params, image, birthday} = props
    const router = useRouter()
    const dayArray = ['today', 'tomorrow', 'yesterday']

  return (
    <div className="p-3 w-96">
      <div className="bg-white rounded-lg shadow-lg">
        <img
          src={image}
          alt=""
          className="rounded-t-lg w-96"
        />
        <div className="p-3">
          <h2 className="font-bold mb-2 text-2xl text-purple-800">
            {name}
          </h2>
          <p className="text-purple-700 mb-2">
            Birthday: {birthday} 
          </p>

          <button 
            className="bg-black py-2 px-4 mt-2 mx-1 rounded text-sm font-semibold hover:bg-opacity-75 text-white w-24" 
            onClick={() => {
              router.push({
                pathname: '/zodiac',
                query: {
                  name: params,
                  day: dayArray[2],
                  title: name,
                  image
                }
              })
            }}
          >
            Yesterday
          </button>

          <button 
            className="bg-black py-2 px-4 mt-2 mx-1 rounded text-sm font-semibold hover:bg-opacity-75 text-white w-24" 
            onClick={() => {
              router.push({
                pathname: '/zodiac',
                query: {
                  name: params,
                  day: dayArray[0],
                  title: name,
                  image
                }
              })
            }} 
          >
            Today
          </button>

          <button 
            className="bg-black py-2 px-4 mt-2 mx-1 rounded text-sm font-semibold hover:bg-opacity-75 text-white w-24" 
            onClick={() => {
              router.push({
                pathname: '/zodiac',
                query: {
                  name: params,
                  day: dayArray[1],
                  title: name,
                  image
                }
              })
            }}
          >
            Tomorrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
