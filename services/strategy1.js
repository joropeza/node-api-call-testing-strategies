import weatherService from './api';

export const whatsItGoingToBeLikeTomorrow = () => {
    return weatherService.getTheWeather().then(response => {
        // filter out the body from the response
        const rawForecast = JSON.parse(response.text).query.results.channel.item.forecast;

        // map the response into a return object
        const forecast = rawForecast.map(day => (
            {
                day: day.date,
                weather: day.text,
            }
        ));

        // apply some business logic (is sunny or not tomorrow)
        const tomorrow = forecast[1];
        tomorrow.reaction = tomorrow.weather.includes('Sunny') ? 'Yay!' : 'Boo';

        // return
        return tomorrow;
    });
}
