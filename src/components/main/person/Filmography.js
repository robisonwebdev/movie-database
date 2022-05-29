import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/main/person/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const [jobList, setJobList] = useState([]);

    console.log(combinedCredits)
    return (
        <section className='filmography'>Filmography</section>
    );
};

export default Filmography;