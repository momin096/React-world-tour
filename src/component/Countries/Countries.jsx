import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
        
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                    {
                        visitedFlag.map((flag,idx) => <img key={idx} src={flag} />)
                    }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedFlag={handleVisitedFlag} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;