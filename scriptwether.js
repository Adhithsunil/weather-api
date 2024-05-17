const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6a00ca6324msh3a6ff0baf0adaefp1b9f25jsnce3d8cb153fe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
(async()=>{
try {
    const response =  fetch(url, options);
    const result =  response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
})()
