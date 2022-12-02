export type AirQualityType = {
    coord: number[],
    list: {
        dt: number,
        main: {
            aqi: number
        },
        components: {
            [key: string]: number
        }
    }
}