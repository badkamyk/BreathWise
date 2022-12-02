import { AirQualityType } from "../types/AirQualityType";
import { aqiRating } from "../utils/aqiRating";
import { pollutionDescription } from "../utils/pollutionDescription";


// const airQualityDescription {

// }

export const Card = ({ airData }: { airData: AirQualityType | undefined }) => {
    const aqiColor = airData && aqiRating[airData?.list[0].main.aqi as keyof typeof aqiRating][1];
    return (
        <div className="bg-purple-100 m-6 text-center border-2 rounded-lg">
            {airData && <h2 className={`text-4xl font-bold bg-yellow-100 p-2 text-${aqiColor}-500`}>AQI rating: {aqiRating[airData?.list[0].main.aqi as keyof typeof aqiRating][0]}</h2>}
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                    <svg
                        viewBox="0 0 88 88"
                        className="w-full max-w-screen-xl text-indigo-100"
                    >
                        <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="44"
                        />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="37.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="29.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="22.5"
                        />
                    </svg>
                </div>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {airData ? (
                        <>
                            {Object.keys(airData.list[0].components).map(
                                (key: string, index: number) => {
                                    return (
                                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                            <div className="p-5 my-auto">
                                                <p className="text-lg font-semibold tracking-wide text-gray-600 uppercase">
                                                    {key}
                                                </p>
                                                <p className="text-sm mb-4"><span className="bg-purple-100 p-1 rounded-xl">{pollutionDescription[key as keyof typeof pollutionDescription]}</span></p>
                                                <p className="text-md leading-5 text-gray-900">
                                                    {airData.list[0].components[key]} μg/m3
                                                </p>
                                            </div>
                                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                        </div>
                                    );
                                }
                            )}
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </>
                    ) : (
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5 my-auto">
                                <p className="mb-2 font-bold">
                                    No Air Quality Data
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};
