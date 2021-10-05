var searchBtn = $('#searchButton');

var sideBtn = $(".sideButtons");

var city = $('#city');

var currentDateEl = $('#currentDate');


searchBtn.on('click', getInfo);

// sideBtn.on('click', displayHistory);

function getInfo(event) {
	event.preventDefault();
	var UserCity = city.val();
	cityWeather(UserCity);
	forecast(UserCity);
	displayDate();
	displayFutureDate();
	displaySearchBtn(UserCity);

}


function displaySearchBtn(UserCity) {
	sideBtn.append('<button>' + UserCity + '</button>');
	
}

// working on displaying search history
// function displayHistory(UserCity) {
// 	cityWeather(UserCity);
// 	forecast(UserCity);
// }

function displayDate() {
	var rightNow = moment().format('MMM Do YYYY');
	currentDateEl.text(rightNow);

}

function displayFutureDate() {
	var newDateOne = moment().add(1, "d");
	$("#dayOne").text(newDateOne.format("MMM Do YYYY"));
	
	var newDateTwo = moment().add(2, "d");
	$("#dayTwo").text(newDateTwo.format("MMM Do YYYY"));
	
	var newDateThree = moment().add(3, "d");
	$("#dayThree").text(newDateThree.format("MMM Do YYYY"));
	
	var newDateFour = moment().add(4, "d");
	$("#dayFour").text(newDateFour.format("MMM Do YYYY"));
	
	var newDateFive = moment().add(5, "d");
	$("#dayFive").text(newDateFive.format("MMM Do YYYY"));
}

function cityWeather(UserCity) {
	var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + UserCity + "&appid=c58ae0ce4d9dbca902abb9fdf5ec7069";

	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
		displayInfo(data.name, data.main.temp, data.wind.speed, data.main.humidity);
		Uvindex(data.coord.lat, data.coord.lon);
	
	});
}

function forecast(UserCity) {
	var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + UserCity + "&appid=c58ae0ce4d9dbca902abb9fdf5ec7069";
	
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
			displayFutureOne(data.list[0].main.temp, data.list[0].wind.speed, data.list[0].main.humidity);
			displayFutureTwo(data.list[1].main.temp, data.list[1].wind.speed, data.list[1].main.humidity);
			displayFutureThree(data.list[2].main.temp, data.list[2].wind.speed, data.list[2].main.humidity);
			displayFutureFour(data.list[3].main.temp, data.list[3].wind.speed, data.list[3].main.humidity);
			displayFutureFive(data.list[4].main.temp, data.list[4].wind.speed, data.list[4].main.humidity);
		});	

}

function Uvindex(lat, lon) {
var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&appid=c58ae0ce4d9dbca902abb9fdf5ec7069"

	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data)
		displayUvindex(data.current.uvi);
	
	});
}
function displayInfo (name, temp, speed, humidity) {
	$("#currentCity").text(name);
	var convertedTemp = Math.round((temp-273.25) * 9/5 + 32)
	$("#currentTemp").text(convertedTemp + '°' + 'F' + ' temperature');
	$("#currentWind").text(speed + ' MPH' + ' wind speed');
	$("#currentHumidity").text(humidity + '%' + ' humidity');

}
function displayFutureOne (temp, speed, humidity) {
	$(".cards").css("border", "2px solid green");
	var convertedFutureTemp = Math.round((temp-273.15) * 9/5 + 32)
	$("#tempOne").text(convertedFutureTemp + '°' + 'F' + ' Projected temperature');
	$("#windOne").text(speed + ' MPH' + ' Projected wind speed');
	$("#humidityOne").text(humidity + '%' + ' Projected humidity');
	
	};

function displayFutureTwo (temp, speed, humidity) {
	var convertedFutureTemp = Math.round((temp-273.15) * 9/5 + 32)
	$("#tempTwo").text(convertedFutureTemp + '°' + 'F' + ' Projected temperature');
	$("#windTwo").text(speed + ' MPH' + ' Projected wind speed');
	$("#humidityTwo").text(humidity + '%' + ' Projected humidity');
		
	};

function displayFutureThree (temp, speed, humidity) {
	var convertedFutureTemp = Math.round((temp-273.15) * 9/5 + 32)
	$("#tempThree").text(convertedFutureTemp + '°' + 'F' + ' Projected temperature');
	$("#windThree").text(speed + ' MPH' + ' Projected wind speed');
	$("#humidityThree").text(humidity + '%' + ' Projected humidity');
			
	};
function displayFutureFour (temp, speed, humidity) {
		var convertedFutureTemp = Math.round((temp-273.15) * 9/5 + 32)
		$("#tempFour").text(convertedFutureTemp + '°' + 'F' + ' Projected temperature');
		$("#windFour").text(speed + ' MPH' + ' Projected wind speed');
		$("#humidityFour").text(humidity + '%' + ' Projected humidity');
				
	};
function displayFutureFive (temp, speed, humidity) {
	var convertedFutureTemp = Math.round((temp-273.15) * 9/5 + 32)
		$("#tempFive").text(convertedFutureTemp + '°' + 'F' + ' Projected temperature');
		$("#windFive").text(speed + ' MPH' + ' Projected wind speed');
		$("#humidityFive").text(humidity + '%' + ' Projected humidity');
					
	};										
function displayUvindex(uvi) {
	$("#currentUvi").text(uvi + ' Current UV Index');

	
}