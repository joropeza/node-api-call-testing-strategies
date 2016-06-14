import weatherService from './api';

export const getRawForecastFromResponseBody = weatherResponse => {
    if (!weatherResponse.text) {
        throw new Error('unexpected response');
    }
    return JSON.parse(weatherResponse.text).query.results.channel.item.forecast;
}

export const mapRawForecastToDailyArray = rawForecast => {
    return rawForecast.map(day => (
            {
                day: day.date,
                weather: day.text,
            }
        ));
}

export const getTomorrowFromDailyArray = forecast => {
    return forecast[1];
}

export const applyBusinessLogicAroundReactionsToSunnyDays = weatherText => {
    return weatherText.includes('Sunny') ? 'Yay!' : 'Boo';
}

export const processWeatherResponse = weatherResponse => {
    // filter out the body from the response
        const rawForecast = getRawForecastFromResponseBody(weatherResponse);
        // map the response into a return object
        const forecast = mapRawForecastToDailyArray(rawForecast);

        // apply some business logic (is sunny or not tomorrow)
        const tomorrow = getTomorrowFromDailyArray(forecast);
        tomorrow.reaction = applyBusinessLogicAroundReactionsToSunnyDays(tomorrow.weather);

        // return
        return tomorrow;
} 

export const whatsItGoingToBeLikeTomorrow = () =>
    weatherService.getTheWeather().then(response =>
        processWeatherResponse(response)
    )
