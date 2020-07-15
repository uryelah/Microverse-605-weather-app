import weathers from './weatherConditions';
import countries from './countryDictionary';

const changeUI = (data, system) => {
  const { weather, name } = data;
  const {
    temp, temp_min: tempMin, temp_max: tempMax, pressure, humidity,
  } = data.main;
  const { country } = data.sys;
  const { speed, deg } = data.wind;
  const { main, description, icon } = weather[0];
  const bg = weathers[data.weather[0].main];
  const unit = system === 'metric' ? '°C' : '°F';

  const app = document.getElementById('app');
  const iconElement = document.getElementById('icon');
  const mainElement = document.getElementById('weather-main');
  const descriptionElement = document.getElementById('weather-description');
  const tempElement = document.getElementById('temperature-main');
  const tempMinMaxElement = document.getElementById('temperature-min-max');
  const pressureElement = document.getElementById('pressure');
  const humidityElement = document.getElementById('humidity');
  const cityElement = document.getElementById('city');
  const countryElement = document.getElementById('country');
  const windSpeedElement = document.getElementById('wind-velocity');
  const windDegElement = document.getElementById('wind-direction');

  iconElement.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  mainElement.innerText = main;
  descriptionElement.innerText = description;
  tempElement.innerText = `${Math.round(temp)} ${unit}`;
  tempMinMaxElement.innerText = `${Math.round(tempMin)}${unit} - ${Math.round(tempMax)}${unit}`;
  pressureElement.innerText = `${pressure}hPa`;
  humidityElement.innerText = `${humidity}%`;
  cityElement.innerText = name;
  countryElement.innerText = countries[country];
  windSpeedElement.innerText = `${speed}m/s`;
  windDegElement.innerText = `${deg}deg`;

  app.style.filter = 'blur(5px) brightness(1.3)';
  setTimeout(() => {
    app.style.backgroundImage = `linear-gradient(to top, #ffffff11, #ffffff66), url('${bg}')`;
    app.style.filter = 'blur(5px) brightness(1)';
  }, 1000);
};

export default changeUI;
