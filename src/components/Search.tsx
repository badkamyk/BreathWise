import {useState} from "react";
import {WeatherType} from "../types/WeatherType";
import {AirQualityType} from "../types/AirQualityType";
import {AirCard} from "./AirCard";
import SearchForm from "./SearchForm";


export default function Search() {
    const [airQuality, setAirQuality] = useState<AirQualityType>();
    const [weather, setWeather] = useState<WeatherType>();
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async ({search}: { search: string }) => {
        setIsLoading(true);
        const responseGeoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=YOUR_API_KEY`);
        const dataGeoLocation = await responseGeoLocation.json();

        const responseAirQuality = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${dataGeoLocation[0].lat}&lon=${dataGeoLocation[0].lon}&appid=YOUR_API_KEY`);
        const dataAirQuality = await responseAirQuality.json();
        setAirQuality(dataAirQuality);

        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataGeoLocation[0].lat}&lon=${dataGeoLocation[0].lon}&units=metric&appid=YOUR_API_KEY`);
        const dataWeather = await responseWeather.json();
        setWeather(dataWeather);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen p-8 mt-3">
            <h1 className="text-4xl mb-3 font-extrabold dark:text-white">Air quality<small
                className="ml-2 font-semibold text-gray-500 dark:text-gray-400">Type in your city</small></h1>
            <SearchForm onSubmit={onSubmit}/>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            ) : (
                <>
                    {airQuality && weather && <AirCard airData={airQuality} weatherData={weather}/>}
                </>
            )}
        </div>
    )
}
