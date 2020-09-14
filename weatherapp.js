// Get the weather 
// Get the Forecast
// Save the history

// history click event (on li elements)

// second - get local storage
// key should be "history" and value is array of strings of cities
// stringify to save 
// parse history use || []

// if something is in history, search the last element searchWeather(history[history.length-1])
// make history buttons (list items class llist-group-item list-group-iteem-action)

// Search Weather
// search click evnt 
function searchWeather(city) {

// call api 
    var apiKey = "2644d35b2adfcc8bc5136b634f1b23fb";
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";


    var queryURL = weatherURL + city + "&appid=" + apiKey + "&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
// get results
        var results = response;

        console.log(results)
        $("#today").empty();

        var newDivCard = $("<div class = 'card'></div>");
// building current weather 
        $("#today").append(newDivCard)

// creating cards 
        $(".card").append(($("<h3 class = 'card-title current-city col-12'></h3>")).text((results.name) +  ' ' + moment().format('L')));
        $(".card-title").append(($("<img id='wicon'" + "src='http://openweathermap.org/img/w/" + results.weather[0].icon + ".png'" + "alt='Weather icon'>")))
        // call get forecast
        $(".card").append($("<p class='card-text'></p>").text("Temperature: " + results.main.temp + " °F"))
        $(".card").append($("<p class='card-text'></p>").text("Humidity: " + results.main.humidity + " %"))
        $(".card").append($("<p class='card-text'></p>").text("Wind Speed: " + results.wind.speed + " MPH"))

        getUVIndex(results.coord.lat, results.coord.lon)
    })


}
// checks if it exists in history - if not push to llocal storage 


// call get uv index
function getUVIndex (lat, lon){
    console.log ("lat" + lat)
    console.log ("lon" + lon)
}




// make 3 divs 
// once your data is there work on styling

$(document).ready(function () {
    // first - click events 
    $(".searchBtn").on("click", function () {
        var searchInput = $(".searchInput").val();
        searchWeather(searchInput)

    })
});