import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <CirclesWithBar
                height="100"
                width="100"
                color="yellow"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    );
};

export default Loader;