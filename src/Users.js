import React from 'react'
import {useState,useEffect} from 'react';

export default function Users() {
    const [data, setdata] = useState([ ])

    useEffect(()=>{
        let url=`https://jsonplaceholder.typicode.com/users`;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                console.log("data",data);
                setdata(data)
            })
        })
    },[])
    console.log("داتاجسعب اکجعفب")
    return (
        <div>
            Users Page
            {
                data.map((data)=>{
                    return <h1 key={data.id}>{data.name}</h1>
                })
            }
        </div>
    )
}
