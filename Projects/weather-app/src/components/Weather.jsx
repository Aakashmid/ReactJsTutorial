import React, { useEffect, useState } from 'react'
import Search from './Search'

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(""); // Add error state

    const fetchWeatherData = async (param) => {
        if(param.trim()===""){
            setError("Please enter a city name.");
            setWeatherData(null);
            return;
        }
        setLoading(true);
        setError(""); // Reset error before fetching
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
            );
            const data = await response.json();
            if (response.ok) {
                setWeatherData(data);
                setError("");
            } else {
                setWeatherData(null);
                setError(data.message ? data.message : "City not found.");
            }
        } catch (e) {
            setWeatherData(null);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = () => {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    useEffect(() => {
        fetchWeatherData("delhi");
    }, []);

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <div>
                <Search submitSearch={handleSearch} setSearch={setSearch} search={search} />
                {error && (
                    <div className="text-center text-red-500 font-semibold my-4">
                        {error}
                    </div>
                )}
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="text-blue-500 text-lg font-semibold animate-pulse">Loading...</span>
                    </div>
                ) : (
                    weatherData && !error && (
                        <div>
                            <div className="city-name text-center mb-2">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {weatherData?.name}, <span className="text-blue-500">{weatherData?.sys?.country}</span>
                                </h2>
                            </div>
                            <div className="date text-center mb-4">
                                <span className="text-gray-500">{getCurrentDate()}</span>
                            </div>
                            <div className="temp text-center text-6xl font-extrabold text-blue-600 mb-2">
                                {weatherData?.main?.temp ? `${Math.round(weatherData.main.temp - 273.15)}°C` : "--"}
                            </div>
                            <p className="description text-center text-lg text-gray-700 capitalize mb-6">
                                {weatherData && weatherData.weather && weatherData.weather[0]
                                    ? weatherData.weather[0].description
                                    : ""}
                            </p>
                            <div className="weather-info flex justify-around gap-4">
                                <div className="column flex flex-col items-center bg-blue-50 rounded-lg p-4 w-1/2">
                                    <p className="wind text-xl font-semibold text-blue-700">{weatherData?.wind?.speed} m/s</p>
                                    <p className="text-gray-600">Wind Speed</p>
                                </div>
                                <div className="column flex flex-col items-center bg-blue-50 rounded-lg p-4 w-1/2">
                                    <p className="humidity text-xl font-semibold text-blue-700">{weatherData?.main?.humidity}%</p>
                                    <p className="text-gray-600">Humidity</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Weather
