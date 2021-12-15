import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
function Result({request}) {
    console.log('object request',request)
    return (
        <FlipMove className='mt-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
           {request.map(result=>(
               <Thumbnail key={result.id} result={result} /> //inflip move child component must have key props
           ))}
        </FlipMove>
    )
}

export default Result
