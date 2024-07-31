import Layout from "../layout";
import CountryInfo from "../country-info";
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getCountries} from "../../utils/api.ts";
import {Country} from "../../utils/types.ts";
import AppHeader from "../app-header";
import "./app.css"

function App() {
    const [countries, setCountries] = useState<Country[] | null>(null);
    useEffect(() => {
        getCountries().then((countries: Country[] | null) => setCountries(countries))
    }, []);

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path="/" element={<Layout
                    countries={countries}
                />}/>
                <Route path="/country/:cca3" element={<CountryInfo/>}/>
            </Routes>
        </>
    );
}

export default App;
