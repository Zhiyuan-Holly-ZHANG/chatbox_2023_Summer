using System;
using System.Net.Http;
using Newtonsoft.Json;

// using the OpenWeatherMap API:
class Program
{
    static async Task Main(string[] args)
    {
        string apiKey = "YOUR_API_KEY"; // TO DO
        string city = "London";
        string url = $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}";

        using (var httpClient = new HttpClient())
        {
            var response = await httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();

            // Deserialize the JSON response
            var weatherData = JsonConvert.DeserializeObject<WeatherData>(content);

            // Access the relevant data
            Console.WriteLine($"City: {weatherData.Name}");
            Console.WriteLine($"Temperature: {weatherData.Main.Temperature} degrees Celsius");
        }
    }
}

class WeatherData
{
    public string Name { get; set; }
    public MainData Main { get; set; }
}

class MainData
{
    [JsonProperty("temp")]
    public double Temperature { get; set; }
}