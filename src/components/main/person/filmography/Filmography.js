import React, { useCallback, useEffect, useState } from 'react';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);

    const buildFilmographyCatagories = useCallback(() => {
        const newState = filmography;

        const getCastCatagories = () => {
            cast.forEach(obj => {
                const hasdepartment = newState.some(item => item.department === 'Acting');
    
                if (hasdepartment) {
                    const departmentIndex = newState.findIndex(item => item.department === 'Acting');
    
                    newState[departmentIndex]['list'].push(obj);
                };
                
                if (!hasdepartment) {
                    let newObject = {
                        department: 'Acting',
                        list: [obj]
                    };
    
                    newState.push(newObject);
                };
            });
        };

        const getCrewCatagories = () => {
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
        };

        getCastCatagories();
        getCrewCatagories();
        setFilmography(newState);
    }, [crew, filmography]);

    useEffect(() => {
        buildFilmographyCatagories();
    }, [buildFilmographyCatagories]);

    return (
        <section className='filmography'>
            <h2>Filmography</h2>
            {console.log('Filmography:', filmography)}
            {console.log('Cast:', cast)}
        </section>
    );
};

export default Filmography;