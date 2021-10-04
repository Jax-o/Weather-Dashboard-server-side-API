var searchBtn = $('#searchButton');

var city = $('#city');

var currentDateEl = $('#currentDate');

searchBtn.on('click', getInfo);

function getInfo(event) {
	event.preventDefault();
	var UserCity = city.val();
	cityWeather(UserCity);
	// forecast(UserCity);
	displayDate();

}

function displayDate() {
	var rightNow = moment().format('MMM Do YYYY');
	currentDateEl.text(rightNow);

}


function cityWeather(UserCity) {
	var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + UserCity + "&appid=c58ae0ce4d9dbca902abb9fdf5ec7069"

	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
		printCityName(data.name);
	});
	
}

function printCityName (name) {
	$("#currentCity").text(name);
}
















