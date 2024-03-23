import React from 'react'
import { useParams } from 'react-router-dom'

export default function Project() {
    const { id } = useParams()

    

    return (
        <>
            SALOM 2
            <p>{id}</p>
        </>
    )
}
