import React from 'react';
import '../../../../styles/main/media/header/Runtime.css';

const Runtime = ({ media }) => {
    const { episode_run_time, runtime} = media;

    return (
        <section className='media_runtime'>Runtime</section>
    );
};

export default Runtime;