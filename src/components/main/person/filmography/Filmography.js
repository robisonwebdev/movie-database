import React, { useCallback, useEffect, useState } from 'react';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);

    const buildFilmographyCatagories = useCallback(() => {
        const newState = filmography;

        crew.forEach(obj => {
            const hasdepartment = newState.some(item => item.department === obj.department);

            if (hasdepartment) {
                const departmentIndex = newState.findIndex(item => item.department === obj.department);

                newState[departmentIndex]['list'].push(obj);
            };
            
            if (!hasdepartment) {
                let newObject = {
                    department: obj.department,
                    list: [obj]
                };

                newState.push(newObject);
            };
        });

        setFilmography(newState);
    }, [crew, filmography]);

    useEffect(() => {
        buildFilmographyCatagories();
    }, [buildFilmographyCatagories]);

    return (
        <section className='filmography'>
            <h2>Filmography</h2>
            {console.log('Filmography:', filmography)}
        </section>
    );
};

export default Filmography;