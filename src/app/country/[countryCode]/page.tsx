// src/app/country/[countryCode]/page.tsx

import { fetchCountry, Country } from '../../data/country';
import CountryDetail from '../../components/CountryDetail';
import { notFound } from 'next/navigation';

interface CountryPageProps {
    params: { countryCode: string };
}

const CountryPage: React.FC<CountryPageProps> = async ({ params }) => {
    const { countryCode } = params;
    const country: Country = await fetchCountry(countryCode);

    if (!country) {
        return notFound();
    }

    return <CountryDetail country={country} />;
};

export default CountryPage;
