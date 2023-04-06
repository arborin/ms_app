import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

export default function Home() {

    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => {

            return res.data

        })
    })


    console.log(data)

    if (isError) {
        return <h1>Sorry there is an error!</h1>
    }

    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div>
            <h1>THIS IS HOME PAGE</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>New data</button>
        </div>
    )
}
