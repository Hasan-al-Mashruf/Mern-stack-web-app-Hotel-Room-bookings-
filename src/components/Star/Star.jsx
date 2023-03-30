import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const Star = ({ rating }) => {
    const starRating = Array.from({ length: 5 }, (v, index) => {
        const halfStar = index + 0.5
        return (
            <span key={index}>
                {
                    rating >= index + 1 ? <BsStarFill className='text-yellow-400 mx-1 text-xl'  />
                        : rating >= halfStar ? <BsStarHalf className='text-yellow-400 mx-1 text-xl' />
                            : <BsStar className='mx-1 text-gray-700 text-xl' />
                }
            </span>
        )
    })
    return <div className='flex'>
        {starRating}
    </div>
};

export default Star;