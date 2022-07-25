import React from 'react';
import notFound from '../../Assets/errorImage.jpg';


const NotFound = () => {
    return (
        <div className='bg-base-100'>
            <img className='fluid mx-auto' src={notFound} alt="Page not found" />
        </div>
    );
};

export default NotFound;