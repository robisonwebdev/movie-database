import React from 'react';
import '../../../../styles/main/movie/facts/Runtime.css';

const Runtime = ({ runtime }) => {
    const computeRuntime = () => {
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.floor((runtimeToHours - hours) * 60);

        if (isNaN(runtime)) return null;

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    return (
        <p className='movie_runtime'>
            {computeRuntime()}
        </p>
    );
};

export default Runtime;