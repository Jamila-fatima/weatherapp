function check() {
    const cityName = document.querySelector('input').value;


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
        .then(function (response) {
            // handle success
            console.log(response.data.weather[0].main);

            document.querySelector("h1").innerHTML = response.data.weather[0].main;
            document.querySelector('h1').innerHTML = `City Name: ${response.data.name}`;
            document.querySelector('h2').innerHTML = `Weather: ${response.data.weather[0].main}`;
            document.querySelector('h3').innerHTML = `Description: ${response.data.weather[0].description}`;
            document.querySelector('h4').innerHTML = `Temperature in Celsius: ${Math.floor(response.data.main.temp - 273.15)}deg C`;
            document.querySelector('h5').innerHTML = `Wind Speed: ${response.data.wind.speed} min/sec`;

            document.querySelector('h6').innerHTML = `Time: ${new Date(response.data.dt * 1000).getHours()}:${new Date(response.data.dt * 1000).getMinutes()}:${new Date(response.data.dt * 1000).getSeconds()}`;
            document.querySelector('p').innerHTML = `Date: ${new Date(response.data.dt * 1000).getDate()} of ${new Date(response.data.dt * 1000).getMonth()}th ${new Date(response.data.dt * 1000).getFullYear()}`;


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

// function check() {
//     const cityName = document.querySelector('input').value;

// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99bf340ab3242744dbfe45645c790301`)
// .then(function(response) {
//     // handle success
//     console.log(response);

//     document.querySelector('#weather h1').innerHTML = `City Name: ${response.data.name}`;
//     document.querySelector('#weather-status').innerHTML = `Weather: ${response.data.weather[0].main}`;
//     document.querySelector('#weather-desc').innerHTML = `Description: ${response.data.weather[0].description}`;
//     document.querySelector('#temperature').innerHTML = `Temperature in Celsius: ${Math.floor(response.data.main.temp-273.15)}deg C`;
//     document.querySelector('#wind-speed').innerHTML = `Wind Speed: ${response.data.wind.speed} min/sec`;

//     document.querySelector('#time').innerHTML = `Time: ${new Date(response.data.dt * 1000).getHours()}:${new Date(response.data.dt * 1000).getMinutes()}:${new Date(response.data.dt * 1000).getSeconds()}`;
//     document.querySelector('#date').innerHTML = `Date: ${new Date(response.data.dt * 1000).getDate()} of ${new Date(response.data.dt * 1000).getMonth()}th ${new Date(response.data.dt * 1000).getFullYear()}`;




// })
// .catch(function(error) {
//     // handle error
//     document.querySelector('#weather h1').innerHTML = `Error!! Wrong input`;
//     document.querySelector('#weather-status').innerHTML = "";


// })
// .finally(function() {
//     // always executed
// });
// }











// let handleSuccess = function(response) {
//     // handle success
//     console.log("SUCCESS!");
//     console.log(response);
//     for (let i = 0; i < response.data.length; i++) {
//         // console.log(response.data[i]);
//         let message = response.data[i];
//         document.querySelector("ul").innerHTML +=
//             `<ul class="design">
//                <li >
//                <img src="${message.profilePic}" />
//               <h4>${message.name}</h4>
//               <h4>${message.number}</h4>
//                <h4>${message.firstLine}</h4>
//                <h4>${message.time}</h4>

//             </li>
//         </ul>
//     `

//     }
// }

// let handleError = function(error) {
//     // handle error
//     console.log("ERROR!!!!!!! :'-[ ");
//     console.log(error);
// }

// let finishUp = function() {
//     // always executed
//     console.log("THE END!");
// }


// // Make a request for a user with a given ID
// axios.get('https://tk-whatsapp.herokuapp.com/messages')
//     .then(handleSuccess)
//     .catch(handleError)
//     .finally(finishUp);





// https://www.github.com/search?q=Jamia-fatima

// protocol : http
// path: /search
// queryString : q= jamila-fatima
// server address::www.github.com