import countries from './countryDictionary';
import weathers from './weatherConditions';
// source: https://geobytes.com/free-ajax-cities-jsonp-api/
jQuery(() => {
  jQuery('#f_elem_city').autocomplete({
    source(request, response) {
      jQuery.getJSON(
        `https://secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&callback=?&q=${request.term}`,
        (data) => {
          response(data);
        },
      );
    },
    minLength: 3,
    select(event, ui) {
      const selectedObj = ui.item;
      jQuery('#f_elem_city').val(selectedObj.value);
      //getcitydetails(selectedObj.value);
      return false;
    },
    open() {
      jQuery(this).removeClass('ui-corner-all').addClass('ui-corner-top');
    },
    close() {
      jQuery(this).removeClass('ui-corner-top').addClass('ui-corner-all');
    },
  });
  jQuery('#f_elem_city').autocomplete('option', 'delay', 100);
});

//61e5f1d9ba214a56aac3a34d089a26b5 key

const getByCity = async (city, options) => {
  try {
    let units = 'imperial';
    if (options.celsius) {
      units = 'metric';
    }
    const fe = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=<APIKEY>`, { mode: 'cors' });
    const result = await fe.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const changeBg = (type) => {
  const app = document.getElementById('app');
  app.style.filter = 'blur(5px) brightness(1.3)';
  setTimeout(() => {
    app.style.backgroundImage = `url('${weathers[type]}')`;
    app.style.filter = 'blur(5px) brightness(1)';
  }, 1000)
};

//getByCity({celsius: true})

window.onload = () => {
  const input = document.getElementById('f_elem_city');

  input.addEventListener('keydown', async e => {
    if (e.key === 'Enter') {
      let inputVal = input.value.split(',');
      inputVal = inputVal.map(inp => inp.trim())

      let countrie = Object.keys(countries).find(key => {
        if (countries[key] === inputVal[2]) {
          return key;
        }
      });

      let val = `${inputVal[0]}${countrie ? ',' + countrie.toLowerCase() : ''}`;
      const data = JSON.parse('{"coord":{"lon":-77.46,"lat":18.47},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":28,"feels_like":30.41,"temp_min":28,"temp_max":28,"pressure":1017,"humidity":69},"visibility":10000,"wind":{"speed":3.1,"deg":30},"clouds":{"all":20},"dt":1582820774,"sys":{"type":1,"id":7107,"country":"JM","sunrise":1582803040,"sunset":1582845298},"timezone":-18000,"id":3488726,"name":"Rio Bueno","cod":200}')//await getByCity(val, {celsius: true});
      document.getElementById('data').innerHTML = JSON.stringify(data);
      changeBg(data.weather[0].main);
    }
  });
};