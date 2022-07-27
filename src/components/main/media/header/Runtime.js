import React, { useEffect, useState } from 'react';
import '../../../../styles/main/media/header/Runtime.css';

const Runtime = ({ media }) => {
    const { episode_run_time, runtime} = media;
    const [value, setValue] = useState(NaN);
    
    const getRuntime = () => {
        const runtimeToHours = (value / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.floor((runtimeToHours - hours) * 60);

        if (isNaN(value)) return '0m';

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    useEffect(() => {
        if(episode_run_time === undefined) {
            setValue(runtime);
        }

        if (runtime === undefined) {
            setValue(episode_run_time[0])
        }
    }, [episode_run_time, runtime]);

    return (
        <div className='media_runtime'>
            {getRuntime()}
        </div>
    );
};

export default Runtime;