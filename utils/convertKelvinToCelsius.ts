export function convertKelvinToCelsius(tmpInKelvin: number): number{
    const tmpInCelsius = tmpInKelvin - 273.15;
    return Math.floor(tmpInCelsius);
}