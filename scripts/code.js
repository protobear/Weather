//globals


let globals = {
    //not assigned by init
    backgroundImage: '',
    location: '',
//Search
    searchInput: $("#searchInput"),
    searchInputContent: ''
}



const setup = () => {

    $('#nowView').hide();
    $('#nowBox').hover(()=>$('#nowView').show(), ()=> $('#nowView').hide());

    $('#todayView').hide();
    $('#todayBox').hover(()=>$('#todayView').show(), ()=> $('#todayView').hide());



    //searchbar, if in focus and enter is pressed then searchinput is in searchinputcontent
    $(document).on('keypress',function(e) {
        if($("#searchInput").is(':focus') && e.which === 13) {
            globals.searchInputContent = $("#searchInput").val();
            console.log(globals.searchInputContent)
            GetAndSetWeather();
        }
    });
}


const GetAndSetWeather = () =>{

    currentURL = "http://api.weatherapi.com/v1/forecast.json?key=a9f26adcfd3d4e2fbda204136201611&q=Bornem&days=3"
    //get and set current
    $.ajax( {
        url: currentURL,
        //key: "a9f26adcfd3d4e2fbda204136201611",
        type: "get",
        success: setCurrentWeather
    })

}

const myCodeIsACrime = (jqXHR, textStatus, errorThrown) =>{
    console.log("Error")
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
}

const setCurrentWeather = (receivedData) =>{
    //now: nowdate, nowimage, nowtemp

    let data = receivedData;
    console.log(data);

    //current
    $("#nowTemp").text(data.current.temp_c + "°C");
    $("#nowTitle").text("//" + data.location.name);
    $("#nowDate").text(data.location.localtime);
    $("#nowImage").attr("src", `https:${data.current.condition.icon}`);

    $("#nowvisibility").text("//Visibility: " + data.current.vis_km +"KM");
    $("#nowwindpeed").text("//Wind Speed: " + data.current.wind_kph +"KM/H");



    //today
    $("#todayForecast").text(data.forecast.forecastday[0].day.condition.text);
    $("#todayImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#todayMin").text(data.forecast.forecastday[0].day.mintemp_c + "°C");
    $("#todayMax").text(data.forecast.forecastday[0].day.maxtemp_c + "°C");

    $("#todayvisibility").text("//Average visiblity" + data.forecast.forecastday[0].day.avgvis_km + "KM");
    $("#todaywindpeed").text("//Average wind speed" + data.forecast.forecastday[0].day.maxwind_kph + "KM/H");


    //tomorrow
    $("#tomorrowForecast").text(data.forecast.forecastday[1].day.condition.text);
    $("#tomorrowImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#tomorrowMin").text(data.forecast.forecastday[1].day.mintemp_c + "°C");
    $("#tomorrowMax").text(data.forecast.forecastday[1].day.maxtemp_c + "°C");

    //overmorrow (yes its a word i double checked)

        let date = new Date(data.forecast.forecastday[2].date);
        let datestring =  date.toLocaleDateString('en-US', { weekday: 'long' });


    $("#overmorrowTitle").text("//" + datestring +"'s Forecast");
    $("#overmorrowForecast").text(data.forecast.forecastday[2].day.condition.text);
    $("#overmorrowImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#overmorrowMin").text(data.forecast.forecastday[2].day.mintemp_c + "°C");
    $("#overmorrowMax").text(data.forecast.forecastday[2].day.maxtemp_c + "°C");

}


window.addEventListener("load", setup)