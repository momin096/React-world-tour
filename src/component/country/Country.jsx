import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'purple' : 'white' }} >{name.common}</h2>
            <img className='image' src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want visit'}
        </div>
    );
};

export default Country;