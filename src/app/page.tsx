import { fetchCountries, Country } from './data/country';
import CountryCard from './components/CountryCard';
import './globals.css';

const Home: React.FC = async () => {
    const countries: Country[] = await fetchCountries();

    return (
        <div className="country-list">
            {countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
};

export default Home;
