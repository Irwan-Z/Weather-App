const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',()=>{
    const city = document.querySelector('.search-box input').value;
    if(city === '')//agar tidak berjalan jika kosong
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fecfe37336e0350f95a5bd1ca3faf439`)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data.weather[0].main);

        // if(data.cod === '404') {
        //     container.style.height = '400px';
        //     weatherBox.style.display = 'none';
        //     weatherDetails.style.display = 'none';
        //     error404.style.display = 'block';
        //     error404.classList.add('fadeIn');
        //     return;
        // }
        

        error404.style.display = 'none';//pass
        error404.classList.remove('fadeIn')//pass


        const image = document.querySelector('.weather-box img');
        const suhu = document.querySelector('.weather-box .suhu');
        const keterangan = document.querySelector('.weather-box .keterangan');
        const kelembapan = document.querySelector('.weather-details .kelembapan span');
        const angin = document.querySelector('.weather-details .angin span');

        switch (data.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = '';
        }

        suhu.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
        keterangan.innerHTML = `${data.weather[0].description}`;
        kelembapan.innerHTML = `${data.main.humidity}%`;
        angin.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '550px';


    })
    .catch((err)=>{
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            console.log(err,'eror bang')
            return;
    })
    
})








// function cuaca(){
//     const city = 'INDIA'
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fecfe37336e0350f95a5bd1ca3faf439`)
//     .then((res)=>{
//         console.log(res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }