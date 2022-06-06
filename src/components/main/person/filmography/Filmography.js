import React, { useCallback, useEffect, useState } from 'react';
import FilmographyCategory from './FilmographyCategory';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    list: [object],
                    id: filmography.length + Math.floor(Math.random() * 100)
                };
    
                newState.push(newObject);
            };
        };

        getCastCatagories();
        getCrewCatagories();
        setFilmography(newState);
        setLoading(false);
    }, [cast, crew, filmography]);

    const mapFilmographyCategories = filmography.map(category => {
        return <FilmographyCategory category={category} key={category.id} />;
    });

    useEffect(() => {
        buildFilmographyCatagories();
    }, [buildFilmographyCatagories]);

    return (
        <section className='filmography'>
            <h2>Filmography</h2>
            {loading ? null : mapFilmographyCategories}
        </section>
    );
};

export default Filmography;