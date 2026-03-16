async function getWeather() {

  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "ba92d4e1488f8b7abf9347cb93e6fb2c";
  const city = "Göteborg";

  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Nätverksrespons var inte ok");
    }

    const data = await response.json();

    const temperature = data.main.temp;
    const location = data.name;
    const icon = data.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("weather-temp").textContent =
    `${Math.round(temperature)}°C`;

    document.getElementById("weather-city").textContent =
    location;

    document.getElementById("weather-icon").src = iconUrl;

  } catch (error) {
    console.error("Det gick inte att hämta väderdata:", error);
  }
}

getWeather();
setInterval(getWeather, 60000);