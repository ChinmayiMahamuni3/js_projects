
let cityName = document.getElementById('cityName')
let btn = document.getElementById('getWeather')
let outputContainer = document.querySelector('.output-container')

let clear_sky = ['clear sky','few clouds','scattered clouds','broken clouds','overcast clouds']
let rainy = ['shower rain','rain','light intensity drizzle','drizzle','heavy intensity drizzle','light rain','moderate rain','heavy rain']
let snow = ['light snow','snow','heavy snow','sleet' ]
let hot = ['mist','smoke','haze','dust whirls','fog','sand','ash','squalls','tornado']


btn.addEventListener('click',function(){

    if(cityName.value == "" ){
        alert('Please enter city name!!!')
    }
    let city = document.getElementById('cname')
    let temp = document.getElementById('temp')
    let description = document.getElementById('info')
    let min_temp = document.getElementById('min-temp')
    let max_temp = document.getElementById('max-temp')
    let feels_like = document.getElementById('feels-like')
    let humidity = document.getElementById('humidity')
    let wind = document.getElementById('wind')

    async function getData(){
        let response = await fetch('Your weather api')
        let data = await response.json()

        city.textContent = cityName.value.charAt(0).toUpperCase()+ cityName.value.slice(1);
        temp.textContent = data.main.temp;
        description.textContent = data.weather[0].description;
        min_temp.textContent = data.main.temp_min;
        max_temp.textContent = data.main.temp_max;
        feels_like.textContent = data.main.feels_like;
        humidity.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;

        if(clear_sky.includes(data.weather[0].description)){
            document.body.style.backgroundImage = "url('images/clearSky.gif')"
            console.log('clear sky'); 
        }else if(rainy.includes(data.weather[0].description)){
            document.body.style.backgroundImage = "url('images/rainySky.gif')"
        }else if(snow.includes(data.weather[0].description)){
            document.body.style.backgroundImage = "url('images/snow.gif')"
        }else if(hot.includes(data.weather[0].description)){
            document.body.style.backgroundImage = "url('images/hot.gif')"
        }


        outputContainer.style.display = 'flex'
        cityName.value = ""
        console.log(data)
    }

    getData()
})
