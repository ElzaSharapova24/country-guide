import BackButton from "../back-button";
import {Country} from "../../utils/types.ts";
import {useEffect, useState} from "react";
import {fetchCountryByCode} from "../../utils/api.ts";
import {useParams} from "react-router-dom";
import Loader from "../loader";

function CountryInfo() {
    const [country, setCountry] = useState<Country | null>(null);
    const {cca3} = useParams<{ cca3: string }>();
    console.log(cca3);  // Убедитесь, что параметр выводится корректно

    useEffect(() => {
        if (cca3) {
            fetchCountryByCode(cca3).then((country: Country) => setCountry(country));
        } else {
            console.error('cca3 is undefined');
        }
    }, [cca3]);

    if (!country) {
        return <Loader/>
    }

    return (
        <>
            {
                country ? (
                    <section className='flex'>
                        <BackButton/>
                        <ul className='flex-wrap'>
                            <h1>{country.name.common}</h1>
                            <li className='flex-wrap'>
                                <strong>Оффициальное название страны: </strong>
                                <span className=''>{country.name.official}</span>
                            </li>
                            <li className='flex-wrap'>
                                <strong>Общее название страны: </strong>
                                <span>{country.name.common}</span>
                            </li>
                            <li className='flex-wrap'>
                                <strong>Столитца: </strong>
                                <span>{country.capital}</span>
                            </li>
                            <li className='flex-wrap'>
                                <strong>Население: </strong>
                                <span>{country.population}</span>
                            </li>
                            <li className='flex-wrap'>
                                <strong>Регион: </strong>
                                <span>{country.region}</span>
                            </li>
                            <li className='flex-wrap'>
                                <strong>Начало недели: </strong>
                                <span>{country.startOfWeek}</span>
                            </li>
                        </ul>
                        <div className='flex-wrap'>
                            <strong>Флаг страны</strong>
                            <img className='' src={country.flags.png} alt={country.name.common}/>
                        </div>
                    </section>
                ) : <Loader/>
            }
        </>
    );
}

export default CountryInfo;
