const api= {

    key: "cd35381e853363324ef0bace009557d2",
    base: "https://api.openweathermap.org/data/2.5/weather"

};


const searchBox= document.querySelector('.searchDesign');
searchBox.addEventListener('keypress',setQ);

function setQ(event) {

 if(event.keyCode==13){

     getResults(searchBox.value);
  
 }
}

function getResults(query) {

 fetch(`${api.base}?q=${query}&units=metric&appid=${api.key}`)

    .then(weather => {
      
             return weather.json();

    }).then(displayRes);


  }

function displayRes(weather){

   console.log(weather); 

   let city = document.querySelector('.city .city-name');
   city.innerHTML= `${weather.name} , ${weather.sys.country}`;

  let trp=document.querySelector('.temperature .temperature-reading');
  trp.innerHTML= `Temperature : ${(weather.main.temp)}<span>°C</span>`; 

  let hum=document.querySelector('.humidity .humidity-reading');
  hum.innerHTML= `Humidity : ${(weather.main.humidity)}`;

  let des=document.querySelector('.summary .summary-reading');
  des.innerHTML= weather.weather[0].main;


}
