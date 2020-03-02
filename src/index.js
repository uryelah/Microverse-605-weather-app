import countries from './countryDictionary';
import geoCitiesHelper from './geoCitiesHelper';
import changeUI from './changeUi';

geoCitiesHelper();

const load = () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('weather');

  loader.classList.toggle('toggle-view');
  content.classList.toggle('toggle-view');
};

const loadError = () => {
  const content = document.getElementById('weather');
  content.innerHTML = '<div style="width:100%;height:0;padding-bottom:62%;position:relative;grid-row: 3; grid-column:1/-1"><iframe src="https://giphy.com/embed/96ayqIqaTqQlW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><h2 class="error-message">Error, try again later...</h2>';
  load();
};

const searchWeather = async () => {
  const input = document.getElementById('f_elem_city');
  let inputVal = input.value.split(',');
  const system = document.getElementsByClassName('pressed-btn')[0];
  inputVal = inputVal.map(inp => inp.trim());

  const country = Object.keys(countries).find((key) => {
    if ((inputVal.length === 3 && countries[key] === inputVal[2])
      || (inputVal.length === 2 && countries[key] === inputVal[1])) {
      return key;
    }
    return false;
  });

  load();
  const val = `${inputVal[0]}${country ? `,${country.toLowerCase()}` : ''}`;

  try {
    const data = await getByCity(val, { system: system.dataset.system });
    changeUI(data, system.dataset.system);
    setTimeout(() => {
      load();
    }, 600);
  } catch (err) {
    loadError();
  }
};

const getByCity = async (city, options) => {
  try {
    const { system } = options;
    const fe = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${system}&appid=d7becff7bc9a42f1a70e87fe334f70f5`, { mode: 'cors' });
    const result = await fe.json();
    return result;
  } catch (err) {
    return err;
  }
};

const activateTempButton = () => {
  const tempBtns = document.getElementsByClassName('degres-btn');
  [...tempBtns].forEach((btn) => {
    btn.addEventListener('click', () => {
      [...tempBtns].forEach((b) => {
        if (b === btn) {
          b.classList.add('pressed-btn');
        } else {
          b.classList.remove('pressed-btn');
        }
      });
      searchWeather();
    });
  });
};

window.onload = () => {
  const input = document.getElementById('f_elem_city');
  activateTempButton();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
      searchWeather();
    }
  });
};
