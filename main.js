// declare variables
var searchBtn = $('#searchButton');
var sideBtn = $(".sideButtons");
var city = $('#city');
var currentDateEl = $('#currentDate');

// event listener
searchBtn.on('click', getInfo);

// sideBtn.on('click', displayHistory);

// function to start when city is entered and search button is clicked
function getInfo(event) {
	event.preventDefault();
	var UserCity = city.val();
	cityWeather(UserCity);
	forecast(UserCity);
	displayDate();
	displayFutureDate();
	displaySearchBtn(UserCity);

}

// function to display search buttons
function displaySearchBtn(UserCity) {
	sideBtn.append('<button>' + UserCity + '</button>');
	
}

// still working on function for displaying search history
// function displayHistory(UserCity) {
// 	cityWeather(UserCity);
// 	forecast(UserCity);
// 


// function for date and future dates
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

// function to get current weather
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
		displayCurrentImage(data.weather[0].id);
		console.log(data.weather[0].id)
	
	});
}

// function to get forecast and to display all the info
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
			displayFutureImgOne(data.list[0].weather[0].id);
			displayFutureImgTwo(data.list[1].weather[0].id);
			displayFutureImgThree(data.list[2].weather[0].id);
			displayFutureImgFour(data.list[3].weather[0].id);
			displayFutureImgFive(data.list[4].weather[0].id);
		});	

}

// function for UV
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
// functions to display all the info for current weather forecast and images
function displayInfo (name, temp, speed, humidity) {
	$("#currentCity").text(name);
	var convertedTemp = Math.round((temp-273.25) * 9/5 + 32)
	$("#currentTemp").text(convertedTemp + '°' + 'F' + ' temperature');
	$("#currentWind").text(speed + ' MPH' + ' wind speed');
	$("#currentHumidity").text(humidity + '%' + ' humidity');
	

}
function displayFutureOne (temp, speed, humidity) {
	$(".cards").css("border", "4px solid white");
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

function displayCurrentImage (id) {
	if (id === 801, 802, 803, 804) {
		$("#currentImg").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id === 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#currentImg").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id === 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#currentImg").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id === 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#currentImg").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#currentImg").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 

function displayFutureImgOne (id) {
	if (id === 801, 802, 803, 804) {
		$("#imageOne").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id === 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#imageOne").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id === 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#imageOne").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id === 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#imageOne").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#imageOne").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 
function displayFutureImgTwo (id) {
	if (id === 801, 802, 803, 804) {
		$("#imageTwo").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id === 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#imageTwo").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id === 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#imageTwo").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id === 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#imageTwo").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#imageTwo").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 
function displayFutureImgThree (id) {
	if (id === 801, 802, 803, 804) {
		$("#imageThree").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id === 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#imageThree").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id === 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#imageThree").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id === 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#imageThree").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#imageThree").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 
function displayFutureImgFour (id) {
	if (id === 801, 802, 803, 804) {
		$("#imageFour").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id === 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#imageFour").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id === 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#imageFour").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id === 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#imageFour").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#imageFour").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 
function displayFutureImgFive (id) {
	if (id == 801, 802, 803, 804) {
		$("#imageFive").attr("src", "http://openweathermap.org/img/wn/04d@2x.png");
	
	} else if (id == 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622) {
		$("#imageFive").attr("src", "http://openweathermap.org/img/wn/13d@2x.png");
	
	} else if (id == 500, 501, 502, 503, 504, 511, 520, 521, 522, 531) {
		$("#imageFive").attr("src", "http://openweathermap.org/img/wn/10d@2x.png");
	
	} else if (id == 200, 201, 202, 210, 211, 212, 221, 230, 231, 232) {
		$("#imageFive").attr("src", "http://openweathermap.org/img/wn/11d@2x.png");
	} else {
		$("#imageFive").attr("src", "http://openweathermap.org/img/wn/01d@2x.png");
	}
		
} 