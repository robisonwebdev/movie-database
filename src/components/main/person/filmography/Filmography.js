import React, { useCallback, useEffect, useState } from 'react';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);

    const buildFilmographyCatagories = useCallback(() => {
        const newState = filmography;        

        const getCastCatagories = () => {
            cast.forEach(obj => {
                setupAndUpdateDepartments(obj, 'Acting');
            });
        };

        const getCrewCatagories = () => {
            crew.forEach(obj => {
                setupAndUpdateDepartments(obj, obj.department);
            });
        };

        const setupAndUpdateDepartments = (object, objectDepartment) => {
            const hasdepartment = newState.some(item => item.department === objectDepartment);
    
            // Updates selected department list by pushing object to list.
            if (hasdepartment) {
                const departmentIndex = newState.findIndex(item => item.department === objectDepartment);
    
                newState[departmentIndex]['list'].push(object);
            };
            
            // Creates department object and pushes object to newState.
            if (!hasdepartment) {
                let newObject = {
                    department: objectDepartment,
                    list: [object]
                };
    
                newState.push(newObject);
            };
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