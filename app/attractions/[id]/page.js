import React from 'react'
import Image from 'next/image'
import { getData } from './data'
export default async function page({params}) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div>
      {data.length > 0 &&
      <div
      style={{width:"50%"}}
      >
        <h1>{data[0].name}</h1>
        <br />
        <div 
        >
        <Image src={data[0].coverimage}
        width={0}
        height={0}
         alt={data.name}
         layout="responsive"/>
        </div>
        
        <br />
        <p>{data[0].detail}</p>
      </div>
      }
    </div>
  )
}
