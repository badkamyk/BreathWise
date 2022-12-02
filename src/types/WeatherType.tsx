export type WeatherType = {
    coord: {
        lon: number,
        lat: number
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[],
    base: string,
    main: {
        [key: string]: number
    },
    visibility: number,
    wind: {
        [key: string]: number
    },
    rain: {
        [key: string]: number
    },
    clouds: {
        [key: string]: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}