import React, { useEffect, useState } from 'react';
import '../../../styles/main/person/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const [jobList, setJobList] = useState([]);

    console.log(combinedCredits)
    return (
        <section className='filmography'>Filmography</section>
    );
};

export default Filmography;