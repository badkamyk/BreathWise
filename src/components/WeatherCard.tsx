import { WeatherType } from "../types/WeatherType"
import { Dropdown, Card } from "flowbite-react"

export default function WeatherCard({ weatherData }: { weatherData: WeatherType }) {
    const { main, weather, wind, clouds, name } = weatherData
    const { temp, pressure, humidity } = main
    const { speed } = wind
    const { all } = clouds
    const { description, icon } = weather[0]
    const weatherInfoArray = [
        { title: "Temperature", value: `${temp}°C` },
        { title: "Pressure", value: `${pressure} hPa` },
        { title: "Humidity", value: `${humidity}%` },
        { title: "Wind Speed", value: `${speed} m/s` },
        { title: "Cloudiness", value: `${all}%` },
    ]

    return (
        <div className="max-w-sm m-6 self-center">
            <Card>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src={`https://openweathermap.org/img/w/${icon}.png`}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <span className="text-md text-gray-500 dark:text-gray-400">
                        {description}
                    </span>
                    <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center items-center">
                        {weatherInfoArray.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-md text-gray-500 dark:text-gray-400">
                                    {item.title}
                                </span>
                                <p
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-3 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}
