import { useState } from "react";
import { WeatherType } from "../types/WeatherType";
import { AirQualityType } from "../types/AirQualityType";
import { AirCard } from "./AirCard";
import WeatherCard from "./WeatherCard";
import SearchForm from "./SearchForm";




export default function Search() {
    const [airQuality, setAirQuality] = useState<AirQualityType>();
    const [weather, setWeather] = useState<WeatherType>();
    const [loading, setLoading] = useState(false);


    const onSubmit = async ({ search }: { search: string }) => {
        setLoading(true);
        const responseGeoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=9fefb810292a585cfec8bf59f43c5c69`);
        const dataGeoLocation = await responseGeoLocation.json();

        const responseAirQuality = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${dataGeoLocation[0].lat}&lon=${dataGeoLocation[0].lon}&appid=9fefb810292a585cfec8bf59f43c5c69`);
        const dataAirQuality = await responseAirQuality.json();
        setAirQuality(dataAirQuality);

        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataGeoLocation[0].lat}&lon=${dataGeoLocation[0].lon}&units=metric&appid=9fefb810292a585cfec8bf59f43c5c69`);
        const dataWeather = await responseWeather.json();
        setWeather(dataWeather);
        console.log(dataWeather);
        setLoading(false);
    };

    return (
        <div className="min-h-screen p-8 border-t-2 mt-3">
            <SearchForm onSubmit={onSubmit} />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            ) : (
                <>
                    {airQuality && <AirCard airData={airQuality} />}
                    {weather && <WeatherCard weatherData={weather} />}
                </>
            )}
        </div>
    )
}
